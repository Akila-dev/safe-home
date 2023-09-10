import React from "react";

import { DownloadCTA } from "../components";

import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import linkedin from "../assets/linkedin.png";
import logo from "../assets/safehome-logo.png";

const Footer = () => {
	return (
		<div>
			<DownloadCTA />
			<div>
				<div className="tw-bg-[var(--secondary)] tw-py-[50px] tw-text-white">
					<div className="gp-container tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-gap-6 lg:tw-gap-[2rem] xl:tw-gap-[3.5rem]">
						<div className="tw-max-w-[200px]">
							<img
								src={logo}
								alt="logo"
								className="tw-w-[150.9px] tw-h-[66px] tw-mb-7"
							/>
							<p className="footer-link tw-p">
								Lorem ipsum dolor sit amet consectetur. Elit viverra dignissim
								et in varius at ut mattis.
							</p>
						</div>
						<div className="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-w-full tw-gap-6 lg:tw-gap-2">
							<div>
								<h5 className="footer-header">ABOUT</h5>
								<a className="footer-link tw-a" href="/about">
									Vision & Mission
								</a>
								<a className="footer-link tw-a" href="/about">
									Objectives
								</a>
							</div>
							<div>
								<h5 className="footer-header">SERVICES</h5>
								<a className="footer-link tw-a" href="/services">
									Investment
								</a>
								<a className="footer-link tw-a" href="/services">
									Savings
								</a>
								<a className="footer-link tw-a" href="/services">
									Credit
								</a>
							</div>
							<div>
								<h5 className="footer-header">MEMBERSHIP</h5>
								<a className="footer-link tw-a" href="/">
									Silver
								</a>
								<a className="footer-link tw-a" href="/">
									Gold
								</a>
							</div>
							<div>
								<h5 className="footer-header">LEGAL</h5>
								<a className="footer-link tw-a" href="/">
									Privacy Policy
								</a>
								<a className="footer-link tw-a" href="/">
									Terms of Use
								</a>
								<a className="footer-link tw-a" href="/">
									Disclaimer
								</a>
							</div>
						</div>
						<div className="lg:tw-text-right tw-max-w-[200px]">
							<h5 className="footer-header">CONTACT</h5>
							<div className="tw-flex lg:tw-justify-end tw-gap-3 tw-pt-2 tw-pb-6">
								<a className="icon-link tw-a" href="/">
									<img src={facebook} alt="facebook" />
								</a>
								<a className="icon-link tw-a" href="/">
									<img src={twitter} alt="twitter" />
								</a>
								<a className="icon-link tw-a" href="/">
									<img src={linkedin} alt="linked in" />
								</a>
							</div>
							<a className="footer-link tw-a" href="/">
								+234 907 000 0000
							</a>
							<a className="footer-link tw-a" href="/">
								Hello@safehome.com
							</a>
						</div>
					</div>
				</div>
				<div className="tw-h-[50px] tw-bg-[var(--highlight)]"></div>
			</div>
		</div>
	);
};

export default Footer;
