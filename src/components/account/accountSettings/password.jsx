import React from 'react'

export default function PasswordComp() {
    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <label htmlFor="old_password">Enter your old Password</label>
                    <input type="password" className="form-control" placeholder="John" />
                </div>
                <div className="col-md-8">
                    <label htmlFor="new_password">Enter your new Password</label>
                    <input type="password" className="form-control" placeholder="Doe" />
                </div>
                <div className="col-md-8">
                    <label htmlFor="conf_new_password">Confirm your new Password</label>
                    <input type="password" className="form-control" placeholder="john@gmail.com" />
                </div>
            </div>
            <div className="text-center py-5">
                <button className='btn btn-brown my-5 w-75' > Change Password</button>
            </div>
        </div>
    )
}
