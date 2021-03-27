import { useState } from "react";
import { useDispatch } from 'react-redux';
import { loginUser } from "../../redux/actions/userAction";
import { Button, FormControl, Input, InputLabel, makeStyles }from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SignIn = () => {

  const dispatch = useDispatch()

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handlerSubmit = async (event) => {
    event.preventDefault();
    dispatch(loginUser(email, password));
  }

  function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs, [name]: value,
    })
  }

  const { email, password } = inputs;

  const classes = useStyles();


  return (

<form onSubmit={handlerSubmit} className={classes.root} noValidate autoComplete="off">
        <FormControl>
        <InputLabel htmlFor="component-simple">Email</InputLabel>
        <Input id="component-simple" type="email" value={email} onChange={handleChange} />
        </FormControl>
        <FormControl>
        <InputLabel htmlFor="component-simple">Password</InputLabel>
        <Input id="component-simple" type="password" value={password} onChange={handleChange} />
        <Button variant="contained" color="secondary">Зарегистрироваться</Button>
      </FormControl>
      </form>
  );
}

export default SignIn;