import { Route, Routes } from "react-router-dom";
import { DefaultHeader } from "../../components/defaultComponents";
import { Home, Register, Sortition } from "../pages";


export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/" element={<DefaultHeader />}>
                <Route path="/register" element={<Register />} />
                <Route path="/sortition" element={<Sortition />} />
            </Route>
        </Routes>
    )
}