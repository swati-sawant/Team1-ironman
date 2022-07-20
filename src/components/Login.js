import React, {useState, useContext} from 'react';
import { AccountContext } from '../components/Account';
import { BrowserRouter as Router, Route,Link, Routes } from "react-router-dom";
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../UserPool';

export default () => 
{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    
  // const { authenticate } = useContext(AccountContext);


  const authenticate = async (Username, Password) =>
    await new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });
      const authDetails = new AuthenticationDetails({ Username, Password });

      user.authenticateUser(authDetails, {
        onSuccess: data => {
          
          console.log('onSuccess:', data);
          resolve(data);
        },

        onFailure: err => {
          console.error('onFailure:', err);
          reject(err);
        },

        newPasswordRequired: data => {
          console.log('newPasswordRequired:', data);
          resolve(data);
        }
      });
    });


   const onSubmit = event => {
     event.preventDefault();
     authenticate(email, password)
     .then(data => {
      <Link className="nav-link" to={'/SignUp'}>

      Login

    </Link>
       console.log('Logged in!', data);
     })
     .catch(err => {
       console.error('Failed to login!', err);
     })
    };

    return (
       <div>
       <form onSubmit={onSubmit}>
         <input
           value={email}
           onChange={event => setEmail(event.target.value)}
           placeholder = "Email address"
         />
 
         <input
           value={password}
           onChange={event => setPassword(event.target.value)}
           placeholder = "Password"
         />
 
         <button type='submit'>Login</button>
       </form>
     </div>
     );
 };













// const app1 = props => (
//     <LoginForm />
// );

// class LoginForm extends React.Component{
//     render(){
//       return(
        // <div id="loginform">
        //   <FormHeader title="Login" />
        //   <Form />
        // </div>
//       )
//     }
//   }

//   const FormHeader = props => (
//     <h2 id="headerTitle">Login</h2>
// );


// const Form = props => (
//    <div>
//      <FormInput description="Username" placeholder="Enter your username" type="text" />
//      <FormInput description="Password" placeholder="Enter your password" type="password"/>
//      <FormButton title="Log in"/>
//    </div>
  

// );

// const FormButton = props => (
//   <div id="button" class="row">
//     <button>{props.title}</button>
//   </div>
// );

// const FormInput = props => (
//   <div class="row">
//     <label>{props.description}</label>
//     <input type={props.type} placeholder={props.placeholder}/>
//   </div>
// );


// export default LoginForm





{/* <div id="loginform">
      <h2 id="headerTitle">Login</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="username">UserName</label>
        <input
          values={username}
          onChanges={(event) => setUserName(event.target.value)}
        ></input>
        <label htmlFor="password">Password</label>
        <input
          values={password}
          onChange={(event) => setPassword(event.target.value)}
        ></input>

        <button type="submit">Login</button>
        </form >
      </div > */}