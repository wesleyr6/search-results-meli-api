import express from "express";
import { getItems, getItemDetail } from "../controllers/Items";

const router = express.Router();

router.get("/items", getItems);
router.get("/items/:id", getItemDetail);

export default router;
