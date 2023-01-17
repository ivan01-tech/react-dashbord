import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home";
import SinglePage from "./pages/single/SimglePage";
import ProductsPage from "./pages/products/ListPage";
import SideBar from "./components/sidebar/SideBar";
function App() {
  return (
    <>
      <SideBar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="/single">
            <Route index element={<SinglePage />} />
          </Route>
          <Route path="/product">
            <Route index element={<ProductsPage />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
