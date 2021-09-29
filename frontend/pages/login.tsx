import type { NextPage } from 'next'
import styled from '@emotion/styled'
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const Login: NextPage = () => {
  const FormLogin = styled.form`
    display: flex;
    flex-flow: column wrap;
    align-items: center; 
    .titleForm {
      font-size: 45px;
      color: var(--firstSecondary);
      text-decoration: underline;
      box-shadow: 0px 0px 6px var(--firstSecondary);
      border: 3px solid var(--primary);
      padding: 10px;
    }
    .labelForm {
      font-size: 21px;
      padding: 10px;
      border-bottom: 2px solid var(--primary);
      width: 280px;
    }
    .inputForm {
      width: 280px;
      font-size: 17px;
      padding: 10px;
      margin-top: 10px;
      border-radius: 10px;
      border: 1px solid #ccc;
      box-shadow: 0px 0px 3px #ccc; 
    }
    .submitForm {
      margin-top: 20px;
      padding: 10px; 
      width: 280px;
      border-radius: 20px;
      background-color: var(--primary);
      color: white;
      border: none;
      font-size: 20px;
      font-weight: bold;
      cursor: pointer;
      transition: 300ms all;
    }
    .submitForm:hover {
      background-color: var(--secondary);
    }
  `
  const yupLogin = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(4).max(40)
  })

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(yupLogin)
  })

  const submitForm = (data: any) => console.log(data)
  
  return (
    <FormLogin onSubmit={handleSubmit(submitForm)}>
      <h1 className='titleForm'>Login</h1>
      <label className='labelForm' htmlFor='email'>Email</label>
      <input type="email" {...register('email')} placeholder='Email' className='inputForm' />
      <label className='labelForm' htmlFor='password'>Password</label>
      <input type="password" {...register('password')} placeholder='Password' className='inputForm' />
      <input type="submit" className='submitForm' />
    </FormLogin>
  )
}

export default Login