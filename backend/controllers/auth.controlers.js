import User from "../models/user.model.js"; // Import the User model
import bcrypt from 'bcrypt';
import generateTokenAndSetCookie from "../utils/generateToken.js";
export const signupUser = async (req, res) => {
    try {
        const { fullname, username, password, confirmpassword, gender } = req.body;

        // Check if the Two Passwords Are Equal 
        if (password != confirmpassword) {
            return res.status(400).json({ message: 'Passwords do not match' });
        }

        const existingUser = await User.findOne({ username });

        // Return  If THe User Already Exists
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        //Hashing Password
        const salt =  await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;
       
        // Else Wise  Create a New User
        const newUser = new User({
            fullname: fullname,
            username: username,
            password: hashedPassword,
            gender: gender,
            profilePic: gender == 'male' ? boyProfilePic : girlProfilePic
        });

        await generateTokenAndSetCookie(newUser._id, res);
        await newUser.save();
        
        res.status(201).json({
            _id: newUser._id,
            fullname: newUser.fullname,
            username: newUser.username,
            profilePic: newUser.profilePic
        });
    } catch (error) {
        console.log('Error in signup', error);
        res.status(500).json({ error: error.message });
    }
};

export const login = async (req, res) => {
	try {
		const { username, password } = req.body;
        //Get The User From The Database
		const user = await User.findOne({ username });
        // Check Passwords
		const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");
        // If THe User Does Not Exist or Wrong Password
		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}
        // Generate token 
		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullname,
			username: user.username,
			profilePic: user.profilePic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const logout = (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};
