import React from 'react'
import { Link } from 'react-router-dom'
import authLogo from "../../../assets/auth-logo.png"

export default function SignUpPage() {
  return (
    <div className='auth-page'>
        <div className="container">
            <div className="col-md-8 mx-auto">
                    <div className="text-center mb-4">
                        <img src={authLogo} alt="" width="130px"/>
                    </div>
                <div className="card rounded-4 px-md-4">
                    <div className="card-body">
                        <div className="text-center">
                            <h4 style={{ color: "#8D4000" }}>Login to your account</h4>
                            <p>Securely login to your safeHome</p>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label htmlFor="firstName">Firstname</label>
                                <input type="text" className="form-control" placeholder="John Doe" />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="surname">Surname</label>
                                <input type="text" className="form-control" placeholder="John Doe" />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="email">Email</label>
                                <input type="text" className="form-control" placeholder="john@gmail.com" />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="phone number">Phone number</label>
                                <input type="text" className="form-control" placeholder="John Doe" />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="phone number">Password</label>
                                <input type="text" className="form-control" placeholder="John Doe" />
                            </div>
                            <div className='col-md-6'>
                                <label htmlFor="phone number">Confirm Password</label>
                                <input type="text" className="form-control" placeholder="John Doe" />
                            </div>
                            <div className="text-center">
                                <Link to="/completeKYC" className='link'>
                                    <button className='btn btn-brown my-5 w-50' > Create Account</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
