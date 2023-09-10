import React from "react";
import { GraphIcon, PiggyIcon, WalletIcon } from "../../assets/svgs";
import { dummyTransactions } from "../../components/utils/dummyDatas";

export default function HomePage() {
	return (
		<div className="home-page">
			<div className="row">
				<div className="col-md-6">
					<img src="" alt="" />
					<p className="mb-0" style={{ fontSize: "35px" }}>
						Hello <span style={{ fontFamily: "U-bold" }}> Adewale!</span>
					</p>
					<p>Take the bold step</p>
				</div>
			</div>

			<div className="card border-0 py-3">
				<div className="card-body">
					<div className="row align-items-center">
						<div className="col-md-6">
							<h4>Overview</h4>
						</div>
						<div className="col-md-6 text-md-end">
							<button className="btn btn-orange-outline me-3 px-4">
								{" "}
								- Withdraw
							</button>
							<button className="btn btn-brown px-4"> + Quick Save</button>
						</div>

						<div className="col-md-4 mt-4">
							<div className="card balance-card">
								<div className="card-body">
									<div className="py-2">
										<i className="">{WalletIcon}</i>
									</div>
									<p>Total Balance</p>
									<h2 className="mb-0 pb-0">#1,000,000.00</h2>
								</div>
							</div>
						</div>
						<div className="col-md-4 mt-4">
							<div className="card investment-card">
								<div className="card-body">
									<i>{GraphIcon}</i>
									<p>Total Investment</p>
									<h2 className="mb-0 pb-0">#1,000,000.00</h2>
								</div>
							</div>
						</div>
						<div className="col-md-4 mt-4">
							<div className="card savings-card">
								<div className="card-body">
									<i>{PiggyIcon}</i>
									<p>Total Savings</p>
									<h2 className="mb-0 pb-0">#1,000,000.00</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="card border-0 py-3 mt-5">
				<div className="card-body">
					<div className="row align-items-center">
						<div className="col-md-6">
							<h4>Transactions</h4>
						</div>
						<div className="col-md-6"></div>
					</div>
					<div className="table-responsive">
						<table className="table">
							<thead className="">
								<tr>
									<th scope="col">Date & Time</th>
									<th scope="col">Transaction Type</th>
									<th scope="col">Amount</th>
									<th scope="col">Reference</th>
								</tr>
							</thead>
							<tbody>
								{dummyTransactions?.map((val, index) => (
									<tr key={index}>
										<td>{val?.time}</td>
										<td>{val?.type}</td>
										<td>{val?.amount}</td>
										<td>{val?.reference}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
}
