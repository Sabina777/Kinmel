import bcrypt from "bcrypt";
const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("12345", 10),
    isAdmin: true,
  },
  {
    name: "Sanna Shakya",
    email: "sanna@gmail.com",
    password: bcrypt.hashSync("54898", 10),
  },
  {
    name: "John Doe",
    email: "john@gmail.com",
    password: bcrypt.hashSync("6568945", 10),
  },
];

export default users;
