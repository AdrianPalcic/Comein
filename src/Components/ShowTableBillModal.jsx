

export default function ShowTableBillModal({ id, order, setState, state, removeOrder }) {
    const tableOrder = order.find(item => item.tableId === id);
    
    const calculateTotal = (items) => {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const handleRemove = () => {
        setState(!state);
    }

    return (
        <div className="tablemodal">
            <button className="removeModal" onClick={handleRemove}>X</button>
            <div className="modal-content">
                <h1>Table {id}</h1>
                {tableOrder && tableOrder.order.length > 0 ? (
                    <div className="order-details">
                        <h3>Current Order</h3>
                        <ul className="order-list">
                            {tableOrder.order.map((item, index) => (
                                <li key={index} className="order-item">
                                    <span className="item-name">{item.name}</span>
                                    <span className="item-quantity">x{item.quantity}</span>
                                    <span className="item-price">{(item.price * item.quantity).toFixed(2)} kn</span>
                                </li>
                            ))}
                        </ul>
                        <div className="order-total">
                            <strong>Total:</strong> {calculateTotal(tableOrder.order).toFixed(2)} kn
                        </div>
                        <div className="buttonContainer">
            <button className="removeOrder" onClick={() => removeOrder(id)}>
                Remove Order
            </button>
            </div>
                    </div>
                    
                ) : (
                    <p className="no-order">No order assigned to this table.</p>
                )}
            </div>
            
        </div>
    );
}