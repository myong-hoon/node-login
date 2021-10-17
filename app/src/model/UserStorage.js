"use strict";

class UserStorage {
  static #users = {
    id: ["1234", "123"],
    pw: ["1234", "123"],
    name: ["원투쓰리포", "원투쓰리"],
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});

    return newUsers;
  }

  static getUserInfo(id) {
    const users = this.#users;
    const idx = users.id.indexOf(id);
    const userKeys = Object.keys(users);
    const userInfo = userKeys.reduce((newUser, info) => {
      newUser[info] = users[info][idx];
      return newUser;
    }, {});

    return userInfo;
  }

  static save(userInfo) {
    const users = this.#users;
    users.id.push(userInfo.id);
    users.pw.push(userInfo.pw);
    users.name.push(userInfo.name);
    return { success: true };
  }
}

module.exports = UserStorage;
