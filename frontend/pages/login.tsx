import type { NextPage } from 'next'
import styled from '@emotion/styled'
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useAuth from '../hooks/useAuth'
import { AuthInterface } from '../interfaces/UserInterface';
import StoreInterface from '../interfaces/StoreInterface';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

const Login: NextPage = () => {
  const FormLogin = styled.form`
    display: flex;
    flex-flow: column wrap;
    align-items: center; 
    .titleForm {
      font-size: 35px;
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
      color: var(--firstSecondary);
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
  const { loginUser } = useAuth()
  let verifySubmit: boolean = false
  const yupLogin = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(4).max(40)
  })

  const { register, formState: { errors }, handleSubmit }: any = useForm({
    resolver: yupResolver(yupLogin)
  })

  const { isAuthFailed, token } = useSelector((state: StoreInterface) => state.auth)
  const router = useRouter()

  const submitForm = (data: AuthInterface) => {
    try {
      loginUser(data)
      if (!isAuthFailed && token) {
        router.push('/')
      }
    } catch (err) {
      console.log('Error to server, ' + err)
    }
  }
  
  return (
    <FormLogin onSubmit={handleSubmit(submitForm)}>
      <h1 className='titleForm'>Login</h1>
      <label className='labelForm' htmlFor='email'>Email</label>
      <input type="email" {...register('email', {
        required: 'The email is required',
        maxLength: {
          value: 64,
          message: 'The caracters is maximum'
        },
      })} placeholder='Email' className='inputForm' />
      {errors.email?.message && <span className='errorMessage'>{errors.email.message}</span>}
      <label className='labelForm' htmlFor='password'>Password</label>
      <input type="password" {...register('password', {
        required: 'The password is required',
        maxLength: {
          value: 40,
          message: 'The password is maximun length'
        },
        minLength: {
          value: 4,
          message: 'The password min 4 characters required'
        }
      })} placeholder='Password' className='inputForm' />
      {errors.password?.message && <span className='errorMessage'>{errors.password.message}</span>}
      {isAuthFailed && <span className='errorMessage'>{'The user is don\'t exist'}</span>}
      <input type="submit" className='submitForm' />
    </FormLogin>
  )
}

export default Login