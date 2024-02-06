import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Gateway from './pages/Gateway';
import TypeC from "./pages/TypeC";

const Router = () => {
  return (
    <BrowserRouter basename="/LeeChengwon-Portfolio">
      <Routes>
        {/* <Route path="/" element={<Gateway />} /> */}
        <Route path="/" element={<TypeC />} />
        {/* <Route path="/type_b" element={<TypeB />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
