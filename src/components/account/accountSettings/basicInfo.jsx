import React from 'react'

export default function BasicInfoComp() {
    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" className="form-control" placeholder="John" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" className="form-control" placeholder="Doe" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" className="form-control" placeholder="john@gmail.com" />
                </div>
                <div className="col-md-6">
                    <label htmlFor="telephone">Telephone</label>
                    <input type="tel" className="form-control" placeholder="+234800000000" />
                </div>
            </div>
            <div className="text-center py-5">
                <button className='btn btn-brown my-5 w-75' > Update Profile</button>
            </div>
        </div>
    )
}
