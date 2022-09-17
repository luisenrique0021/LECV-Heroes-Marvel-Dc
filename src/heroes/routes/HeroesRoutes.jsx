import { Navigate, Route, Routes } from "react-router-dom"
import { Navbar } from "../../design"
import { DcPage, MarvelPage, HeroPage, InicioPage } from "../pages"




export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="inicio" element={<InicioPage />} />

                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />

                <Route path="heroe/:heroId" element={<HeroPage />} />

                <Route path="/*" element={<Navigate to="/inicio" />} />

            </Routes>

        </>
    )
}
