import "./App.css";
import { Navbar, Footer } from "./components";
import { Home, About, Services } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			{/* Navigation */}
			<div className="fixed w-full z-[10000000]">
				<Navbar />
			</div>
			{/* Page Content Start */}
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/services" element={<Services />} />
			</Routes>
			{/* Page Content End */}

			{/* Footer */}
			<Footer />
		</div>
	);
}

export default App;
