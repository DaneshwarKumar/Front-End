import axios from 'axios';

const URL = 'http://localhost:8000';

// function to add student data 
export const addUser = async (data) =>{
    try{
      return await axios.post(`${URL}/add`,data);
    }
    catch(error){
      alert('Error While Calling Add User API');
        console.log("Error While Calling Add Student API ", error);
    }
}


// function to get the student data 
export const getUsers = async () =>{
  try{
     return await axios.get(`${URL}/all`);
  }
  catch(error){
    console.log(`Error while calling the student API `, error);
  }
}


// function to get the suer data base on id 
export const getUser = async (id) =>{
  try{
     return await axios.get(`${URL}/${id}`);
  }
  catch(error){
    console.log(`Error while calling the student API `, error);
  }
}

