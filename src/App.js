import "./App.css";
import { Home, About, Services } from "./pages";
import { Routes, Route, useLocation } from "react-router-dom";

import AppWrapperComp from "./components/appWrapper";
import DashboardLayout from "./components/appWrapper/DashboardLayout.jsx";
import WebPageLayout from "./components/appWrapper/WebPageLayout.jsx";
import AccountPage from "./pages/account";
import LoginPage from "./pages/auth/login";
import SignUpPage from "./pages/auth/signup";
import Dashboard from "./pages/dashboard";
import KycPage from "./pages/kycPage";

function App() {
	let location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");

	return (
		<div className="App">
			<AppWrapperComp>
				{splitLocation[1] === "login" ||
				splitLocation[1] === "signup" ||
				splitLocation[1] === "completeKYC" ? (
					<Routes>
						<Route path="/login" element={<LoginPage />} />
						<Route path="/signup" element={<SignUpPage />} />
						<Route path="/completeKYC" element={<KycPage />} />
					</Routes>
				) : (
					<div>
						<Routes>
							{/* Dashboard Related Routes */}
							<Route element={<DashboardLayout />}>
								<Route path="/dashboard" element={<Dashboard />} />
								<Route path="/Account" element={<AccountPage />} />
							</Route>
							{/* Web page related Routes */}
							<Route element={<WebPageLayout />}>
								<Route exact path="/" element={<Home />} />
								<Route exact path="/about" element={<About />} />
								<Route exact path="/services" element={<Services />} />
								<Route exact path="/products" element={<Home />} />
								<Route exact path="/membership" element={<Home />} />
								<Route exact path="/contact" element={<Home />} />
							</Route>
						</Routes>
					</div>
				)}
			</AppWrapperComp>
		</div>
	);
}

export default App;
