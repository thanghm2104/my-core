import Link from "next/link";
import { useState, useEffect } from "react";
import { FaPlus, FaFileExport, FaEdit, FaTrashAlt } from "react-icons/fa";

import { Spinner } from "components";
import { Layout } from "components/users";
import { userService } from "services";
import { BuildQueryParams } from "../../utils/function";

export default Index;

function Index() {
  const [users, setUsers] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState({ page: 1, limit: 10 });
  useEffect(() => {
    userService.getAll(BuildQueryParams(filter)).then((x) => {
      setUsers(x);
      console.log(x);
    });
  }, [filter]);

  function deleteUser(id) {
    setUsers(
      users.map((x) => {
        if (x.id === id) {
          x.isDeleting = true;
        }
        return x;
      })
    );
    userService.delete(id).then(() => {
      setUsers((users) => users.filter((x) => x.id !== id));
    });
  }

  return (
    <Layout>
      <h1>Quản lý người dùng</h1>
      <div className=" d-flex gap-2 mb-2">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          // how to event enter submit
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setFilter({ ...filter, keyword: searchQuery });
            }
          }}
          placeholder="Tìm kiếm người dùng"
        />
        <Link href="/users/add" className="btn btn-sm btn-success">
          <FaPlus /> Thêm mới
        </Link>
        <button className="btn btn-sm btn-success ml-2" onClick={() => userService.exportUser()}>
          <FaFileExport />
          Export to Excel
        </button>
        <button className="btn btn-sm btn-success ml-2" onClick={() => userService.createRandomUsers()}>
          <FaPlus /> Tạo random 100
        </button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: "30%" }}>STT</th>
            <th style={{ width: "30%" }}>First Name</th>
            <th style={{ width: "30%" }}>Last Name</th>
            <th style={{ width: "30%" }}>Username</th>
            <th style={{ width: "10%" }}></th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users?.rows?.map((user, idx) => (
              <tr key={user.id}>
                <td>{(filter.page - 1) * filter.limit + idx + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td style={{ whiteSpace: "nowrap" }}>
                  <Link href={`/users/edit/${user.id}`} className="btn btn-sm btn-primary me-1">
                    <FaEdit />
                  </Link>
                  <button
                    onClick={() => deleteUser(user.id)}
                    className="btn btn-sm btn-danger btn-delete-user"
                    disabled={user.isDeleting}
                  >
                    {user.isDeleting ? <span className="spinner-border spinner-border-sm"></span> : <FaTrashAlt />}
                  </button>
                </td>
              </tr>
            ))}
          {!users && (
            <tr>
              <td colSpan="4">
                <Spinner />
              </td>
            </tr>
          )}
          {users && !users?.rows.length && (
            <tr>
              <td colSpan="4" className="text-center">
                <div className="p-2">No Users To Display</div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <select value={filter.limit} onChange={(e) => setFilter({ ...filter, limit: e.target.value })}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="50">50</option>
        <option value="100">100</option>
        <option value="200">200</option>
      </select>
      <button onClick={() => setFilter({ ...filter, page: filter.page - 1 })} disabled={filter.page === 1}>
        Previous
      </button>
      <span>Page {filter.page}</span>
      <button onClick={() => setFilter({ ...filter, page: filter.page + 1 })} disabled={users && users.length === 0}>
        Next
      </button>
    </Layout>
  );
}
