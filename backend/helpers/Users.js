const Users = require("../constants/Users.json");

const CheckUserNamePassword = (Username, Password) => {
  if (typeof (Users[Username] !== "undefined")) {
    if (Users[Username].Password === Password) {
      return Users[Username];
    } else {
      return -1;
    }
  } else {
    return 0;
  }
};

const RegisterNewUser = (Username, Password, Name, Email, Type) => {
  const Newuser = {
    Name,
    Password,
    Email,
    Type: "Employee",
    Verified: false,
    CreatedAt: new Date(),
  };
  if (typeof (Users[Username] !== "undefined")) {
    Users[Username] = Newuser;
    return true;
  } else {
    //User already exists
    return false;
  }
};

module.exports = { CheckUserNamePassword, RegisterNewUser };
