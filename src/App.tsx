import './App.css'
import {Route, Routes} from "react-router-dom";
import CategoriesPage from "./component/category/CategoriesPage.tsx";
import CategoryCreatePage from "./component/create";
import ProductListPage from "./component/product/list/ProductListPage.tsx";
function App() {


    return (
        <>
            <Routes>
                <Route path="/" >
                    <Route index element={<CategoriesPage />} />
                    <Route path={"create"} element={<CategoryCreatePage/>}/>

                    <Route path={"products/:id"} element={<ProductListPage/>}/>
                </Route>
            </Routes>
        </>
    )
}

export default App
