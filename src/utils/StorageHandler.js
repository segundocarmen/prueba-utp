import { Theme } from "./Constants";
import _ from "lodash";

const { AppStorageCartName } = Theme;

export const AddToCart = (element) => {
  const carrito = localStorage.getItem(AppStorageCartName);
  if (carrito !== null) {
    const carritoDecoded = JSON.parse(carrito);
    const id = element.id;
    const exist = _.filter(carritoDecoded, function (o) {
      return o.id === `${id}`;
    });
    const index = _.map(_.keys(_.pickBy(carritoDecoded, exist[0])), Number);
    if (exist.length >= 1) {
      let newCount = exist[0]["cant"];
      newCount = newCount + 1;
      carritoDecoded[index[0]]["cant"] = newCount;
      localStorage.setItem(AppStorageCartName, JSON.stringify(carritoDecoded));
    } else {
      carritoDecoded.push(element);
      localStorage.setItem(AppStorageCartName, JSON.stringify(carritoDecoded));
    }
  } else {
    const arrCart = [];
    arrCart.push(element);
    localStorage.setItem(AppStorageCartName, JSON.stringify(arrCart));
  }
};

export const GetCountElements = (cart) => {
  const carrito = cart;
  if (carrito !== null) {
    let sum = 0;
    carrito.forEach((element) => {
      sum = sum + element.cant;
    });
    return sum;
  } else {
    return 0;
  }
};

export const GetTotalPrice = (cart) => {
  const carrito = cart;
  if (carrito !== null) {
    let total = 0;
    carrito.forEach((element) => {
      const price = element.price;
      const cant = element.cant;
      total = total + price * cant;
    });
    return total;
  } else {
    return 0;
  }
};

export const ReturnCart = () => {
  const carrito = localStorage.getItem(AppStorageCartName);
  if (carrito !== null) {
    const carritoDecoded = JSON.parse(carrito);
    return carritoDecoded;
  } else {
    return [];
  }
};

export const RemoveFromCart = (elementId) => {
  const carrito = localStorage.getItem(AppStorageCartName);
  const carritoDecoded = JSON.parse(carrito);
  const id = elementId;
  const exist = _.filter(carritoDecoded, function (o) {
    return o.id === `${id}`;
  });
  const filter = _.differenceWith(carritoDecoded, exist, _.isEqual);
  localStorage.setItem(AppStorageCartName, JSON.stringify(filter));
};

export const GetExistElement = (elementId) => {
  const carrito = localStorage.getItem(AppStorageCartName);
  const carritoDecoded = JSON.parse(carrito);
  const id = elementId;
  const exist = _.filter(carritoDecoded, function (o) {
    return o.id === `${id}`;
  });
  if (exist.length >= 1) {
    return true;
  } else {
    return false;
  }
};

export const ClearCart = () => {
  localStorage.clear();
};
