import React, { Component, useState } from 'react';
import { Route } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import {
	Avatar,
	Button,
	Container,
	CssBaseline,
	TextField,
	FormControlLabel,
	Checkbox,
	Link,
	Grid,
	Box,
	Typography,
	makeStyles
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { auth, database } from './config';
import firebase from './config'


function Copyright() {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
}

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(3)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	}
}));





export default function SignIn(props) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const classes = useStyles();
	const history = useHistory();

	function signup(event) {
		event.preventDefault();
		console.log({ email, password });

		auth
			.createUserWithEmailAndPassword(email, password)
			.then((user) => {
				console.log(user);
				// Signed in
				// ...
				console.log('login successful');
				history.push('/Quiz');
				console.log(email, password);

        
        firebase
					.database()
					.ref('users/' + user.uid)
          .set({ email: user.email, password: user.password });
          
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				// ..
				console.log(errorMessage);
			});
	}

 function signin(event){
   event.preventDefault();
  auth.signInWithEmailAndPassword(email, password)
  .then((user) => {
    // Signed in 
    // ...
    history.push('/Quiz');
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
  }
	

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}>
					<LockOutlinedIcon />
				</Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<input
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="Email Address"
								onChange={(e) => {
									setEmail(e.target.value);
									console.log(e.target.value);
								}}
								autoComplete="email"
								autoFocus
							/>
						</Grid>

						<Grid item xs={12}>
							<input
								variant="outlined"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								onChange={(e) => {
									setPassword(e.target.value);
									console.log(e.target.value);
								}}
								autoComplete="current-password"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={
									<Checkbox
										value="allowExtraEmails"
										color="primary"
									/>
								}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={signup}
					>
						Sign Up
					</Button>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
            className={classes.submit}
            onClick={signin}
					>
						Sign In
					</Button>

					<Grid container justify="flex-end">
						<Grid item>
					
						</Grid>
					</Grid>
				</form>
			</div>

			<Box mt={5}>
				<Copyright />
			</Box>
		</Container>
	);
}
