import User from '../models/user.model.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const signup=async (req, res)=>{
    try {
        console.log(req.body)
        const {fullName, username,password,confirmPassword, gender}= req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({error:"Password don't match"})
        }

        const user =await User.findOne({username});

        if (user) {
            return res.status(400).json({error:"Username already exist"})
        }

        const hashedPassword = bcryptjs.hashSync(password,12)


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser =new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profilePic:gender=='male'?boyProfilePic:girlProfilePic,
        });


        if (newUser) {
            await newUser.save();
             const token =jwt.sign({id:newUser._id},process.env.JWT_SECRET,{expiresIn:'15d'});

               const {password:hashedPassword,...user}=newUser._doc;

               const expiryDate = new Date(Date.now()+(24 * 60 * 60 * 1000));


               res.cookie('token',token ,{httpOnly:true,expires:expiryDate}).status(200).json({user});

        }else{
            res.status(400).json({ error: "Invalid user data" });
        }

    } catch (error) {
        console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });    
    }
}

export const signin= async (req, res)=>{
    try {
        const {username,password}=req.body;

        const userdb=await User.findOne({username})

        const validPassword = bcryptjs.compareSync(password,userdb.password);

        if (!userdb || !validPassword) {
			return res.status(400).json({ error: "Invalid username or password" });
		}

          const token =jwt.sign({id:userdb._id},process.env.JWT_SECRET,{expiresIn:'15d'});

               const {password:hashedPassword,...user}=userdb._doc;

               const expiryDate = new Date(Date.now()+(24 * 60 * 60 * 1000));


               res.cookie('token',token ,{httpOnly:true,expires:expiryDate}).status(200).json({user});



    } catch (error) {
        console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
}

export const signout=(req, res)=>{
    try {
        res.clearCookie('token').status(200).json("Signout successfull")

    } catch (error) {
        console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
    }
}