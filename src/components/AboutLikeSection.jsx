import React from "react";

const AboutLikeSection = ({
	bg,
	img,
	header,
	text,
	btnText,
	btnUrl,
	imgSide,
}) => {
	return (
		<div
			className={`${
				bg && "tw-bg-[var(--light-bg)]"
			} tw-w-full tw-pt-[35px] tw-pb-[60px] md:tw-pt-[50px] md:tw-pb-[100px]`}
		>
			<div className="gp-container">
				<div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 tw-gap-[25px] md:tw-gap-[100px] tw-items-center tw-max-w-[1000px] tw-mx-auto">
					{imgSide === "left" && (
						<div className="tw-hidden md:tw-block tw-pt-[15px] md:tw-pt-0">
							<img src={img} alt="" className="tw-w-full" />
						</div>
					)}
					<div className="tw-flex tw-flex-col tw-gap-[1.5rem]">
						<h1 className="tw-h1">{header}</h1>
						<p className="tw-p">{text}</p>
						<a
							href={btnUrl}
							className="gp-button tw-bg-[var(--highlight)] tw-text-white tw-w-[197px] tw-text-center tw-block tw-a"
						>
							{btnText}
						</a>
					</div>

					{imgSide === "right" && (
						<div className="tw-hidden md:tw-block tw-pt-[15px] md:tw-pt-0">
							<img src={img} alt="" className="tw-w-full" />
						</div>
					)}

					{/* IMAGE ON MOBILE SCREEN */}
					<div className="md:tw-hidden tw-pt-[15px] md:tw-pt-0">
						<img src={img} alt="" className="tw-w-full" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutLikeSection;
