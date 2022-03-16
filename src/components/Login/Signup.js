import { useEffect, useState } from "react";


const Signup = () => {
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
      password: enteredPassword
     }
    if (enteredEmail.includes('@') && enteredPassword.trim().length > 6) {
      localStorage.setItem(enteredEmail, JSON.stringify(userDetail))
      setEnteredPassword('');
      setEnteredEmail('');
      setName('');
    }
    else {
      alert("Please entered a validate email and password")
    }


  }

  return (<div className="form">
    <div>
      <h1>User Registration</h1>
    </div>
    <form onSubmit={formSubmitHandler}>
      <label className="label">UserName</label>
      <input className="input" type="text" onChange={nameChangeHandler} value={enteredname} required />

      <label className="label">Email</label>
      <input className="input" type="email" onChange={emailChangeHandler} value={enteredEmail} required />

      <label className="label">Password</label>
      <input className="input" type="password" onChange={passwordChangeHandler} value={enteredPassword} required />

      <button className="btn" type="submit">
        Submit  </button>
    </form>
  </div>)
}
export default Signup;