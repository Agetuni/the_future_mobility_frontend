/* eslint-disable */
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../redux/users/user_reducer';

const Signin= () => {
	const [formData, setFormData] = React.useState({
		email: '',
		password: '',
	})
	const dispatch = useDispatch()

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value })
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		if (vaidateData()) {
			dispatch(login(formData))
		}
	}

	const vaidateData = () => {
		if (formData.email === '' || formData.password === '') {
			console.log('Please fill all the fields')
			return false
		}
		return true
	}



	return (
		<div className="Auth-container">
			<form onSubmit={handleSubmit} className="Auth-form">
				<div className="Auth-content">
					<h3 className="Auth-title">Sign In</h3>
					<div className="form-group mt-3 text-start">
						<label htmlFor="email" >Email</label>
						<input
							type="email"
							className="form-control mt-1"
							name="email"
							id="email"
							placeholder="Enter Email"
							required
							value={formData.email}
							onChange={handleChange}
						/>
					</div>
					<div className="form-group mt-3 text-start">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							className="form-control mt-1"
							name="password"
							id="password"
							placeholder="Password"
							required
							value={formData.password}
							onChange={handleChange}
						/>
					</div>
				</div>
				<div className="form-group mt-3 d-flex flex-column  align-items-center justify-content-center">
					<button type="submit" className="btn btn-primary w-75 mb-2">Submit</button>
					<p>
						Don't have an account? <Link to="/signup">Sign Up</Link>
					</p>
				</div>
			</form>
		</div>
	)
};

export default Signin
