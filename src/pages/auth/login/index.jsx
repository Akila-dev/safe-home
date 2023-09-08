import React from "react";
import { Link } from "react-router-dom";
import authLogo from "../../../assets/auth-logo.png";

export default function LoginPage() {
	return (
		<div className="auth-page">
			<div className="container">
				<div className="col-md-5 mx-auto">
					<div className="text-center mb-4">
						<img src={authLogo} alt="" width="130px" />
					</div>
					<div className="card rounded-4 px-md-4">
						<div className="card-body">
							<div className="text-center">
								<h4 style={{ color: "#8D4000" }}>Login to your account</h4>
								<p>Securely login to your safeHome</p>
							</div>
							<div>
								<div>
									<label htmlFor="fullName">Full name</label>
									<input
										type="text"
										className="form-control"
										placeholder="John Doe"
									/>
								</div>
								<div>
									<label htmlFor="email">Email</label>
									<input
										type="text"
										className="form-control"
										placeholder="john@gmail.com"
									/>
								</div>
								<Link to="/dashboard" className="link">
									<button className="btn btn-brown my-5 w-100"> Log in</button>
								</Link>
							</div>
						</div>
					</div>
					<div className="text-center mt-4">
						<Link to="/signup" className="link">
							<p>Don’t have an account? Create account</p>
						</Link>
						<Link to="/" className="link">
							<p>Forgot Password?</p>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
