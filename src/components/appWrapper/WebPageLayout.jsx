import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "../../components";

const DashboardLayout = () => {
	return (
		<div className="App">
			{/* Navigation */}
			<div className="tw-fixed tw-w-full tw-z-[10000000]">
				<Navbar />
			</div>

			<Outlet />

			{/* Footer */}
			<Footer />
		</div>
	);
};

export default DashboardLayout;
