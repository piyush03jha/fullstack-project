import bcrypt from "bcryptjs";
import User from "../modles/user.js"


export const register = async (req, res) => {
    try{
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            username,
            password: hashedPassword,
            isMfaActive: false,
        });
        console.log("New User :", newUser);
        await newUser.save();
        res.status(201).json({message:"User registered successfully"})
    }catch(error){
        res.status(500).json({
            error: "error registring user",
            message: error,
        })
    }
};
export const login = async (req, res) => {
    console.log("The authenticated user is :", req.user);
    res.status(200).json({
        message: "User logged n successfully",
        username: req.user.username,
        isMfaActive: req.user.isMfaActive,
    })
};
export const authStatus = async () => {};
export const logout = async () => {};
export const setup2Fa = async () => {};
export const verify2Fa = async () => {};
export const reset2Fa = async () => {};
