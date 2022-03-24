import User from "../modules/user.js";

const isAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.user_id);

    if (!user) {
      throw new Error("User does not exist");
    }

    if (user.role == "admin") {
      next();
    } else {
      res.status(400).send("The current user is not admin and does not have privileges to access this endpoint!");
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default isAdmin;
