import React from "react";

import blueDots from "../assets/blue-dots.png";
import orangeDots from "../assets/orange-dots.png";

const Hero2 = ({ bg, img, header1, header2, text, imgSide }) => {
	return (
		<div
			className={`${bg} tw-w-full tw-pt-[35px] tw-pb-[60px] md:tw-py-[100px]`}
		>
			<div className="gp-container">
				<div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-[25px] md:tw-gap-[100px] tw-items-center tw-max-w-[1000px] tw-mx-auto">
					{imgSide === "left" && (
						<div className="tw-hidden md:tw-block tw-pt-[15px] md:tw-pt-0 tw-relative">
							<img src={img} alt="" className="tw-w-full" />
							{/* Dots */}
							<img
								src={blueDots}
								alt=""
								className="tw-absolute tw-left-0 tw-top-0 tw-w-[138px] tw-translate-x-[-65px] tw-translate-y-[-45px] tw-z-[-1]"
							/>
							<img
								src={orangeDots}
								alt=""
								className="tw-absolute tw-right-0 tw-bottom-0 tw-w-[128px] tw-translate-y-[85px] tw-z-[-1]"
							/>
						</div>
					)}
					<div className="tw-flex tw-flex-col tw-gap-[1.5rem]">
						<h1 className="tw-h1">
							<span className="tw-text-[var(--header)] tw-inline-block">
								{header1}
							</span>{" "}
							<span className="tw-text-[var(--highlight)] tw-inline-block">
								{header2}
							</span>
						</h1>
						<p className="tw-p">{text}</p>
						{/* <a
							href={btnUrl}
							className="button bg-[var(--highlight)] text-white w-[197px] text-center block"
						>
							{btnText}
						</a> */}
					</div>

					{imgSide === "right" && (
						<div className="tw-hidden md:tw-block tw-pt-[15px] md:tw-pt-0 tw-relative">
							<img src={img} alt="" className="tw-w-full" />
							{/* Dots */}
							<img
								src={blueDots}
								alt=""
								className="tw-absolute tw-left-0 tw-top-0 tw-w-[138px] tw-translate-x-[-65px] tw-translate-y-[-45px] tw-z-[-1]"
							/>
							<img
								src={orangeDots}
								alt=""
								className="tw-absolute tw-right-0 tw-bottom-0 tw-w-[128px] tw-translate-y-[85px] tw-z-[-1]"
							/>
						</div>
					)}

					{/* IMAGE ON MOBILE SCREEN */}
					<div className="md:tw-hidden tw-pt-[15px] md:tw-pt-0 tw-relative">
						<img src={img} alt="" className="tw-w-full" />
						{/* Dots */}
						<img
							src={blueDots}
							alt=""
							className="tw-absolute tw-left-0 tw-top-0 w-[100px] tw-translate-x-[-1rem] tw-translate-y-[-15px] tw-z-[-1]"
						/>
						<img
							src={orangeDots}
							alt=""
							className="tw-absolute tw-right-0 tw-bottom-0 tw-w-[100px] tw-translate-y-[45px] tw-z-[-1]"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero2;
