import React, {useEffect, useState} from "react";
import "./style.css";
import {Logo} from "./Logo";

const dataCard = (setList) => {
    fetch('https://dummyjson.com/carts')
        .then(res => res.json())
        .then(data => setList(data));
};

export function List() {
    const [listAllElements, setListAllElements] = useState({});
    useEffect(() => dataCard(setListAllElements), []);

    return (
        <>
            <h3 className="Listh3">Carts list</h3>
            <div className="ListDiv">
                <ul>{listAllElements?.carts?.map((cart) =>
                    <li key={cart.id}>
                        <ol>{cart?.products?.map((product) =>
                            <li key={product.id} className="p">
                                <Logo title={product.title}/>
                                {product.title}
                                <br></br>
                                Price = {product.price}
                            </li>)
                        }
                        </ol>
                    </li>)
                }
                </ul>
            </div>
        </>
    );
}