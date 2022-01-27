import React from 'react'
import { Grid , Paper ,Avatar,TextField,Button,Typography,Link} from '@material-ui/core';

 const LoginForm = () => {
     const paperstyle1={ float:"left ",font_family:"arial",backgroundColor:'#c0ca33', font_weight:"50" ,color:"black",fontsize:'40',margin:"130px 2px 0px 200px", height:'70vh',width:"500px"};
     const paperstyle2={ float:"left ",margin:"130px 2px 200px 0px", padding:30, height:'70vh',width:400};
     const avatarStyle={backgroundColor:'#c0ca33'}
     const btnStyle={margin:'25px 4px 5px 4px', align:"center" ,backgroundColor:"#c0ca33",}
   const linkStyle1={ float:"left ", margin:'15px 10px' }
   const linkStyle2={  margin:'15px 15px'}
   const linkStyle3={  margin:'15px 35px'}
 

    return (
      <div className="container1">
        <Grid  >
           <Paper  elevation={10} id="paper1" style={paperstyle1}>
             <img src={require('../images/signIn.png').default} />
        </Paper>
        <Paper elevation={10}  id="paper2" style={paperstyle2}>
            <Grid align='center'>
        <Avatar style={avatarStyle}>
        <i className="fas fa-lock"></i>
            </Avatar>
       <h2><b> Log In</b></h2>
        </Grid>
        <TextField label='Username' placeholder='Enter Username' fullWidth required/>
        <TextField label='Password'  type='password' placeholder='Enter Password' fullWidth required/>
        <Button  align='center' style={btnStyle} type='submit' color='primary' variant='contained' fullWidth>Sign In</Button>
      <Typography style={linkStyle1}> <Link href="#" >
          Register as a Client
          </Link>
          </Typography>
          <Typography style={linkStyle2}> <Link href="/Profile" >
          Register as a Designer
          </Link>
          </Typography>
          <Typography style={linkStyle3}> 
       <b>Don't Have an Account?</b>  
         <Link href="/SignupForm">Sign Up</Link>
          </Typography>
        </Paper>
        </Grid>
        </div>
    );
}
export default LoginForm

