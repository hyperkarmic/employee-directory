//this makes axios calls

import axios from "axios";

const getUsers = () =>
  axios.get("https://randomuser.me/api/?results=100&nat=gb");

export default getUsers;
