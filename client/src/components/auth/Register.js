import React, { useState, useContext, useEffect } from 'react';
import AlertContext from '../../context/alert/alertContext';
import AuthContext from '../../context/auth/authContext';

const Register = props => {
	const alertContext = useContext(AlertContext);
	const authContext = useContext(AuthContext);

	const { setAlert } = alertContext;
	const { register, error, clearErrors, isAuthenticated } = authContext;

	const [user, setUser] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});

	let { name, email, password, password2 } = user;

	useEffect(() => {
		if (isAuthenticated) {
			props.history.push('/');
		}

		let password22 = document.getElementById('password2');
		if (password === password2) {
			password22.style.border = '1px solid #13a113';
		} else {
			password22.style.border = '1px solid #cc1e1e';
		}
		if (error === 'User already exists') {
			setAlert(error, 'danger', 3000);
			clearErrors();
		}
		//eslint-disable-next-line
	}, [password, password2, error, isAuthenticated, props.history]);

	const onChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const onSubmit = e => {
		e.preventDefault();
		name = name.trim();
		email = email.trim();
		password = password.trim();
		if (name === '' && email === '' && password === '' && password2 === '') {
			setAlert('Please complete all fields', 'danger');
		} else if (name === '') {
			setAlert(`Please complete the name field`, 'danger');
		} else if (email === '') {
			setAlert(`Please complete the email field`, 'danger');
		} else if (password === '') {
			setAlert(`Please complete the password field`, 'danger');
		} else if (password !== password2) {
			setAlert('passwords do not match', 'danger');
		} else {
			register({
				name,
				email,
				password
			});
		}
	};

	return (
		<div className="form-container">
			<h1>
				Account <span className="text-primary">Register</span>
			</h1>

			<form onSubmit={onSubmit}>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						name="name"
						value={name}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						name="email"
						value={email}
						onChange={onChange}
						required
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						value={password}
						onChange={onChange}
						required
						minLength="6"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="password2">Confirm Password</label>
					<input
						id="password2"
						type="password"
						name="password2"
						value={password2}
						onChange={onChange}
						required
						minLength="6"
					/>
				</div>
				<input
					type="submit"
					value="Register"
					className=" btn btn-primary btn-block"
				/>
			</form>
		</div>
	);
};

export default Register;
