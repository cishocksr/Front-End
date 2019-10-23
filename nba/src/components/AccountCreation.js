import React from 'react'
import useForm from 'react-hook-form';
import axios from 'axios';
import {Form, Button} from 'semantic-ui-react'


const AccountCreation = (props) => {

  const {register, handleSubmit} = useForm();
  
  const onSubmit = (values) => {
    console.log(values);
    axios.post('https://nba-predictor-ptbw.herokuapp.com/register', {'email': values.email, 'password': values.password})
      .then(res => {
        console.log(res);
        props.history.push('/dashboard')
      })
      .catch(err => console.log(err))
  }

  return(
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Field>
        <label>Email</label>
        <input type="text" ref={register} name='email' />
      </Form.Field>
      <Form.Field>
        <label>Password</label>
        <input type="password" ref={register} name='password' />
      </Form.Field>
      <Button type='submit'>Create Account</Button>
    </Form>
  )
}

export default AccountCreation
