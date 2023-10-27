import React from 'react';
import {FormControl, FormGroup, Typography} from '@mui/material';
import { InputLabel ,Input , styled , Button} from '@mui/material';
import { useState , useEffect } from 'react';
import { getUser } from '../Services/api.js';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


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


const EditUser = () => {

const [user,setUser] = useState(defaultValue);

const navigate = useNavigate();
const {id} = useParams();


useEffect(() => {
  loadUserDetails();
},[]);



// function to load user  details 
const loadUserDetails = async () =>{
  const response = await getUser(id);
  setUser(response.data);
  console.log(response.data);
}


  return (
    <Container>
    <Typography variant='h4'>  Edit Details  </Typography>
        <FormControl>
            <InputLabel>Student Name</InputLabel>
            <Input  name='name' value= {user.name}  />
        </FormControl>

        <FormControl>
            <InputLabel>Mobile Number</InputLabel>
            <Input  name='mobile' value={user.mobile} />
        </FormControl>


        <FormControl>
            <InputLabel>Gmail </InputLabel>
            <Input   name='gmail'  value={user.gmail} />
        </FormControl>

        <FormControl>
            <InputLabel>Course</InputLabel>
            <Input  name='course' value={user.course} />
        </FormControl>

       <FormControl>
            <Button variant="contained">Edit Details</Button>
       </FormControl>

    </Container>
  )
}


export default EditUser;
