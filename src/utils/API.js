import axios from "axios"

let token = JSON.parse(localStorage.getItem("userInfo"))
token = token && token.token

export default axios.create({
  baseURL: "https://haminepal.herokuapp.com/api/v1/",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    "Access-Control-Allow-Origin": "*",
  },
})
