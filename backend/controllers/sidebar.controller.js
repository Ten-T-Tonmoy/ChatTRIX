import User from "../models/user.model.js";

export const getSidebarUsers = async (req, res) => {
  try {
    const loggedUser = req.query.userId;
    const filteredUsers = await User.find({
      _id: { $ne: loggedUser },
    }).select("-password");
    //keeping aside passwords
    console.log(filteredUsers);
  } catch (er) {
    console.error("error occurerd while getting sidebar users", er.message);
    res.status(500).json({
      error: "Sidebar user fetching error backend ",
    });
  }
};
