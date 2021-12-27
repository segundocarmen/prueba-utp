import React, { useEffect, useState, useRef, useContext } from "react";
import { DataContext } from "../../context/ContextApp";
import { GetProducts, GetProductId } from '../../services/product';
import { ProductInterface, ToastInterface } from '../../interfaces';
import { InitialProduct } from "../../interfaces/product/initialProps";
import { ToastNew } from "../../components/toast/ToastNew";
import Layout from "../../components/layout/main";
import Loader from "../../components/loader/loader";
import Product from "../../components/product/product";
import ModalComponent from "../../components/modal/modal";
import { ProductsListComponent } from './productsStyle';
import { AddToCart, ReturnCart, GetExistElement, RemoveFromCart } from "../../utils/StorageHandler";
import { GetPrice } from "../../utils/Prices";


const Products = () => {

    const [products, setProducts] = useState<ProductInterface[]>([]);
    const [productSelected, setProductSelected] = useState<ProductInterface>(InitialProduct);
    const [load, setLoad] = useState<boolean>(false);
    const [showPreview, setShowPreview] = useState<boolean>(false);
    const { changeCart } = useContext(DataContext);

    const handleClosePreview = () => setShowPreview(false);

    const toastManagerRef = useRef<any>(null);
    const setConfigToast = (config: ToastInterface) => {
        if (!!toastManagerRef) {
            toastManagerRef.current && toastManagerRef.current.changeToast(config);
        }
    }

    useEffect(() => {
        GetData();
        const cart = ReturnCart();
        changeCart(cart);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const ShowProduct = async (id: string) => {
        try {
            setLoad(true);
            const result = await GetProductId(id);
            setProductSelected(result.data.drinks[0]);
            setConfigToast({ show: true, backColor: 'color-success', text: 'Producto recibido', title: 'Éxito' });
            setLoad(false);
            setShowPreview(true);
        } catch (error: any) {
            const message = error.response ? error.response.errors[0].message : 'No se puede conectar con el servidor';
            setConfigToast({ show: true, backColor: 'color-error', text: message, title: 'Error' });
            setLoad(false);
        }
    }

    const GetData = async () => {
        try {
            setLoad(true);
            const result = await GetProducts();
            setProducts(result.data.drinks);
            setConfigToast({ show: true, backColor: 'color-success', text: 'Productos cargados', title: 'Éxito' });
            setLoad(false);
        } catch (error: any) {
            const message = error.response ? error.response.errors[0].message : 'No se puede conectar con el servidor';
            setConfigToast({ show: true, backColor: 'color-error', text: message, title: 'Error' });
            setLoad(false);
        }
    }

    const AddProduct = (element: ProductInterface) => {
        const product = { id: element.idDrink, product: element.strDrink, photo: element.strDrinkThumb, cant: 1, price: GetPrice(element.idDrink) };
        AddToCart(product);
        setConfigToast({ show: true, backColor: 'color-success', text: "Producto agregado", title: 'Success' });
        const cart = ReturnCart();
        changeCart(cart);
    }

    const RemoveProduct = (element: ProductInterface) => {
        const conf = window.confirm("Desea remover este producto?");
        if (conf) {
            RemoveFromCart(element.idDrink);
            setConfigToast({ show: true, backColor: 'color-success', text: "Producto Eliminado", title: 'Success' });
            const cart = ReturnCart();
            changeCart(cart);
        }
    }

    return (
        <Layout>
            <ToastNew ref={toastManagerRef} />
            <h1>Productos</h1>
            <ProductsListComponent>
                {
                    products.map((product) => {
                        return (
                            <Product
                                key={product.idDrink}
                                data={product}
                                ShowProduct={ShowProduct}
                                onClickAdd={AddProduct}
                                onClickRemove={RemoveProduct}
                                exist={GetExistElement(product.idDrink)}
                            />
                        )
                    })
                }
            </ProductsListComponent>
            <ModalComponent
                showComponent={showPreview}
                closeHandler={handleClosePreview}
                data={productSelected}
                onClickAdd={AddProduct}
                onClickRemove={RemoveProduct}
                exist={GetExistElement(productSelected.idDrink)}
            >
                <Product
                    data={productSelected}
                    ShowProduct={null}
                    onClickAdd={null}
                    onClickRemove={null}
                    exist={GetExistElement(null)}
                />
            </ModalComponent>
            {load && <Loader />}
        </Layout>
    )
}

export default Products;