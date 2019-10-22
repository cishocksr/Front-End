import React from 'react'
import useForm from 'react-hook-form';
import axios from 'axios'


const AccountCreation = () => {

  const {register, handleSubmit} = useForm();
  
  const onSubmit = (values) => {
    console.log(values);
    axios.post('https://nba-predictor-ptbw.herokuapp.com/register', {'email': values.email, 'password': values.password})
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input type="text" ref={register} name='email' />

      <label>Password</label>
      <input type="password" ref={register} name='password' />

      <button type='submit'>Create Account</button>
    </form>
  )
}

export default AccountCreation
