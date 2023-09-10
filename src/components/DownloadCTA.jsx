import React from "react";

import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

const DownloadCTA = () => {
	return (
		<div className="tw-bg-[var(--light-highlight)] tw-py-[35px] md:tw-py-[50px]">
			<div className="gp-container">
				<div className="tw-max-w-[882px] tw-mx-auto tw-text-center tw-flex tw-flex-col tw-gap-[20px] tw-items-center">
					<h3 className="tw-text-[32px] tw-leading-[45.2px] sm:tw-text-[35px] sm:tw-leading-[48.2px] md:tw-text-[40px] md:tw-leading-[58.2px] lg:tw-text-[45px] lg:tw-leading-[60.2px] xl:tw-text-[48px] xl:tw-leading-[67.2px] tw-text-[var(--highlight)] tw-font-semibold tw-h3">
						Download our mobile app on both PlayStore and AppStore
					</h3>
					<div className="tw-py-5 tw-flex tw-flex-col md:tw-flex-row tw-gap-3">
						<button className="tw-w-[175px] tw-h-[58px] md:tw-w-[185px] md:tw-h-[63px] tw-bg-[var(--secondary)] tw-p-3 tw-rounded-2xl tw-text-center tw-shadow">
							<img src={playstore} alt="" className="tw-h-full tw-inline" />
						</button>
						<button className="tw-w-[175px] tw-h-[58px] md:tw-w-[185px] md:tw-h-[63px] tw-bg-[var(--highlight2)] tw-p-3 tw-rounded-2xl tw-text-center tw-shadow">
							<img src={appstore} alt="" className="tw-h-full tw-inline" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DownloadCTA;
