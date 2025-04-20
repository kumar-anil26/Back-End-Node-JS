exports.getError=(req, res, next) => {
  res.render("store/404",{pageTitle:'Page not found!'});
};
