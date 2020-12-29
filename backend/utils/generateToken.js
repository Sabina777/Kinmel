import jwt from "jsonwebtoken";
const generateToken = (id) => {
  return jwt.sign({ id }, "sabmar123", {
    expiresIn: "30d",
  });
};

export default generateToken;
