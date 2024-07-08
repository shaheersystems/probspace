import "./App.css";
import AppLayout from "./layouts/AppLayout";
import { Routes, Route } from "react-router-dom";
import Questions from "./pages/Questions";
import { Heading } from "./components/ui/heading";

const App = () => {
  return (
    <>
      <AppLayout>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Heading>Home</Heading>
              </div>
            }
          />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </AppLayout>
    </>
  );
};

export default App;
