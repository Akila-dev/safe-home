import React from "react";

import checkmark from "../assets/checkmark.png";
import vector from "../assets/vector.png";

const Offer = ({ title, text, pos }) => (
	<div
		className={`${
			pos === "bottom" && "lg:tw-pt-[50px]"
		} tw-w-full lg:tw-w-full tw-flex tw-justify-center tw-z-[10] `}
	>
		<div
			className={`tw-max-w-[235px] md:tw-max-w-[100%] lg:tw-max-w-[200px] tw-flex tw-flex-col tw-items-center tw-text-center tw-bg-white lg:tw-bg-transparent tw-rounded-xl tw-p-6 md:tw-p-8 lg:tw-p-0`}
		>
			<div>
				<img src={checkmark} alt="offer" className="tw-w-[100px]" />
			</div>
			<h3 className="tw-font-bold tw-text-[20px] tw-leading-[27px] tw-py-[15px] tw-h3">
				{title}
			</h3>
			<p className="tw-p">{text}</p>
		</div>
	</div>
);

const WhatWeOffer = () => {
	return (
		<div className="tw-pt-[30px] tw-pb-[60px] md:tw-py-[100px] tw-bg-[var(--light-bg)]">
			<div className="gp-container">
				<div className="tw-flex tw-flex-col tw-gap-[15px] tw-max-w-[604px] tw-mx-auto tw-text-center tw-text-[var(--highlight)]">
					<h1 className="tw-h1">What we Offer</h1>
				</div>
				<div className="tw-pt-[35px] md:tw-pt-[50px] tw-gap-[30px] tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-flex tw-justify-between tw-relative tw-flex-wrap lg:tw-flex-nowrap">
					<Offer
						title="Land Owners Club"
						text="Invest in land units across various locations for steady passive rental income."
						pos="top"
					/>
					<Offer
						title="Shop Owners Club"
						text="Own units in bustling commercial spaces and earn from vibrant retail markets."
						pos="bottom"
					/>
					<Offer
						title="Office Owners Club"
						text="Join a community of investors in prime office spaces, generating consistent rental returns."
						pos="top"
					/>
					<Offer
						title="Home Owners Club"
						text="Experience the pride and security of earning passively and owning units of residential properties across sought-after neighborhoods."
						pos="bottom"
					/>
					{/* Vector */}
					<div className="tw-hidden lg:tw-block tw-absolute tw-left-0 tw-top-0 tw-w-full tw-h-full tw-px-[150px] tw-pt-[70px] lg:tw-px-[100px] lg:tw-pt-[80px] xl:tw-px-[150px] xl:tw-pt-[70px]">
						<img src={vector} alt="vector" className="tw-w-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhatWeOffer;
