/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import all_product from "../component/Assets/all_product"; // Keep this import to access the products locally

export const ShopContext = createContext(null);

const getCart = () => {
    let Cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        Cart[index] = 0;
    }
    return Cart;
};

const ShopContextprovider = (props) => {
    const [cartitems, setcartiems] = useState(getCart());
    const [allProducts, set_allproduct] = useState(all_product); // Added a state to fetch or store product data

    useEffect(() => {
        // Fetch product data from the server if needed, fallback to local data
        fetch('https://reactjs-e-comer-backend.onrender.com/allproduct')
            .then((res) => res.json())
            .then((data) => { set_allproduct(data); }) // Store fetched data if available

        if (localStorage.getItem('Auth-Token')) {
            fetch('https://reactjs-e-comer-backend.onrender.com/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'Content-Type': 'application/json',
                    'Auth-Token': `${localStorage.getItem('Auth-Token')}` // Bearer token for cart data
                },
                body: ""
            })
                .then((res) => res.json())
                .then((data) => { setcartiems(data); });
        }
    }, []);

    const addtocart = (itemid) => {
        setcartiems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));

        if (localStorage.getItem('Auth-Token')) {
            fetch('https://reactjs-e-comer-backend.onrender.com/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'Content-Type': 'application/json',
                    'Auth-Token': `${localStorage.getItem('Auth-Token')}`
                },
                body: JSON.stringify({ 'itemid': itemid })
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        }
    };

    const removecart = (itemid) => {
        setcartiems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));

        if (localStorage.getItem('Auth-Token')) {
            fetch('https://reactjs-e-comer-backend.onrender.com/removecart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'Content-Type': 'application/json',
                    'Auth-Token': `${localStorage.getItem('Auth-Token')}`
                },
                body: JSON.stringify({ 'itemid': itemid })
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        }
    };

    const gettotalcart = () => {
        let totalamout = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let iteminfo = allProducts.find((product) => product.id === Number(item));
                totalamout += iteminfo.new_price * cartitems[item];
            }
        }
        return totalamout;
    };

    const gettotalcartitem = () => {
        let totalitem = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                totalitem += cartitems[item];
            }
        }
        return totalitem;
    };

    const Contextvalue = { allProducts, cartitems, addtocart, removecart, gettotalcart, gettotalcartitem };

    return (
        <ShopContext.Provider value={Contextvalue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextprovider;
