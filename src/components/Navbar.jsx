import Nav from "react-bootstrap/Nav";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import Dropdown from 'react-bootstrap/Dropdown';
import { changeLanguage } from "./store/slices/ChangeLanguage";
export default function Navbar() {
    const dispatch = useDispatch();
    const love = useSelector((state) => state.love.items);
    const Language = useSelector(state => state.language.currentLanguage)
    return (
        <>
            <Nav className="bg-warning py-3" justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link className="text-black fw-bold" disabled>
                        Mano 🎬
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {Language}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item className="text-center" name='en' onClick={() => dispatch(changeLanguage('English'))}>English</Dropdown.Item>
                            <Dropdown.Item onClick={() => dispatch(changeLanguage('Arabic'))} className="text-center" name='ar'>Arabic</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link text-black" to="/Movielist">
                        Movielist
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link text-black" to="/Register">
                        Register
                    </Link>
                </Nav.Item>
                <Nav.Item>
                    <Link className="nav-link text-black" to="/Watchlist">
                        Watchlist
                        <span className="bg-black ms-2  text-white p-1"> {love.length}</span>
                    </Link>
                </Nav.Item>
            </Nav>
        </>
    );
}
