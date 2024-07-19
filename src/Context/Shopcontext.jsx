import { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getCart = () => {
    let Cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        Cart[index] = 0;
    }
    return Cart;
};

const ShopContextProvider = (props) => {
    const [all_product, set_allproduct] = useState([]);
    const [cartitems, setcartiems] = useState(getCart());

    useEffect(() => {
        fetch('https://reactjs-e-comer-backend.onrender.com/allproduct')
            .then((res) => res.json())
            .then((data) => {
                set_allproduct(data);
            });

        if (localStorage.getItem('Auth-Token')) {
            fetch('https://reactjs-e-comer-backend.onrender.com/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'Content-Type': 'application/json',
                    'Auth-Token': `${localStorage.getItem('Auth-Token')}` // Common practice to use Bearer token
                },
                body: ""
            })
                .then((res) => res.json())
                .then((data) => {
                    setcartiems(data);
                });
        }
    }, []);

    const addtocart = (itemid) => {
        if (localStorage.getItem('Auth-Token')) {
            setcartiems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }));

            fetch('https://reactjs-e-comer-backend.onrender.com/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'Content-Type': 'application/json',
                    'Auth-Token': `${localStorage.getItem('Auth-Token')}` // Common practice to use Bearer token
                },
                body: JSON.stringify({ 'itemid': itemid })
            })
                .then((res) => res.json())
                .then((data) => console.log(data));
        } else {
            alert("Please create an account before adding items to the cart.");
        }
    };

    const removecart = (itemid) => {
        if (localStorage.getItem('Auth-Token')) {
            setcartiems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }));

            fetch('https://reactjs-e-comer-backend.onrender.com/removecart', {
                method: 'POST',
                headers: {
                    Accept: 'application/form-data',
                    'Content-Type': 'application/json',
                    'Auth-Token': `${localStorage.getItem('Auth-Token')}` // Common practice to use Bearer token
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
                let iteminfo = all_product.find((product) => product.id === Number(item));
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

    const Contextvalue = { all_product, cartitems, addtocart, removecart, gettotalcart, gettotalcartitem };

    return (
        <ShopContext.Provider value={Contextvalue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
