import React, { FormEvent, useState } from 'react';
import MotorcycleOutlined from '@material-ui/icons/MotorcycleOutlined';
import Avatar from "@material-ui/core/Avatar";
import useStyles from './styles';
import { Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Paper, TextField, Typography,Link} from '@material-ui/core';
import api from '../../Services/api';


function Copyright(){
  return(
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Joaoptgaino
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
export default function Login(){
  const [email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const classes = useStyles();
  

  async function handleSubmit(e:FormEvent){
    e.preventDefault();
    await api.post('login',{email,password}).then(()=>{window.location.href='http://localhost:3000/timeline'}).catch(()=>{console.log("Não logou")});
  }

  return(
    <Grid container component="main" className={classes.root}>
      <CssBaseline/>
      <Grid item xs={false} sm={4} md={7} className={classes.image}/>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <MotorcycleOutlined/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={handleSubmit}>
            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Adress"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={e=>setEmail(e.target.value)}
            />
            <TextField 
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              onChange={e=>setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#"  variant="body2">
                {"Don't have an account?"}
              </Link>
            </Grid>
          </Grid>
          <Box mt={5}>
            <Copyright/>
          </Box>
        </div>
      </Grid>
    </Grid>
  )
}