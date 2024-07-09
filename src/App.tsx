import './App.css';
import { Route, Routes } from "react-router-dom";
import CategoriesPage from "./component/category/CategoriesPage.tsx";
import CategoryCreatePage from "./component/create";
import ProductCreatePage from "./component/create/ProductCreatePage";
import ProductListPage from "./component/product/list/ProductListPage.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<CategoriesPage />} />
                <Route path="create" element={<CategoryCreatePage />} />
                <Route path="products/:id" element={<ProductListPage />} />
                <Route path="categories/:id/create-product" element={<ProductCreatePage />} />
            </Routes>
        </>
    );
}

export default App;

