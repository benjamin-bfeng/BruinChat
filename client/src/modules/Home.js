import React from 'react';
import {Button, Link, Typography} from '@material-ui/core';
import {useHistory} from 'react-router-dom';

const Home=()=> {
  const history = useHistory();
  return (
    <React.Fragment>
      <div id="homepage">
        <div id="background">
        <Typography variant={'h1'} style={{textTransform: "uppercase", textShadow: "3px 3px #008CBA, -1px -1px #008CBA, 1px -1px #008CBA, -1px 1px #008CBA"}}>
          <b>Bruinchat</b>
        </Typography>
        <Typography variant={'h5'}>
          <a href="https://github.com/benjamin-bfeng/BruinChat">A CS 97 Project</a>
        </Typography>
        <div style={{display: 'flex', align: 'center', margin: '10%'}}>
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: '#daa522',
              width: '40%',
              height: '10%',
              borderRadius: 20,
              marginRight: '10%',
            }}
            onClick={()=>{history.push(`/signup`)}}
          ><h2>Create an Account</h2></Button>
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: '#daa522',
              width: '40%',
              height: '10%',
              borderRadius: 20
            }}
            onClick={()=>{history.push(`/login`)}}
          ><h2>Login</h2></Button>
        </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Home;