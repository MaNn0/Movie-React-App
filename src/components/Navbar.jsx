import Nav from "react-bootstrap/Nav";
import { useSelector } from "react-redux";
import { Link } from "react-router";
export default function Navbar() {
    const love = useSelector((state) => state.love.items);

    return (
        <>
            <Nav className="bg-warning py-3" justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link className="text-black fw-bold" disabled>
                        Mano 🎬
                    </Nav.Link>
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
