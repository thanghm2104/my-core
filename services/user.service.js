import { BehaviorSubject } from "rxjs";
import getConfig from "next/config";
import Router from "next/router";
const XLSX = require("xlsx");
import { fetchWrapper } from "helpers";
import { alertService } from "./alert.service";

const { publicRuntimeConfig } = getConfig();
const baseUrl = `${publicRuntimeConfig.apiUrl}/users`;
const userSubject = new BehaviorSubject(typeof window !== "undefined" && JSON.parse(localStorage.getItem("user")));

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  },
  login,
  logout,
  register,
  getAll,
  getById,
  update,
  delete: _delete,
  exportUser: exportUsersToExcel,
  search,
  createRandomUsers,
};

async function login(username, password) {
  const user = await fetchWrapper.post(`${baseUrl}/authenticate`, { username, password });

  // publish user to subscribers and store in local storage to stay logged in between page refreshes
  userSubject.next(user);
  localStorage.setItem("user", JSON.stringify(user));
}
function generateRandomUser() {
  const firstName = Math.random().toString(36).substring(2, 15); // random string
  const lastName = Math.random().toString(36).substring(2, 15); // random string
  const username = `${firstName}.${lastName}`; // username is a combination of firstName and lastName
  const password = Math.random().toString(36).substring(2, 15); // random string

  return {
    firstName,
    lastName,
    username,
    password,
  };
}

// Create 100 random users
async function createRandomUsers() {
  for (let i = 0; i < 200; i++) {
    const user = generateRandomUser();
    await register(user);
  }
}

function logout() {
  alertService.clear();
  // remove user from local storage, publish null to user subscribers and redirect to login page
  localStorage.removeItem("user");
  userSubject.next(null);
  Router.push("/account/login");
}

async function register(user) {
  await fetchWrapper.post(`${baseUrl}/register`, user);
}

async function getAll(params) {
  return await fetchWrapper.get(`${baseUrl}?${params}`);
}

async function getById(id) {
  return await fetchWrapper.get(`${baseUrl}/${id}`);
}

async function update(id, params) {
  await fetchWrapper.put(`${baseUrl}/${id}`, params);

  // update stored user if the logged in user updated their own record
  if (id === userSubject.value.id) {
    // update local storage
    const user = { ...userSubject.value, ...params };
    localStorage.setItem("user", JSON.stringify(user));

    // publish updated user to subscribers
    userSubject.next(user);
  }
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id) {
  await fetchWrapper.delete(`${baseUrl}/${id}`);

  // auto logout if the logged in user deleted their own record
  if (id === userSubject.value.id) {
    logout();
  }
}

async function exportUsersToExcel() {
  // Fetch users from the API
  const users = await fetchWrapper.get(baseUrl);
  // Prepare data for the Excel file
  const data = users?.rows?.map((user) => ({
    Họ: user.firstName,
    Tên: user.lastName,
  }));

  // Create a new worksheet
  const worksheet = XLSX.utils.json_to_sheet(data);

  // Create a new workbook and add the worksheet to it
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Users");

  // Write the workbook to a file
  XLSX.writeFile(workbook, "users.xlsx");
}
// services/userService.js
async function search(query) {
  return await fetchWrapper.get(`${baseUrl}?search=${query}`);
}
