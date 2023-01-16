import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BootcampsPage from "./pages/BootcampsPage";

import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Routes>
          <Route exact path="/" component={BootcampsPage} />
        </Routes>
      </Routes>
    </>
  );
};

export default App;
