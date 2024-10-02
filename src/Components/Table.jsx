import { useState } from "react";

export default function Table({id, order, state, setState, setId}) {


    const tableOrderItem = order.find(item => item.tableId === id);
    const totalPrice = tableOrderItem ? tableOrderItem.order.reduce((sum, item) => sum + item.price * item.quantity, 0) : 0;

    const handleClick = (id) => {
        setState(!state);
        console.log(id);
        setId(id);
    }

    return ( 
        <div className="tableContainer" id={id}>
            <div className="table"
            onClick={() => handleClick(id)}>
                <span className="id">{id}</span>
                {totalPrice > 0 && <span className="totalPrice">{totalPrice.toFixed(2)} kn</span>}
            </div>
            <div className="chair chair-left"></div>
            <div className="chair chair-right"></div>
        </div>
    )
}