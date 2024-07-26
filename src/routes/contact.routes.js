import { Router } from "express";
import {
  addSingleContactController,
  deleteSingleContactController,
  getAllContactsController,
  getSingleContactController,
  updateContactController,
} from "../controller/contact.controllers.js";

const router = Router();

router
  .route("/")
  .get(getAllContactsController)
  .post(addSingleContactController);
router
  .route("/:id")
  .put(updateContactController)
  .get(getSingleContactController)
  .delete(deleteSingleContactController);

export default router;
