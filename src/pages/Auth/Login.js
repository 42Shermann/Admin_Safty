import React from 'react';
import '../Auth/log_regis.css'
import { useFormik } from 'formik';
import { AuthContext } from '../../context/dataContext';

export default function Login(){

    const { signIn } = React.useContext(AuthContext);

    const handleSubmit= async(data) =>{
        try {
            const res = await signIn(data);
          } catch (e) {
            console.log(e);
          }
    }

    const formik = useFormik({
        initialValues:{
            email:'',
            password:'',
        },
        onSubmit: Values => {
            handleSubmit(Values);
        }
    })
        return(
            
            <div class="container">
            <h1>Login</h1>
            <div class="forms-container">
      
              <div class="signin-signup">
                <form className="sign-in-form" onSubmit={formik.handleSubmit} >
                  <h2 class="title">Sign in</h2>
                  <div class="input-field">
                    <i class="fas fa-user"></i>
                    <input id='email' name='email' type="text" placeholder="Email" value={formik.values.email} onChange={formik.handleChange} required />
                  </div>
                  <div class="input-field">
                    <i class="fas fa-lock"></i>
                    <input id='password' name='password' type="password" placeholder="Password" value={formik.values.password} onChange={formik.handleChange} required/>
                  </div>
                  <input type="submit" value="Login" class="btn solid" />
                  <p class="social-text">Or Sign in with social platforms</p>

                </form>
            </div>
           </div>
        </div> 
        )
    }
