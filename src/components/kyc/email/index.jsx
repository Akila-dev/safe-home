import React from "react";

export default function EmailVerificationComp(props) {
	let changeInput = (e) => {
		const { maxLength, value, name } = e.target;
		const [fieldName, fieldIndex] = name.split("-");

		let fieldIntIndex = parseInt(fieldIndex, 10);
		if (value.length >= maxLength) {
			if (fieldIntIndex < 6) {
				const nextfield = document.querySelector(
					`input[name=field-${fieldIntIndex + 1}]`
				);
				if (nextfield !== null) {
					nextfield.focus();
					console.log(fieldName);
				}
			}
		}
	};

	let changePage = () => {
		props?.changeKycPage("idCard");
	};

	return (
		<div>
			<div className="container py-5">
				<div className="col-md-5 mx-auto">
					<div className="card rounded-4 px-md-2">
						<div className="card-body">
							<div className="pb-5">
								<div className="text-end py-4">
									<i
										className="ri-close-fill ri-xl"
										style={{ color: "#8D4000", fontSize: "30px" }}
									/>
								</div>
								<h1 style={{ color: "#8D4000" }}>Email Verification</h1>
								<p className="text-secondary">
									A code has been sent to Example@gmail.com, kindly input the
									code to confirm Signup.
								</p>
							</div>
							<div className="text-center mt-5">
								<p>Enter 6 Digit Code</p>
								<form action="" className="my-5">
									<div className="d-flex justify-content-center align-items-center">
										<input
											type="text"
											name="field-1"
											onChange={changeInput}
											className="form-control me-3"
											style={{ width: "40px" }}
											maxlength="1"
										/>
										<input
											type="text"
											name="field-2"
											onChange={changeInput}
											className="form-control me-3"
											style={{ width: "40px" }}
											maxlength="1"
										/>
										<input
											type="text"
											name="field-3"
											onChange={changeInput}
											className="form-control "
											style={{ width: "40px" }}
											maxlength="1"
										/>
										<p className="m-0 p-0 mx-3">-</p>
										<input
											type="text"
											name="field-4"
											onChange={changeInput}
											className="form-control me-3"
											style={{ width: "40px" }}
											maxlength="1"
										/>
										<input
											type="text"
											name="field-5"
											onChange={changeInput}
											className="form-control me-3"
											style={{ width: "40px" }}
											maxlength="1"
										/>
										<input
											type="text"
											name="field-6"
											onChange={changeInput}
											className="form-control me-3"
											style={{ width: "40px" }}
											maxlength="1"
										/>
									</div>
								</form>
								<button
									className="btn my-4 link-underline"
									style={{ color: "#8D4000" }}
								>
									Resend Verification Code
								</button>{" "}
								<br />
								<button
									className="btn btn-brown w-75 my-4"
									onClick={changePage}
								>
									Continue
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
