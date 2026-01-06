import { Router} from "express"
import passport from "passport"
import { register, login, authStatus, setup2Fa, reset2Fa, verify2Fa, logout } from "../controllers/authController.js";

const router = Router();

//Registration Routes
router.post("/register", register);
//Login Routes
router.post("/login", passport.authenticate("local"), login);

//Auth Status Routes
router.get("/status", authStatus);

//Logout Routes
router.post("/logout", logout);

//2FA setup
router.post("/2fa/setup", setup2Fa)

//verify Route
router.post("/2fa/verify", verify2Fa)

//reset Route
router.post("/2fa/reset", reset2Fa)

export default router;
