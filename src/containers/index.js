import React from 'react';
import { Tab, Paper ,Tabs, Box, Typography} from '@material-ui/core';
import { useState } from 'react';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

 const SignInOutContainer=()=>{
     const [value,setValue]=useState(0);
     const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const paperStyle={width:"10",align_item:"center" ,margin:"10px 10px", align:"center"}
      function TabPanel(props) {
        const { children, value, index, ...other } = props;
      
        return (
          <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
          >
            {value === index && (
              <Box >
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
      }

  return(
<Paper  elevation={10} style={paperStyle}>
    <Tabs
    value={value}
    indicatorColor="primary"
    textColor="primary"
    onChange={handleChange}
    aria-label="disable tabs example"
    >
        <Tab label="Login In"/>
        <Tab label="Sign Up"/>
    </Tabs>
    <TabPanel value={value} index={0}>
       <LoginForm/>
        </TabPanel>
  <TabPanel value={value} index={1}>
      <SignupForm/>
      </TabPanel>
</Paper>
  )
 }
  export default SignInOutContainer;