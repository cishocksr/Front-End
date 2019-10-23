import React from 'react'
import axios from 'axios'
import useForm from 'react-hook-form'
import {Form, Button} from 'semantic-ui-react'


const Login = (props) => {

  const {register, handleSubmit} = useForm();
  
  const onSubmit = (values) => {
    axios.post('https://nba-predictor-ptbw.herokuapp.com/login', {'email': values.email, 'password': values.password})
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push('/dashboard')
      })
      .catch(err => console.log(err))
  }

  return(
    <Form onSubmit={handleSubmit(onSubmit)}>    
      <Form.Field>
        <label>Email</label>
        <input type="text" ref={register} name='email' placeholder='Email' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type="password" ref={register} name='password' placeholder='Password' />
      </Form.Field>
      <Button>Login</Button>
    </Form>
  )
}

export default Login