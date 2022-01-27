import React from 'react'
import { Grid , Paper ,Avatar,TextField,Button,Typography,Link} from '@material-ui/core';

const SignupForm = () => {
    const paperstyle1={float:"left ", font_weight:"50" ,backgroundColor:'black',color:"white",fontsize:'40',margin:"130px 2px 0px 200px", padding:20, height:'70vh',width:"500px"};
     const paperstyle2={ float:"left ",margin:"130px 2px 200px 0px", padding:30, height:'70vh',width:400};
     const avatarStyle={backgroundColor:'#c0ca33'}
     const btnStyle={margin:'25px 4px 5px 4px', align:"center" ,backgroundColor:"#c0ca33",}
   const linkStyle3={  margin:'15px 35px'}
    return (
      <div className="container" style={{padding: '0px' }}>
        <Grid  >
           <Paper  elevation={10} id="paper1" style={paperstyle1}>
           <img src={require('../images/signup.png').default} />
        </Paper>
        <Paper elevation={10}  id="paper2" style={paperstyle2}>
            <Grid align='center'>
        <Avatar style={avatarStyle}>
        <i class="fas fa-lock"></i>
            </Avatar>
       <h2><b> Sign UP</b></h2>
        </Grid>
        <TextField label='Username' placeholder='Enter Username' fullWidth required/>
        <TextField label='Password'  type='password' placeholder='Enter Password' fullWidth required/>
        <TextField label='Confirm Password'  type='password' placeholder='Confirm Password' fullWidth required/>

        <Button  href="./Profile" align='center' style={btnStyle} type='submit' color='primary' variant='contained' fullWidth>Sign Up</Button>
      
          <Typography style={linkStyle3}> 
       <b>Already Have an Account?</b>  
         <Link href="/LoginForm">Log In</Link>
          </Typography>
        </Paper>
        </Grid>
        </div>
   
    )
}

export default SignupForm
