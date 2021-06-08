import fs from 'fs';
import Header from './UserElements/Header.jsx'
import {Form,Button} from 'react-bootstrap'
import {CText,DivContainer,ColorsDatePick,CustomComponents} from './UserElements/CustomElements.jsx'
const axios = require('axios');


const req=()=>{
axios.get('http://bit.ly/2mTM3nY').then(function (response) {console.log(response);})
.catch(function (error) { /*handle error*/ console.log(error);}).then(function () {/* always executed*/ });

axios.post('https://www.google.com',{search:'data'}).then((res)=>{
    console.log(res)
}).catch((error)=>{console.log(error);}).then(()=>{});

// axios({method: 'get',url: 'https://lh3.googleusercontent.com/iXmJ9aWblkGDpg-_jpcqaY10KmA8HthjZ7F15U7mJ9PQK6vZEStMlathz1FfQQWV5XeeF-A1tZ0UpDjx3q6vEm2BWZn5k1btVSuBk9ad=s660',responseType: 'stream'}).then((res)=>{
//     console.log(res)
// }).catch((error)=>{console.log(error);}).then(()=>{});
}


export default function Contact(){
return(
<DivContainer value="enter">
    <Header/>
    <CText ></CText>
    <ColorsDatePick color="red" ></ColorsDatePick>
    <CustomComponents.DatePicker></CustomComponents.DatePicker>
    <Form onSubmit={(e)=>{e.preventDefault();req()}} >
    <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
        We'll never share your email with anyone else.
    </Form.Text>
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
    Submit
    </Button>
    </Form>
</DivContainer>
)
}