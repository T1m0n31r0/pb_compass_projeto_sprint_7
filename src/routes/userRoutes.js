import express from "express";
import UserController from "../controllers/usersController.js";

const router = express.Router();

router
  .get("/users", UserController.readUsers)
  .get("/users/:id", UserController.readUserById)
  .post("/users", UserController.createUser)
  .put("/users/:id", UserController.updateUser)
  .delete("/users/:id", UserController.deleteUser)

export default router;   