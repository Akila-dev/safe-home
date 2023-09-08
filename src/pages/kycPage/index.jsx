import React, { useEffect, useState } from "react";
import EmailVerificationComp from "../../components/kyc/email";
import FaceUploadComp from "../../components/kyc/face";
import IdUploadComp from "../../components/kyc/identityCard";
import idSuccess from "../../assets/idSuccess.png";
import { useNavigate } from "react-router-dom";

export default function KycPage() {
	const [page, setPage] = useState("email");

	let navigate = useNavigate();

	useEffect(() => {
		if (page === "success") {
			setTimeout(() => {
				navigate("/dashboard");
			}, 2000); //miliseconds
		}
	}, [navigate, page]);

	let changeKycPage = (page) => {
		setPage(page);
	};
	return (
		<div>
			{page === "email" && (
				<EmailVerificationComp changeKycPage={changeKycPage} />
			)}
			{page === "idCard" && <IdUploadComp changeKycPage={changeKycPage} />}
			{page === "face" && <FaceUploadComp changeKycPage={changeKycPage} />}
			{page === "success" && (
				<div className="kyc-success text-center py-5">
					<div className="container py-5">
						<div className="col-md-5 mx-auto text-white">
							<div className="col-md-7 mx-auto mb-4">
								<img src={idSuccess} alt="" className="w-100" />
							</div>
							<div className="pt-4">
								<h1>We are reviewing your information</h1>
								<p>
									We will send you an email in the next few minutes to confirm
									your verification status
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
