import React from "react";
import { ProductInterface } from '../../interfaces';
import { Card, Button } from "react-bootstrap";
import { CtImageComponent, CardBody } from './productStyle';
import { GetPrice } from "../../utils/Prices";

const Product = ({ data, ShowProduct, onClickAdd, onClickRemove, exist }: { data: ProductInterface, ShowProduct: any, onClickAdd: any, onClickRemove: any, exist: boolean }) => {

  const Add = (element: ProductInterface) => {
    onClickAdd(element);
  }

  const Remove = (element: ProductInterface) => {
    onClickRemove(element);
  }

  return (
    <Card style={{ width: ShowProduct !== null ? "18rem" : "100%" }}>
      <CtImageComponent>
        <Card.Img variant="top" src={data.strDrinkThumb} loading="lazy" />
      </CtImageComponent>
      <CardBody>

        <Card.Title>
          <div className="d-flex justify-content-between">
            <div>
              {ShowProduct === null && <span>Nombre: </span>}
              {data.strDrink}
            </div>
            <div>
              <span><strong> S/. {GetPrice(data.idDrink)}.00 </strong></span>
            </div>
          </div>

        </Card.Title>
        <Card.Text>
          <span><span className="strong">Categoría: </span> {data.strCategory}. </span><br />
          <span><span className="strong">Cristalería: </span> {data.strGlass}. </span>
          {
            ShowProduct === null &&
            <>
              <br />
              <br />
              <span className="fs-3"><strong>Instrucciones</strong></span>
              <br />
              <span> {data.strInstructions} </span>
            </>
          }
        </Card.Text>
        {
          ShowProduct !== null &&
          <div className="d-flex justify-content-between">
            <Button variant="link" onClick={() => { ShowProduct(data.idDrink) }}>Vista previa</Button>
            {exist ? <Button variant="danger" onClick={() => { Remove(data) }}>Eliminar</Button> : <Button variant="primary" onClick={() => { Add(data) }}>Agregar</Button>}

          </div>
        }

      </CardBody>
    </Card>
  );
};

export default Product;
