import React from "react";
const Card = ({ icon, title, text }) => {
	return (
		<div className="tw-bg-[var(--card-bg)] tw-rounded-xl tw-px-5 tw-py-8 tw-shadow">
			<p className="tw-font-semibold tw-pt-5 tw-pb-8 tw-flex tw-items-center tw-text-[1.05rem] md:tw-text-xl lg:tw-text-2xl tw-p">
				<span className="tw-w-[60px] tw-h-[60px] tw-border-[3px] tw-border-[var(--highlight)] tw-inline-block tw-rounded-full"></span>
				<span className="tw-inline-block tw-bg-[var(--card-bg)] tw-translate-x-[-25px]">
					{title}
				</span>
			</p>
			<p className="tw-p">{text}</p>
		</div>
	);
};

export default Card;
