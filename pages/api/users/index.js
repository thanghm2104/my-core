import { apiHandler, usersRepo } from "helpers/api";
import { paramObject } from "../../../utils/function";

export default apiHandler({
  get: getAll,
});

async function getAll(req, res) {
  const payload = paramObject(req.url.split("?")[1]);
  const users = await usersRepo.getAll(payload);
  return res.status(200).json(users);
}
