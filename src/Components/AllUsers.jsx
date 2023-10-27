import React from 'react';
import { Table, TableHead, TableCell, TableRow, TableBody, Button, styled } from '@mui/material'
import { getUsers } from '../Services/api.js';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px auto 0 auto;
`;


const Thead = styled(TableRow)`
 background-color: black;
 & > th{
  color:white;
  font-size:20px;
 }
`


const TRow = styled(TableRow)`
& > td{
    font-size: 18px
}
`;




const AllUsers = () => {

  const [users , setUsers] = useState([]);

  useEffect(()=> {
      getAllUsers();
  } , []);

  // function to get all the student data
  const getAllUsers = async () =>{
     const response = await getUsers();
     console.log(response);
     setUsers(response.data);
  }




  return (
     <StyledTable>
         <TableHead>
            <Thead>
                <TableCell>Id</TableCell>
                <TableCell>Student Name</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Gmail </TableCell>
                <TableCell>Course</TableCell>
                <TableCell></TableCell>
            </Thead>  
         </TableHead>

         <TableBody>
         {users.map((user) => (
                    <TRow>
                        <TableCell>{user._id}</TableCell> {/* change it to user.id to use JSON Server */}
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.mobile}</TableCell>
                        <TableCell>{user.gmail}</TableCell>
                        <TableCell>{user.course}</TableCell>
                        <TableCell>
                            <Button color="primary" variant="contained" style={{marginRight:10}}  component={Link} to={`/edit/${user._id}`} >Edit</Button> 
                            <Button color="secondary" variant="contained">Delete</Button>
                        </TableCell>
                    </TRow>
                ))}
         </TableBody>


     </StyledTable>
  )
}



export default AllUsers;
