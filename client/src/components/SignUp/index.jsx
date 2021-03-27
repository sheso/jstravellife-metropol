import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../redux/actions/userAction";
import { Button, FormControl, Input, InputLabel, makeStyles }from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


const SignUp = () => {

  const dispatch = useDispatch();

const [inputs, setInputs] = useState({
    nickName: '',
    name: '',
    email: '',
    password: '',
});

const handlerSubmit = async (event) => {
    event.preventDefault();
    dispatch(registerUser(name, nickName, email, password));
}


function handleChange({ target: { name, value } }) {
    setInputs({
      ...inputs, [name]: value,
    })
  }

  const { name, nickName, email, password } = inputs;

  const classes = useStyles();

  return (
      <form onSubmit={handlerSubmit} className={classes.root} noValidate autoComplete="off">
      <FormControl>
        <InputLabel htmlFor="component-simple">Name</InputLabel>
        <Input id="component-simple" type="text" value={name} onChange={handleChange} />
        </FormControl>
        <FormControl>
        <InputLabel htmlFor="component-simple">NickName</InputLabel>
        <Input id="component-simple" type="text" value={nickName} onChange={handleChange} />
        </FormControl>
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

export default SignUp;
