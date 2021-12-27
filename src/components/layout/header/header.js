import React, { useContext, useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { DataContext } from "../../../context/ContextApp";
import {
  GetCountElements,
  GetTotalPrice,
  RemoveFromCart,
  ReturnCart,
  ClearCart,
} from "../../../utils/StorageHandler";
import { ItemNav, ListProducts } from "./headerStyle";

const Header = () => {
  const { cart, changeCart } = useContext(DataContext);
  const [show, setShow] = useState(false);

  const CountElements = () => {
    return GetCountElements(cart);
  };

  const ShowList = () => {
    setShow(!show);
  };

  const RemoveItem = (id) => {
    RemoveFromCart(id);
    Refresh();
  };

  const Clear = () => {
    const conf = window.confirm("Desea vaciar el carrito?");
    if (conf) {
      ClearCart();
      Refresh();
    }
  };

  const Refresh = () => {
    const cart = ReturnCart();
    changeCart(cart);
  };

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Tienda</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav>
              <Nav.Item>
                <ItemNav> {CountElements()} </ItemNav>
              </Nav.Item>
              <Nav.Link href="#deets" onClick={ShowList}>
                Ver carrito
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {show && (
        <ListProducts>
          <ul>
            <li>
              <span>Producto</span>
              <span>Cantidad</span>
              <span>Precio</span>
              <span>Quitar</span>
            </li>
            {cart.map((item) => {
              return (
                <li key={item.id}>
                  <span>{item.product}</span> <span> {item.cant} </span>{" "}
                  <span> S/ {item.price}.00 </span>{" "}
                  <button
                    className="btn-danger close"
                    onClick={() => {
                      RemoveItem(item.id);
                    }}
                  >
                    x
                  </button>
                </li>
              );
            })}
          </ul>
          <hr />
          <div>
            <button className="btn btn-link" onClick={Clear}>
              Vaciar carrito
            </button>
            <span>Total:</span>
            <span> S/. {GetTotalPrice(cart)}.00 </span>
          </div>
        </ListProducts>
      )}
    </header>
  );
};

export default Header;
