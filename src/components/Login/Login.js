import { useState } from "react";
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom";



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Login = () => {
  const navigate = useNavigate()
  const succefullyLogin = (email) => {
    navigate(`/dashboard?user=${email}`)
  }


  const classes = useStyles();
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');



  const emailHandler = (e) => {
    setUserEmail(e.target.value)
  }
  const passwordHandler = (e) => {
    setUserPassword(e.target.value)
  }



  const loginFormHandler = (e) => {
    e.preventDefault();
    const userData = JSON.parse(localStorage.getItem(userEmail))
    if (userData !== null) {

      if (userPassword === userData.password) {
        succefullyLogin(userEmail);
      }
      else {
        setErrorMessage("Incorrect Password")
      }


    }
    else {
      setErrorMessage("Please create your account")
    }


    setUserEmail('');
    setUserPassword('');

  }
  return (<div>
    <form className={classes.root} onSubmit={loginFormHandler}>


      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={userEmail}
        onChange={emailHandler}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={userPassword}
        onChange={passwordHandler}
      />      <div>
        <Button type="submit" variant="contained" color="primary" >
          Login
        </Button>
      </div>
      <div><span>{errorMessage}</span> </div>

    </form >
  </div >)
}
export default Login;
