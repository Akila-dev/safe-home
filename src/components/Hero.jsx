import React from "react";

import hero from "../assets/hero.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

const Hero = () => {
	return (
		<div className="tw-w-full tw-h-screen">
			{/* Image */}
			<div>
				<img
					src={hero}
					alt="hero"
					className="tw-w-full tw-h-screen tw-object-cover"
				/>
			</div>
			{/* Content */}
			<div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-screen tw-flex tw-justify-center tw-items-center">
				<div className="gp-container tw-text-center tw-flex tw-justify-center tw-items-center tw-flex-col tw-gap-[15px] tw-pt-[80px]">
					<h1 className="tw-text-white tw-max-w-[868px] tw-h1">
						Welcome to <span className="tw-text-[--highlight]">Safe-Home</span>,
						A <span className="tw-text-[--highlight]">multipurpose</span>{" "}
						Cooperative  Society Limited
					</h1>
					<p className="tw-text-white tw-max-w-[488px] tw-p">
						With our strong foundation of trust, support, and shared values,
						we're here to provide you with the financial solutions and
						opportunities you need.
					</p>
					<div className="tw-py-5 tw-flex tw-flex-col md:tw-flex-row tw-gap-3">
						<button className="tw-w-[175px] tw-h-[58px] md:tw-w-[185px] md:tw-h-[63px] tw-bg-black tw-p-3 tw-rounded-2xl tw-text-center tw-shadow tw-button">
							<img src={playstore} alt="" className="tw-h-full tw-inline" />
						</button>
						<button className="tw-w-[175px] tw-h-[58px] md:tw-w-[185px] md:tw-h-[63px] tw-bg-[var(--appstore-bg)] tw-p-3 tw-rounded-2xl tw-text-center tw-shadow tw-button">
							<img src={appstore} alt="" className="tw-h-full tw-inline" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
