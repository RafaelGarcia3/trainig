import React, { use, useState } from "react";

function ProductCategoryRow( {category} ){
    return(
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}


function ProductRow( {product} ){
    const name = product.stocked 
        ? product.name 
        : (<span style={{color: 'red'}}> {product.name} </span>);
        
    return (
        <tr>
            <td> {name} </td>
            <td> {product.price} </td>
        </tr>
    );
}

function ProductTable( {products, filterText, inStock} ){
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if(product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1){ return; }
        if(inStock && !product.stocked){ return; }

        if(product.category !== lastCategory){
            rows.push(
                <ProductCategoryRow 
                    category={product.category}
                    key={product.category} 
                />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} 
            />
        );
        lastCategory = product.category;
    });

    return(
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar( {filterText, inStock, onFilterTextchange, onInStockChange} ){
    return(
        <form>
            <input 
                value={filterText}
                onChange={(e) => onFilterTextchange(e.target.value)}
                type="text" 
                placeholder="Search..." />
            <label>
                <input 
                    type="checkbox"
                    checked = {inStock}
                    onChange = {(e) => onInStockChange(e.target.checked)} 
                />
                {" "}
                Only show products in stock
            </label>
        </form>
    );
}

function Filter( {products} ){
    const [filterText, setFilterText] = useState('');
    const [stock, setStock] = useState(false);

    return(
        <div>
            <SearchBar 
                filterText = {filterText}
                inStock = {stock}
                onFilterTextchange = {setFilterText}
                onInStockChange = {setStock}
            />
            <ProductTable 
                products={products}
                filterText = {filterText}
                inStock = {stock}
            />
        </div>
    );
}

const PRODUCTS = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

export default function Product() {
    return <Filter products={PRODUCTS} />;
}
  