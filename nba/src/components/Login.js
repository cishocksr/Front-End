import React from 'react'
import axios from 'axios'
import useForm from 'react-hook-form'


const Login = () => {

  const {register, handleSubmit} = useForm();
  
  const onSubmit = (values) => {
    axios.post('https://nba-predictor-ptbw.herokuapp.com/login', {'email': values.email, 'password': values.password})
      .then(res => localStorage.setItem('token', res.data.token))
      .catch(err => console.log(err))
  }

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input type="text" ref={register} name='email' />

      <label>Password</label>
      <input type="password" ref={register} name='password' />

      <button type='submit'>Submit!</button>
    </form>
  )
}

export default Login