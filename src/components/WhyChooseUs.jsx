import React from "react";

const WhyChooseUs = ({ img, header, text, imgSide }) => {
	return (
		<div
			className={`tw-w-full tw-pt-[35px] tw-pb-[60px] ${
				imgSide === "left" && "tw-bg-[var(--light-bg)]"
			}`}
		>
			<div className="gp-container">
				<div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-[0px] tw-justify-center tw-items-center tw-max-w-[1000px] tw-mx-auto">
					{imgSide === "left" && (
						<div className="hidden md:block">
							<img
								src={img}
								alt=""
								className="tw-hidden md:tw-block tw-w-full tw-max-w-[400px] tw-float-left"
							/>
						</div>
					)}
					<div
						className={`tw-flex tw-flex-col tw-gap-[1rem] md:tw-gap-[1.5rem] ${
							imgSide === "left" && "md:tw-pl-[30px] xl:tw-pl-0"
						} ${imgSide === "right" && "md:tw-pr-[30px] lg:tw-pr-0"}`}
					>
						<h2 className="tw-text-[var(--header)] tw-h2">{header}</h2>
						<p className={`tw-pr-[30px] tw-p`}>{text}</p>
					</div>

					{imgSide === "right" && (
						<div className="tw-hidden md:tw-block">
							<img
								src={img}
								alt=""
								className="tw-hidden md:tw-block tw-w-full tw-max-w-[400px] tw-float-right"
							/>
						</div>
					)}

					{/* IMAGE FOR MOBILE SCREEN */}
					<div className="md:tw-hidden tw-pt-[30px]">
						<img
							src={img}
							alt=""
							className=" tw-w-full tw-max-w-[400px] tw-float-right"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WhyChooseUs;
