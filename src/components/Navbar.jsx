import Nav from "react-bootstrap/Nav";
import { Link } from "react-router";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
export default function Navbar() {


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
                    <Link className="nav-link text-black" to="/Watchlist">
                        Watchlist
                    </Link>
                </Nav.Item>
                <Form>
                    <Form.Control
                        type="text"
                        placeholder="Search"
                        className=" mr-sm-2 h-100"
                    />
                </Form>
                <Button >Submit</Button>
            </Nav>
        </>
    );
}
