const { nanoid } = require("nanoid");

function createId() {
  return nanoid();
}

const initialUsers = () => {
  let initialUserList = [
    { id: createId(), kullaniciadi: "mete", sifre: "123456" },
    { id: createId(), kullaniciadi: "mete1", sifre: "123456" },
    { id: createId(), kullaniciadi: "mete2", sifre: "123456" },
    { id: createId(), kullaniciadi: "mete3", sifre: "123456" },
  ];
  return initialUserList;
};

let users = initialUsers();

const getAllUsers = () => {
  return users;
};

const createUser = (user) => {
  user.id = createId();
  users.push(user);
  return Promise.resolve(user);
};

const findUser = (user) => {
  let isExistUser = false;
  let existUser = users.find(
    (userItem) =>
      userItem.kullaniciadi === user.kullaniciadi &&
      userItem.sifre === user.sifre
  );
  if (findUser) {
    isExistUser = true;
    //return isExistUser;
  }
  return isExistUser;
};

const checkUserName = (kullaniciadi) => {
  let isExistUserName = false;
  for (let i = 0; i < users.length; i++) {
    const userItem = users[i];
    if (userItem.kullaniciadi == kullaniciadi) {
      isExistUserName = true;
      break;
    }
  }
  return isExistUserName;
};
module.exports = {
  getAllUsers,
  createUser,
  findUser,
  checkUserName,
};