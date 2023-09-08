import React from 'react'

export default function KYCComp() {
    return (
        <div>
            <h4 style={{ color: "#8D4000" }}>Kyc Information</h4>
            <p style={{ color: "#1A374D" }}>
                Simply fill and upload the required information below, and we’ll take it from here.
            </p>

            <div className="row">
                <div className="col-md-8">
                    <label htmlFor="residential_address">Residential Address</label>
                    <input type="text" className="form-control" placeholder="John" />
                </div>
                <div className="col-md-4">
                    <label htmlFor="state">State</label>
                    <select className='form-select' name="" id="">
                        <option value="">Individual</option>
                        <option value="">Individual</option>
                        <option value="">Individual</option>
                    </select>
                </div>
                <div className="col">
                    <label htmlFor="email">
                        Upload Valid ID Image (Int’l passport, Nimc - National ID Card, Driver’s License, Voter’s Card)
                    </label>
                    <div className="file-input-area py-4">
                        <div className="">
                            <i className='ri-image-fill' />
                            <input type="file"
                                accept=".jpg, jpeg, .png, .pdf"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center py-5">
                <button className='btn btn-brown my-5 w-75' > Update KYC</button>
            </div>
        </div>
    )
}
