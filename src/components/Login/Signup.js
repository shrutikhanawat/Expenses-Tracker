import { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useNavigate} from "react-router-dom";



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

const Signup = () => {

  const navigate = useNavigate()
  const navHandler = () =>{
    navigate('/Expenses-Tracker/login')
  }

  const classes = useStyles();

  const [enteredname, setName] = useState('');
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');

  const nameChangeHandler = (e) => {
    setName(e.target.value)
  }
  const emailChangeHandler = (e) => {
    setEnteredEmail(e.target.value);


  }
  const passwordChangeHandler = (e) => {
    setEnteredPassword(e.target.value)


  }
  

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const userDetail = {
      name: enteredname,
      email: enteredEmail,
      password: enteredPassword,
      expenses : []
     }
     const userData = JSON.parse(localStorage.getItem(enteredEmail))
     if(userData === null ){

    if (enteredEmail.includes('@') && enteredPassword.trim().length > 6) {
      localStorage.setItem(enteredEmail, JSON.stringify(userDetail))
      navHandler();
      setEnteredPassword('');
      setEnteredEmail('');
      setName('');
    }
    else {
      alert("Please entered a validate email and password")
    }
  }
  else{
     alert ("Already exists")
  }


  }

  return (<div>
    
    <form  className={classes.root} onSubmit={formSubmitHandler}>
    <h1>User Registration</h1>

    <TextField
          label="UserName"
          variant="filled"
          type="text"
          required
          value={enteredname}
          onChange={nameChangeHandler}
        />
        <TextField
          label="Email"
          variant="filled"
          type="email"
          required
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={enteredPassword}
          onChange={passwordChangeHandler}
        />      
        <div>
        <Button type="submit" variant="contained" color="primary">
        Create Account
        </Button>
      </div>

    </form>
  </div>
  )}

export default Signup;