/* eslint-disable */
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../../redux/user_reducer';
import Vespalogo from '../layouts/logo';
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
			return false
		}
		return true
	}



	return (
		<div className="Auth-container">
		
			<form onSubmit={handleSubmit} className="Auth-form">
				<div className="Auth-content">
				<Vespalogo/>
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
					<p className="Auth-content">
						<b>	Note:</b> This is a demo version and the database may be in sleep mode. <b> Please wait a few minutes</b> for it to respond on first use.	
					</p>
				</div>
			</form>
		</div>
	)
};

export default Signin
