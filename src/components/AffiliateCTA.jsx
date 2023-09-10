import React from "react";

const AffiliateCTA = () => {
	return (
		<div className="tw-bg-[var(--light-bg)] tw-py-[35px] md:tw-py-[70px]">
			<div className="gp-container">
				<div className="tw-max-w-[599px] tw-mx-auto tw-flex tw-flex-col tw-items-center tw-text-center tw-gap-[20px]">
					<h1 className="text-[var(--highlight)] tw-h1">Be an Affiliate</h1>
					<h3 className="tw-h3">
						Join Safe-Home as an affiliate today and earn up to 20% per
						referral.
					</h3>
					<a
						href="/"
						className="tw-bg-[var(--header)] tw-text-white tw-w-[256px] tw-py-3 tw-rounded-[2rem] tw-a tw-button"
					>
						Become an Affiliate
					</a>
				</div>
			</div>
		</div>
	);
};

export default AffiliateCTA;
