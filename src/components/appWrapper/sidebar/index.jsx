import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidebarLogo } from "../../../assets/svgs";

export default function Sidebar() {
	const [openSidebar, setOpenSidebar] = useState(false);

	let location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");

	return (
		<>
			<div className="sidebar-area">
				<div className="header py-2 py-md-3 py-lg-3 mx-auto">
					<Link to="/" className="link ">
						{SidebarLogo}
						{/* <img src={SidebarLogo} className="w-100" alt="" /> */}
					</Link>
					{!openSidebar ? (
						<button
							className="btn btn-expand d-lg-none"
							onClick={() => setOpenSidebar(true)}
						>
							<span>
								<i className="ri-bar-chart-horizontal-line" />
							</span>
						</button>
					) : (
						<button
							className="btn btn-expand"
							onClick={() => setOpenSidebar(false)}
						>
							<span>
								<i className="ri-close-line" />
							</span>
						</button>
					)}
				</div>

				<div className="navigation mt-3 d-none d-lg-block">
					<ul>
						<Link to="/dashboard" className="link">
							<li className={splitLocation[1] === "" ? "active" : ""}>
								<span>
									<i className="ri-home-5-fill" />
									<h6>Home</h6>
								</span>
							</li>
						</Link>

						<Link to="/Savings" className="link">
							<li className={splitLocation[1] === "Savings" ? "active" : ""}>
								<span>
									<i className="ri-notification-3-line" />
									Savings
								</span>
							</li>
						</Link>
						<Link to="/Investment" className="link">
							<li className={splitLocation[1] === "Investment" ? "active" : ""}>
								<span>
									<i className="ri-file-paper-2-line" />
									Investment
								</span>
							</li>
						</Link>
						<Link to="/Loan" className="link">
							<li className={splitLocation[1] === "Loan" ? "active" : ""}>
								<span>
									<i className="ri-money-dollar-circle-fill" />
									Loan
								</span>
							</li>
						</Link>
						<Link to="/Account" className="link">
							<li className={splitLocation[1] === "Account" ? "active" : ""}>
								<span>
									<i className="ri-user-3-fill" />
									Account
								</span>
							</li>
						</Link>
					</ul>
				</div>

				{/* Mobile and tablet sidebar starts here ---------------------------*/}
				{openSidebar && (
					<div className="navigation d-lg-none">
						<ul>
							<Link to="/Notifications" className="link">
								<li
									onClick={() => setOpenSidebar(false)}
									className={
										splitLocation[1] === "Notifications" ? "active" : ""
									}
								>
									<span>
										<i className="ri-notification-3-line" />
										Notifications
									</span>
								</li>
							</Link>
							<Link to="/Compliance-Certificates" className="link">
								<li
									onClick={() => setOpenSidebar(false)}
									className={
										splitLocation[1] === "Compliance-Certificates"
											? "active"
											: ""
									}
								>
									<span>
										<i className="ri-file-paper-2-line" />
										Compliance Certificates
									</span>
								</li>
							</Link>
						</ul>
					</div>
				)}
			</div>
		</>
	);
}
