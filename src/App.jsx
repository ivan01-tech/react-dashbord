import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home";
import ProductsPage from "./pages/products/ListPage";
import SideBar from "./components/sidebar/SideBar";
import Navbar from "./components/navBar/navbar";
import ProductsItem from "./pages/products/ProductsItem";
import NewItem from "./components/new/NewItem";
import DataTable from "./components/datatable/DataTable";
import SinglePage from "./pages/single/SinglePage";
import { productsSource, userSource } from "./data/formSourceData";
import { useThemeContextProvider } from "./context/ThemeContext";
import LoginForm from "./pages/login/LoginForm";
import RequiredAuth from "./components/auth/RequiredAuth";

function App() {
  const { themeMode } = useThemeContextProvider();
  const mode = themeMode.isDarkMode ? "dark" : "";
  return (
    <>
      <SideBar />
      <div className={`contentWrap ${mode}`}>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />

          {/* Protected Routes */}
          <Route path="/" element={<RequiredAuth />}>
            <Route index element={<HomePage />} />
            <Route path="product">
              <Route index element={<ProductsPage />} />
              <Route
                path="new"
                element={
                  <NewItem
                    dataSource={productsSource}
                    title={"Add new Product"}
                  />
                }
              />
              <Route path=":id" element={<ProductsItem />} />
            </Route>

            <Route path="users">
              <Route index element={<DataTable />} />
              <Route
                path="new"
                element={
                  <NewItem dataSource={userSource} title={"Add new User"} />
                }
              />
              <Route path=":id" element={<SinglePage />} />
            </Route>
          </Route>

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
