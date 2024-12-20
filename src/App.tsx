import { BrowserRouter, Routes, Route } from 'react-router-dom';

import UploadImage from "./pages/images-analys";
import Login from "./Login";
const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/images-analys" element={<UploadImage />} />
		</Routes>
	</BrowserRouter>
);

export default App;