import { Router } from "express";
const router = Router();
import * as userController from '../Controllers/user'
router.post('/adduser',userController.addUser);