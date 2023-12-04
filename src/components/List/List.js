import React, {useEffect, useState} from "react";
import "./style.css";
import {Logo} from "./Logo";
import {FixedSizeList} from "react-window";

const data = (setList) => {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data => setList(data));
};

export function List() {
    let [list, setList] = useState({});
    useEffect(() => data(setList), []);
    const ListLi = ({index, style}) => {
        const product = list?.products[index];
        if (!product){
            return null
        }
        return (
            <li key={product.id} style={style}>
                <Logo backgroundImage={product.images[0]}/>
                {product.title}
                <br></br>
                Brand - {product.brand}
                <br></br>
                Price = {product.price}
            </li>)
    }

    return (
        <>
            <h3 className="Listh3">Products List</h3>
            <FixedSizeList className="List ListDiv"
                           height={400}
                           itemCount={list?.products?.length}
                           itemSize={70}>
                {ListLi}
            </FixedSizeList>
        </>
    );
}