import {Routes, Route, Redirect} from 'react-router-dom'
import HomePage from '../components/Homepage'
import Menu from "../components/Menu"


function AppRoutes() {


    return (
        <>
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/menu" Component={Menu} />
            </Routes>
        </>
    )
}

export default AppRoutes;