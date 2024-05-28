import {Routes, Route, Redirect} from 'react-router-dom';
import HomePage from '../components/Homepage';
import Menu from "../components/Menu";
import About from "../components/About"

function AppRoutes() {


    return (
        <>
            <Routes>
                <Route path="/" Component={HomePage} />
                <Route path="/menu" Component={Menu} />
                <Route path="/about" Component={About} />
            </Routes>
        </>
    )
}

export default AppRoutes;