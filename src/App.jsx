import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/Home";
import SideBar from "./components/sidebar/SideBar";
import Navbar from "./components/navBar/navbar";
import NewItem from "./components/new/NewItem";
import DataTable from "./components/datatable/DataTable";
import SinglePage from "./pages/single/SinglePage";
import { productsSource, userSource } from "./data/formSourceData";
import { useThemeContextProvider } from "./context/ThemeContext";
import LoginForm from "./pages/login/LoginForm";
import RequiredAuth from "./components/auth/RequiredAuth";

export const PRODUCTS = "products";
export const USERS = "users";

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
            <Route path={PRODUCTS}>
              <Route index element={<DataTable path={PRODUCTS} />} />
              <Route
                path="new"
                element={
                  <NewItem
                    path={PRODUCTS}
                    dataSource={productsSource}
                    title={"Add new Product"}
                  />
                }
              />
              <Route path=":id" element={<SinglePage path={PRODUCTS} />} />
            </Route>

            <Route path={USERS}>
              <Route index element={<DataTable />} />
              <Route
                path="new"
                element={
                  <NewItem
                    dataSource={userSource}
                    title={"Add new User"}
                    path={USERS}
                  />
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
