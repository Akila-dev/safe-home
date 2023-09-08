import { useState } from "react"
import { Link } from "react-router-dom"
import AccountSettingsComp from "../../components/account/accountSettings"
import CardBankComp from "../../components/account/card&Bank"
import ContactUsComp from "../../components/account/contact"
import KYCComp from "../../components/account/kyc"
import NotificationsComp from "../../components/account/notifications"
import SecurityComp from "../../components/account/security"

export default function AccountPage() {
    const [page, setPage] = useState("settings")
    return (
        <div className='account-page'>
            <div className='row'>
                <div className="col-md-6">
                    <h1>Account</h1>
                </div>
            </div>

            <div className="card border-0 rounded-5 mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <div className="account-sidebar border-end">
                            <div className="account-header">
                                <div className="avatar">
                                    <img src="" alt="" />
                                </div>
                            </div>
                            <h3 className='text-center'>Adewale A.</h3>

                            <div className="account-navigation">
                                <ul>
                                    <li className={page === "settings" ? "active" :""} onClick={()=>setPage("settings")}>
                                        <span>
                                            <i className="ri-user-3-fill" />
                                            <p>Account Settings</p>
                                        </span>
                                    </li>
                                    <li className={page === "kyc" ? "active" :""} onClick={()=>setPage("kyc")}>
                                        <span>
                                            <i className="ri-file-text-fill"/>
                                            <p>Update KYC</p>
                                        </span>
                                    </li>
                                    <li className={page === "notifications" ? "active" :""} onClick={()=>setPage("notifications")}>
                                        <span>
                                            <i className="ri-notification-2-fill" />
                                            <p>Notification</p>
                                        </span>
                                    </li>
                                    <li className={page === "card" ? "active" :""} onClick={()=>setPage("card")}>
                                        <span>
                                            <i className="ri-bank-card-2-fill" />
                                            <p>Card & Bank Settings</p>
                                        </span>
                                    </li>
                                    <li className={page === "security" ? "active" :""} onClick={()=>setPage("security")}>
                                        <span>
                                            <i className="ri-shield-check-fill"/>
                                            <p>Security</p>
                                        </span>
                                    </li>
                                    <li className={page === "refer" ? "active" :""} onClick={()=>setPage("refer")}>
                                        <span>
                                            <i className="ri-percent-fill"/>
                                            <p>Refer & Earn</p>
                                        </span>
                                    </li>
                                    <li className={page === "contact" ? "active" :""} onClick={()=>setPage("contact")}>
                                        <span>
                                            <i className="ri-phone-fill"/>
                                            <p>Contact Us</p>
                                        </span>
                                    </li>
                                    <li className='' style={{color:"red"}}>
                                        <Link to="/login" className="link">
                                            <span>
                                                <i className="ri-logout-circle-line" />
                                                <p>Logout</p>
                                            </span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-8 pe-5">
                        <div className="card mt-4 rounded-4" style={{minHeight:"770px"}}>
                            <div className="card-body">
                                {page === "settings" && <AccountSettingsComp/> } 
                                {page === "kyc" && <KYCComp/> } 
                                {page === "notifications" && <NotificationsComp/> }
                                {page === "card" && <CardBankComp/>}
                                {page === "security" && <SecurityComp/>} 
                                {page === "contact" && <ContactUsComp/>} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
