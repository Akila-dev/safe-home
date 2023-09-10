import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import logo from "../assets/logo-colored.png";

import { IoCloseSharp } from "react-icons/io5";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";

const Navlink = ({ nav, link }) => {
	const location = useLocation();

	return (
		<div
			className={`tw-font-[500] tw-border-b lg:tw-border-0 tw-border-[var(--card-bg)] tw-w-full lg:tw-w-auto tw-pb-3 tw-px-1 lg:tw-p-0 gp-navlink`}
		>
			<a
				href={link}
				className={`${
					location.pathname === link
						? "tw-text-[var(--highlight)]"
						: "tw-text-[var(--header)]"
				} hover:tw-text-[var(--highlight)] tw-a`}
			>
				{nav}
			</a>
		</div>
	);
};

const Navbar = () => {
	const [navIsOpen, setNavIsOpen] = useState(false);
	const navigate = useNavigate();

	return (
		<div className="tw-h-[80px] tw-w-full tw-bg-white tw-shadow">
			<div className="tw-px-[1.3rem] md:tw-px-[3rem] lg:tw-px-[6rem] tw-flex tw-items-center tw-justify-between tw-h-full">
				<div className="tw-z-[1]">
					<a href="/">
						<img
							src={logo}
							alt="logo"
							className="tw-w-[91.48px] tw-h-[40px] tw-a"
						/>
					</a>
				</div>
				<div className="tw-hidden lg:tw-flex tw-w-full tw-items-center tw-justify-center tw-gap-8">
					<Navlink nav="About Us" link="/about" />
					<Navlink nav="Services" link="/services" />
					<Navlink nav="Products" link="/products" />
					<Navlink nav="Membership" link="/membership" />
					<Navlink nav="Contact" link="/contact" />
				</div>
				<div>
					<div className="tw-hidden lg:tw-flex tw-flex-col md:tw-flex-row tw-gap-3 tw-items-center">
						<button
							className="tw-w-[109px] tw-h-[40px] tw-bg-white tw-text-[var(--highlight)] tw-border tw-border-[var(--highlight)] tw-p-1 tw-rounded-[2rem] tw-text-center tw-shadow tw-button"
							onClick={() => navigate("/login")}
						>
							Log in
						</button>
						<button
							className="tw-w-[109px] tw-h-[40px] tw-text-white tw-bg-[var(--highlight)] tw-border tw-border-[var(--highlight)] tw-p-1 tw-rounded-[2rem] tw-text-center tw-shadow tw-button"
							onClick={() => navigate("/signup")}
						>
							Sign Up
						</button>
					</div>
				</div>
				<div className="tw-z-[1]">
					<button
						className="lg:tw-hidden tw-text-3xl tw-pt-1 "
						onClick={() => setNavIsOpen((prev) => !prev)}
					>
						{navIsOpen ? (
							<IoCloseSharp className="tw-text-white " />
						) : (
							<HiMiniBars3CenterLeft />
						)}
					</button>
				</div>
			</div>

			{/* Mobile screen navigation */}
			{navIsOpen && (
				<div className="tw-fixed lg:tw-hidden tw-top-0 tw-right-0 tw-h-screen tw-w-full tw-bg-[rgba(0,0,0,0.5)]">
					{/* <div className="w-full fixed top-0 right-0 py-4 px-2 text-center text-gray-400">
						<button
							className="text-[2rem] p-2"
							onClick={() => setNavIsOpen(false)}
						>
							<IoCloseSharp />
						</button>
					</div> */}
					<div className="tw-flex tw-w-[215px] tw-h-full tw-flex-col tw-items-start tw-justify-between tw-bg-white tw-pt-[100px] tw-pb-[2rem] tw-px-[1.5rem] tw-shadow">
						<div className="tw-flex tw-flex-col tw-items-start tw-gap-4 tw-w-full">
							<Navlink nav="About Us" link="/about" />
							<Navlink nav="Services" link="/services" />
							<Navlink nav="Products" link="/" />
							<Navlink nav="Membership" link="/" />
							<Navlink nav="Contact" link="/" />
						</div>
						<div className="tw-py-5 tw-flex lg:tw-hidden tw-flex-col tw-gap-3 tw-items-center tw-w-full">
							<button className="tw-w-full tw-h-[40px] tw-bg-white tw-text-[var(--highlight)] tw-border tw-border-[var(--highlight)] tw-p-1 tw-rounded-[2rem] tw-text-center tw-shadow tw-button">
								Log in
							</button>
							<button className="tw-w-full tw-h-[40px] tw-text-white tw-bg-[var(--highlight)] tw-border tw-border-[var(--highlight)] tw-p-1 tw-rounded-[2rem] tw-text-center tw-shadow tw-button">
								Sign Up
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Navbar;
