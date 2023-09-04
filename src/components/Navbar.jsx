import React from "react";

import logo from "../assets/logo-colored.png";
import hamburger from "../assets/hamburger.png";

const Navlink = ({ nav, link }) => (
	<div className="text-[var(--header)] font-[500]">
		<a href={link}>{nav}</a>
	</div>
);

const Navbar = () => {
	return (
		<div className="h-[80px] w-full bg-white shadow">
			<div className="px-[1.3rem] md:px-[3rem] lg:px-[6rem] flex items-center justify-between h-full">
				<div>
					<a href="/">
						<img src={logo} alt="logo" className="w-[91.48px] h-[40px]" />
					</a>
				</div>
				<div className="hidden lg:flex w-full items-center justify-center gap-8">
					<Navlink nav="About Us" link="/about" />
					<Navlink nav="Services" link="/services" />
					<Navlink nav="Products" link="/" />
					<Navlink nav="Membership" link="/" />
					<Navlink nav="Contact" link="/" />
				</div>
				<div>
					<div className="py-5 hidden lg:flex flex-col md:flex-row gap-3 items-center">
						<button className="w-[109px] h-[40px] bg-white text-[var(--highlight)] border border-[var(--highlight)] p-1 rounded-[2rem] text-center shadow">
							Log in
						</button>
						<button className="w-[109px] h-[40px] text-white bg-[var(--highlight)] border border-[var(--highlight)] p-1 rounded-[2rem] text-center shadow">
							Sign Up
						</button>
					</div>
				</div>
				<div>
					<button className="lg:hidden w-[40px] h-[40px] p-1">
						<img src={hamburger} alt="menu" className="w-full" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
