import "./App.css";
import AppLayout from "./layouts/AppLayout";
import { Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions";
import { Heading } from "./components/ui/heading";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </AppLayout>
    </>
  );
};

export default App;
