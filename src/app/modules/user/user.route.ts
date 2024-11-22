import { Router } from "express";
import auth from "../../middlewares/auth";
import { UserController } from "./user.controller";

const router = Router();


router.get("/", auth("creator"), UserController.getAllUser )
router.get("/:email", auth('creator'), UserController.getSingleUser )

export const UserRoutes = router;