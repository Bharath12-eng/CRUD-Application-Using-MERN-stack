import express from "express";
//Creating the Routes for the Appliaction.
import {
  addItem,
  getItems,
  getItemById,
  editItem,
  deleteItem,
} from "../controller/Item-controller.js";

const router = express.Router();

router.post("/add", addItem);
router.get("/all", getItems);
router.get("/:id", getItemById);
router.put("/:id", editItem);
router.delete("/:id", deleteItem);

export default router;
