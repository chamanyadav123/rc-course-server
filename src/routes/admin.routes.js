import { Router } from "express";
import { getUsers} from "../controllers/admin.controller.js";


const router = Router();
// api/admin/

router.route("/users").get(getUsers)

export default router