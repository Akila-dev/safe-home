import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const DashboardLayout = () => {
	return (
		<div className="d-lg-flex">
			<div className="col-lg-2">
				<Sidebar />
			</div>
			<div className="col-lg-10">
				<div className="pages pt-4">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
