import React from "react";
const Card = ({ icon, title, text }) => {
	return (
		<div className="tw-bg-[var(--card-bg)] tw-rounded-xl tw-px-5 tw-py-8 tw-shadow">
			<img src={icon} alt={title} />
			<h3 className="tw-font-semibold tw-pt-8 tw-pb-6 tw-h3">{title}</h3>
			<p className="tw-p">{text}</p>
		</div>
	);
};

export default Card;
