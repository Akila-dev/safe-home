import React from "react";

const JoinUsCTA = () => {
	return (
		<div className="tw-bg-[var(--light-highlight)] tw-py-[35px] md:tw-py-[50px]">
			<div className="gp-container">
				<div className="md:tw-max-w-[500px] xl:tw-max-w-[639px] tw-mx-auto tw-text-center tw-flex tw-flex-col tw-gap-[25px] tw-items-center">
					<h3 className="tw-text-[32px] tw-leading-[45.2px] sm:tw-text-[35px] sm:tw-leading-[48.2px] md:tw-text-[40px] md:tw-leading-[58.2px] xl:tw-text-[50px] xl:tw-leading-[67.2px] tw-font-semibold tw-h3">
						Join us and be a part of Safe-Home today.
					</h3>
					<a
						href="/"
						className="tw-bg-[var(--highlight)] tw-text-white tw-w-[256px] tw-py-3 tw-rounded-[2rem] tw-a"
					>
						Become an Affiliate
					</a>
				</div>
			</div>
		</div>
	);
};

export default JoinUsCTA;
