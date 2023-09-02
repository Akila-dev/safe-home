import React from "react";

import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import logo from "../assets/safehome-logo.png";

const Footer = () => {
	return (
		<div>
			<div className="bg-[var(--secondary)] py-[50px] text-white">
				<div className="container flex gap-[10px]">
					<div>
						<img src={logo} alt="logo" />
						<p>
							Lorem ipsum dolor sit amet consectetur. Elit viverra dignissim et
							in varius at ut mattis.
						</p>
					</div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className="h-[50px] bg-[var(--highlight)]"></div>
		</div>
	);
};

export default Footer;
