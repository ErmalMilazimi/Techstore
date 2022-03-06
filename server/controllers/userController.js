import User from "../modules/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Login in a existing user
export let login = async (req, res) => {
  try {
    console.log(req.body);
    // Get user input
    const { email, password } = req.body;

    // Validate if user exist in our database
    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Create token
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_SECRET,

        {
          expiresIn: "120h",
        }
      );

      // save user token
      user.token = token;
      // user
      res.status(200).json(user);
    } else {
      res.status(400).send("Invalid Credentials");
    }
  } catch (err) {
    console.log(err);
  }
};

// Register a new user
export let register = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    // check if user already exist
    // Validate if user exist in our database
    const oldUser = await User.findOne({ email });

    if (oldUser) {
      res.status(400).send("User already exists");
    }

    //Encrypt user password
    let encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const user = await User.create({
      username,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
      cart: [],
      role,
    });

    // Create token
    const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_SECRET, {
      expiresIn: "72h",
    });
    // save user token
    user.token = token;

    // return new user
    res.status(201).json(user);
  } catch (err) {
    console.log(err);
  }
};

// Returns Curent user's information
export const current = (req, res) => {
  try {
    res.send(req.user);
  } catch (error) {
    console.log(error);
  }
};

// Add product to cart
export let addToCart = (req, res) => {
  User.findOneAndUpdate({ productID: req.params.productID }, req.body, { new: true }, (err, User) => {
    if (err) {
      res.send(err);
    }
    res.json(User);
  });
};
