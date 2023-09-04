import React from "react";

import { Card, VisionMissionCard, TrackRecord, JoinUsCTA } from "../components";

// IMPORTING ALL IMAGES START
import goalbased from "../assets/goal-based.png";
import lockedsavings from "../assets/locked-savings.png";
import realEstateOppurtunities from "../assets/real-estate-oppurtunities.png";

const Services = () => {
	return (
		<div className="pt-[80px]">
			<div className="bg-[var(--light-highlight)] pt-[70px] pb-[35px] md:pt-[100px] md:pb-[50px]">
				<div className="container">
					<div className="md:max-w-[500px] mx-auto text-center flex flex-col gap-[25px] items-center">
						<h1 className="text-[var(--header)]">Savings</h1>
						<p>
							At Safe-home Cooperative, we offer two types of savings plans to
							suit your financial objectives.
						</p>
					</div>
				</div>
			</div>

			<div className="pt-[25px] md:pt-[50px]">
				<TrackRecord
					img={goalbased}
					header="Goal Based Savings"
					text="With our goal-based savings plan, you can set specific financial targets and save towards achieving them. Whether it's a dream vacation, buying a car, or creating an emergency fund, this plan allows you to stay focused on your objectives. If you withdraw funds before reaching your goal, you will forfeit all earned interests and incur a small fine/fee."
					imgSide="right"
				/>
				<TrackRecord
					img={lockedsavings}
					header="Locked Savings"
					text="Our time-based savings plan provides flexibility by allowing you to set a savings duration. Whether it's short-term or long-term, this plan offers attractive interest rates to boost your savings. Similar to the goal-based plan, early withdrawals will result in the loss of accrued interests and a small fine/fee."
					imgSide="left"
				/>
			</div>

			<div className="bg-[var(--light-highlight)] pt-[70px] pb-[35px] md:pt-[100px] md:pb-[50px]">
				<div className="container">
					<div className="md:max-w-[500px] mx-auto text-center flex flex-col gap-[25px] items-center">
						<h1 className="text-[var(--header)]">Investments</h1>
						<p>
							Explore our diverse and carefully selected real estate investment
							opportunities with high yields.
						</p>
					</div>
				</div>
			</div>

			<div className="pt-[25px] md:pt-[50px]">
				<TrackRecord
					img={realEstateOppurtunities}
					header="Real Estate Opportunities"
					text="Our cooperative specializes in real estate investments known for their lucrative returns. Partnering with industry experts, we identify properties with great potential, ensuring a secure and rewarding investment journey for our members. As we grow, we'll continue to introduce other exciting investment opportunities. These opportunities include:"
					imgSide="right"
				/>
			</div>
		</div>
	);
};

export default Services;
