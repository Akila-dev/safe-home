import React from 'react'
import { CaptureFaceIcon } from '../../../assets/svgs/'

export default function FaceUploadComp(props) {
    let changePage = () => {
        props?.changeKycPage("success")
    }
    return (
        <div>
            <div className="container py-5">
                <div className="col-md-5 mx-auto">
                    <div className="card rounded-4 px-md-2">
                        <div className="card-body">
                            <div className="">
                                <div className="text-end py-4">
                                    <i className="ri-close-fill ri-xl" style={{ color: "#8D4000", fontSize: "30px" }} />
                                </div>
                                <h1 style={{ color: "#8D4000" }}>Visual Verification</h1>
                            </div>
                            <div className="">
                                <p className='text-secondary'>
                                    Take a selfie, so we can match your face to your ID Document. Make sure you are in a
                                    very light room before proceeding with verification.
                                </p>
                            </div>
                            <div className='text-center pt-2'>
                                {CaptureFaceIcon}
                            </div>
                            <div className='my-3 text-center'>
                                <button className='btn btn-brown w-75 my-4' onClick={changePage}>Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
