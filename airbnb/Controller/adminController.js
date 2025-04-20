const user = require("../Model/user");

exports.getHomeList = (req, res, next) => {
  user.fetchAll((registeredHome) => {
    res.render("admin/admin-home-list", {
      registeredHome: registeredHome,
      pageTitle: "Home List",
      currentPage: "home list",
    });
  });
};
