import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';

const EmployeeCard = ({employee}) => {

     const onDeleteClick = (id)=>{
        axios.delete(`http://localhost:3000/api/employees/${id}`).then(()=>{
            window.location.reload();
        })
        

        .catch((err)=>{
            console.log("Delete error",err);
        })
     }


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="https://img.freepik.com/free-photo/3d-cartoon-portrait-person-practicing-law-related-profession_23-2151419550.jpg?t=st=1731818986~exp=1731822586~hmac=c36bcdf8c9afc263901cbde038aaaa00fae278186d71860f2e64aa767525d201&w=996"
        title="green iguana"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">
            {employee.name} 
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {employee.employeeID}  <br />
          {employee.address}<br/>
          {employee.nic}<br />
        </Typography>

      </CardContent>

      <CardActions>
        <Button size="small" color='primary' onClick={()=>onDeleteClick(employee._id)}>Delete</Button>
        <Link className="btn btn-outline-warning float-right" to={`/showdetails/${employee._id}`}>Details</Link>
        </CardActions>
    </Card>
  );
};

export default EmployeeCard;
