import React from "react";

// import { Card, VisionMissionCard, TrackRecord, JoinUsCTA } from "../components";
import { TrackRecord, Card, JoinUsCTA } from "../components";

// IMPORTING ALL IMAGES START
import goalbased from "../assets/goal-based.png";
import lockedsavings from "../assets/locked-savings.png";
import realEstateOppurtunities from "../assets/real-estate-oppurtunities.png";

import switchIcon from "../assets/switchIcon.png";
import documentsIcon from "../assets/switchIcon.png";
import marketplaceIcon from "../assets/marketplaceIcon.png";
import officeIcon from "../assets/officeIcon.png";

const Services = () => {
	return (
		<div className="tw-pt-[80px]">
			<div className="tw-bg-[var(--light-highlight2)] tw-pt-[70px] tw-pb-[35px] md:tw-pt-[100px] md:tw-pb-[50px]">
				<div className="gp-container">
					<div className="md:tw-max-w-[500px] tw-mx-auto md:tw-text-center tw-flex tw-flex-col tw-gap-[25px] md:tw-items-center">
						<h1 className="tw-text-[var(--header)] tw-h1">Savings</h1>
						<p className="tw-p">
							At Safe-home Cooperative, we offer two types of savings plans to
							suit your financial objectives.
						</p>
					</div>
				</div>
			</div>

			<div className="tw-pt-[25px] md:tw-pt-[50px]">
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

			<div className="tw-bg-[var(--light-highlight2)] tw-pt-[70px] tw-pb-[35px] md:tw-pt-[100px] md:tw-pb-[50px]">
				<div className="gp-container">
					<div className="md:tw-max-w-[500px] tw-mx-auto md:tw-text-center tw-flex tw-flex-col tw-gap-[25px] md:tw-items-center">
						<h1 className="tw-text-[var(--header)] tw-h1">Investments</h1>
						<p className="tw-p">
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

			<div className="tw-py-[35px] tw-bg-[var(--light-bg)]">
				<div className="gp-container tw-grid tw-grid-cols-1 md:tw-grid-cols-2 xl:tw-grid-cols-4 tw-gap-[1.5rem] md:tw-gap-[2rem]">
					<Card
						icon={switchIcon}
						title="Land Owners Club"
						text="Invest in land units across various locations for steady passive rental income."
					/>
					<Card
						icon={marketplaceIcon}
						title="Shop Owners Club"
						text="Own units in bustling commercial spaces and earn from vibrant retail markets."
					/>
					<Card
						icon={officeIcon}
						title="Office Owners Club"
						text="Join a community of investors in prime office spaces, generating consistent rental returns."
					/>
					<Card
						icon={documentsIcon}
						title="Home Owners Club"
						text="Experience the pride and security of earning passively and owning units of residential properties across sought-after neighborhoods."
					/>
				</div>
			</div>

			<div className="tw-bg-[var(--light-highlight2)] tw-pt-[70px] tw-pb-[35px] md:tw-pt-[100px] md:tw-pb-[50px]">
				<div className="gp-container">
					<div className="md:tw-max-w-[500px] tw-mx-auto md:tw-text-center tw-flex tw-flex-col tw-gap-[25px] md:tw-items-center">
						<h1 className="tw-text-[var(--header)] tw-flex tw-gap-4 tw-items-center tw-h1">
							Loans{" "}
							<span className="tw-text-xl md:tw-text-3xl tw-text-gray-400 tw-inline-block">
								(Coming Soon)
							</span>
						</h1>
						<p className="tw-p">
							Stay tuned for future updates! Soon, we will introduce a loan
							system to our members, offering additional financial opportunities
							and services to further enrich your cooperative experience.
						</p>
					</div>
				</div>
			</div>

			{/* CTA */}
			<JoinUsCTA />

			<div className="gp-container tw-py-[35px] md:tw-py-[80px]">
				<h3 className="multi-color-text tw-text-center md:tw-text-[2rem] md:tw-leading-[3.3rem] xl:tw-text-[2.5rem] xl:tw-leading-[3.8rem] tw-max-w-[850px] tw-mx-auto tw-h3">
					At Safe-home <span>Cooperative</span>, we prioritize <span>your</span>{" "}
					financial growth <span>and</span> security. <span>Our</span> savings{" "}
					<span>and</span> investment <span>plans are</span> tailored{" "}
					<span>to</span> empower <span>you in</span> achieving{" "}
					<span>your</span> goals while <span>promoting</span> financial
					discipline. Join <span>us today</span> and embark <span>on a</span>{" "}
					journey <span>of</span> prosperity <span>and</span> success.
				</h3>
			</div>
		</div>
	);
};

export default Services;
