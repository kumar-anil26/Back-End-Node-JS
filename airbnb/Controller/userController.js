//Local module
const User = require("../Model/user");

exports.getHomeList = (req, res, next) => {
    const { hname, pnight, location, rating, photoURL } = req.body;
    const user = new User(hname, pnight, location, rating, photoURL);
    user.save()
     res.render("store/home-details", {
      pageTitle: "Home Details",
      currentPage: "home details",
    });
};

exports.getAddHome = (req, res, next) => {
  res.render("store/add-home", {
    pageTitle: "Add Home",
    currentPage: "add home",
  });
};

exports.getBookingHome = (req, res, next) => {
  User.fetchAll(registeredHome => {
    res.render("store/booking", {
      registeredHome: registeredHome,
       pageTitle: "Booking Home",
      currentPage: "booking home",
    });
  });
};
