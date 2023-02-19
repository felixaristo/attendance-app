import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Form } from "./pages/Form";
import { Thankyou } from "./pages/Thankyou";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Form />} />
        <Route exact path="/thankyou" element={<Thankyou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
