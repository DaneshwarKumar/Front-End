import React from 'react';
import {FormControl, FormGroup, Typography} from '@mui/material';
import { InputLabel ,Input , styled , Button} from '@mui/material';
import { useState } from 'react';
import { addUser } from '../Services/api';
import { useNavigate } from 'react-router-dom';



const Container = styled(FormGroup)`
  width:50%;
  margin: 5% auto 5% auto;
  & > div{
    margin-top:20px;
  }
`

const defaultValue = {
  name:'',
  mobile:'',
  gmail:'',
  course:''
}


const AddUser = () => {

const [user,setUser] = useState(defaultValue);

let navigate = useNavigate();

// function to get the user data
const onValueChange = (e) => {
  setUser({...user,[e.target.name]: e.target.value});
}


// function to add the user details 
const addUserDetails = async () => {
   await addUser(user);
   navigate('/all');
}


  return (
    <Container>
    <Typography variant='h4'>Add Students </Typography>
        <FormControl>
            <InputLabel>Student Name</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='name' />
        </FormControl>

        <FormControl>
            <InputLabel>Mobile Number</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='mobile' />
        </FormControl>


        <FormControl>
            <InputLabel>Gmail </InputLabel>
            <Input onChange={(e) => onValueChange(e)}  name='gmail' />
        </FormControl>

        <FormControl>
            <InputLabel>Course</InputLabel>
            <Input onChange={(e) => onValueChange(e)} name='course' />
        </FormControl>

       <FormControl>
            <Button variant="contained" onClick={addUserDetails}>Add Student</Button>
       </FormControl>

    </Container>
  )
}

export default AddUser;
