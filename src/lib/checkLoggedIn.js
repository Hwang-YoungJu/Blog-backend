const checkLoggedIn = (ctx, next) => {
  if (!ctx.status.user) {
    ctx.status = 401; //Unauthorized
    return;
  }
  return next();
};

export default checkLoggedIn;
