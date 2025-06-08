import axios from "axios";

const instanse = axios.create({
    baseURL : "https://frontend-test-assignment-api.abz.agency/api/v1"
})

export const usersApi = {
     getUsers() {
        return instanse.get("/users?page=1&count=6")
    },

    addUsers (page, count) {
      return instanse.get(`/users?page=${page}&count=${count}`)
    }
}

export const LoginAPI = {

  getPositions ()  {
   return instanse.get("/positions")
  },

  getToken () {
    return instanse.get("/token")
  },

  postUser(formData,token) {
        return instanse.post("/users",formData,{
            headers : {
                'Content-Type' : 'multipart/form-data',
                token : token
            }
        })
    }
}