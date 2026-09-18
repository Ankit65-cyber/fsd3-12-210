// we use in memory database
let users = [
  {
    id: 1,
    name: "Abu",
    mob: "98345xxxxx",
    email: "abu.example@exam.com",
  },
  {
    id: 2,
    name: "zaid",
    mob: "92345xxxxx",
    email: "zaid.example@exam.com",
  },
];

let nextId = 3;

export const getUsers = () => users;

export const addUser = (user) => {
  user.id = nextId++ ; 
  users.push(user) ; 
  return user ; 
}