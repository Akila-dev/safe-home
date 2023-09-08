import React from 'react'

export default function NotificationsComp() {
  return (
        <div>
            <h4 style={{ color: "#8D4000" }}>Notification</h4>
            <p style={{ color: "#1A374D" }}>
                Manage the kind of message you get from SafeHome.
            </p>

            <div className='mt-5'>
                <h5 className="mb-0">Login Alerts</h5>
                <p className="mt-2 mb-2 text-secondary">Notifications on successful log ins to your account</p>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input " type="checkbox" id=""/>
                            <p className="text-secondary ms-3" for="">Push Notification</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input " type="checkbox" id=""/>
                            <p className="text-secondary ms-3" for="">Email</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <h5 className="mb-0">Investments & Savings Alerts</h5>
                <p className="mt-2 mb-2 text-secondary">Notifications on new opportunities and purchased investments</p>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id=""/>
                            <p className="text-secondary ms-3" for="">Push Notification</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id=""/>
                            <p className="text-secondary ms-3" for="">Email</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <h5 className="mb-0">Transactions Alerts</h5>
                <p className="mt-2 mb-2 text-secondary">Notifications on successful log ins to your account</p>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id=""/>
                            <p className="text-secondary ms-3" for="">Push Notification</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id=""/>
                            <p className="text-secondary ms-3" for="">Email</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <h5 className="mb-0">Transactions Alerts</h5>
                <p className="mt-2 mb-2 text-secondary">Notifications on successful log ins to your account</p>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id=""/>
                            <p className="text-secondary ms-3" for="">Push Notification</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id=""/>
                            <p className="text-secondary ms-3" for="">Email</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-center py-4">
                <button className='btn btn-brown my-4 w-75' > Save Changes</button>
            </div>
        </div>
  )
}
