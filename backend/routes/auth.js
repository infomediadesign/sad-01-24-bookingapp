import  express from "express";

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Hello this is the auth endpoint")
    
})

router.get("/register", (req, res)=>{
    res.send("Hello this is the register auth endpoint")
    
})



export default router