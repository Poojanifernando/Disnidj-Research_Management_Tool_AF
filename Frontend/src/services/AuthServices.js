import axios from 'axios';



let LoginURL = "http://localhost:8000/signin";
let AuthURL = "http://localhost:8000/auth";
let getAllUsers = "http://localhost:8000/getallusers";
let Createuser = "http://localhost:8000/createUser";
let Updateuser = "http://localhost:8000/user/updateUserById/";
let Deleteuser = "http://localhost:8000/user/deleteUser/";

export async function RegisterCustomer(data) {
    const alldata = {
        Name:data.Name,
        ID:data.ID,
        Email:data.Email,
        PhoneNumber:data.PhoneNumber,
        Password:data.Password,
        userRole:"user"
    };

    return await axios.post(Createuser,alldata);
}


export async function LoginCustomer(data) {
    const alldata = {
      Email:data.Email,
      Password:data.Password,
    };
  
    return await axios.post(LoginURL,alldata);
}

export async function AuthCustomer(token) { 
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    return await axios.get(AuthURL,config);
}

export async function GetallUsers(){
  return axios.get(getAllUsers);
}




export async function UpdateAdmin(id,data) {
  const alldata = {
      name:data.name,
      ID:data.ID,
      email:data.email,
      PhoneNumber:data.PhoneNumber,
      password:data.password,
      userRole:"user"
  };

  return await axios.patch(Updateuser + id,alldata);
}

export async function DeleteUser(id) {
  return await axios.delete(Deleteuser + id);
}