import { Router } from "express";
import { searchPostOrCommunities } from "../controllers/search.controller.js";

const router = Router();

router.get("/search", searchPostOrCommunities);

export default router;
