export const authContext = ({ req }) => {
  if (req.cookies?.Authentication) {
    return { authentication: req.cookies.Authentication };
  }
};
