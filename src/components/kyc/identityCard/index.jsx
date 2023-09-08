import React from 'react'

export default function IdUploadComp(props) {
    let changePage= ()=>{
        props?.changeKycPage("face")
    }
  return (
    <div>
        <div className="container py-5">
            <div className="col-md-5 mx-auto">
                <div className="card rounded-4 px-md-2">
                    <div className="card-body">
                        <div className="pb-4"> 
                            <div className="text-end py-4">
                                <i className="ri-close-fill ri-xl" style={{ color: "#8D4000", fontSize:"30px"}}/>
                            </div>
                            <h1 style={{ color: "#8D4000" }}>Kyc Verification</h1>
                        </div>
                        <div className="pt-4">
                            <p className='text-secondary'>
                                Upload Valid ID Image (Int’l passport, Nimc - National ID Card, Driver’s License, Voter’s Card)
                            </p>
                        </div>
                            <div className=''>
                                <label htmlFor="idcard" className='text-placeholder'>Make sure it is clear. Supported format JPG, PNG, PDF</label>
                                <div className="file-input-area py-4">
                                    <div className="">
                                        <i className='ri-image-fill'/>
                                        <input type="file"
                                            accept=".jpg, jpeg, .png, .pdf"
                                        />
                                    </div>
                                </div>
                            </div>
                        <div className='my-5 text-center'>
                            <button className='btn btn-brown w-75 my-4' onClick={changePage}>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
