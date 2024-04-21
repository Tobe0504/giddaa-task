import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="*"
        element={
          <Layout>
            <div></div>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
