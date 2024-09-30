import { useState, useEffect} from 'react';
import Modal from './AssignBillModal';


const categories = [
  { name: "Napitci", color: "red" },
  { name: "To-go", color: "blue" },
  { name: "Sokovi", color: "green" },
  { name: "Mineralne", color: "yellow" },
  { name: "Vino", color: "purple" },
  { name: "Pivo", color: "orange" },
  { name: "Dodatci", color: "pink" },
  { name: "Domaca zestoka", color: "indigo" },
  { name: "Strana zestoka", color: "teal" },
  { name: "Placeholder", color: "gray" },
  { name: "Placeholder", color: "gray" },
  { name: "Sve", color: "gray" }
];

const drinks = [
  { name: "Kava", price: 8, category: "Napitci" },
  { name: "Kava s mlijekom", price: 9, category: "Napitci" },
  { name: "Cappucino", price: 10, category: "Napitci" },
  { name: "Mala sa mlijekom", price: 9, category: "Napitci" },
  { name: "Mala sa šlagom", price: 10, category: "Napitci" },
  { name: "Kava sa šlagom", price: 10, category: "Napitci" },
  { name: "Kava sa šlagom za van", price: 10, category: "To-go" },
  { name: "Kava sa mlijekom za van", price: 10, category: "To-go" },
  { name: "Mala sa mlijekom za van", price: 10, category: "To-go" },
  { name: "Kava za van", price: 10, category: "To-go" },
  { name: "Cappuccino za van", price: 10, category: "To-go" },
  { name: "Šlag", price: 2, category: "Dodatci" },
  { name: "Mlijeko", price: 2, category: "Dodatci" },
  { name: "Med", price: 2, category: "Dodatci" },
  { name: "Koktel", price: 25, category: "Napitci" },
  { name: "Vruca cokolada", price: 12, category: "Napitci" },
  { name: "Čaj", price: 8, category: "Napitci" },
  { name: "Nescaffe", price: 10, category: "Napitci" },
  { name: "0.1 bijelo vino", price: 15, category: "Vino" },
  { name: "0.1 crno vino", price: 15, category: "Vino" },
  { name: "0.1 jamnica", price: 6, category: "Mineralne" },
  { name: "0.2 jamnica", price: 10, category: "Mineralne" },
  { name: "0.3 jamnica", price: 14, category: "Mineralne" },
  { name: "0.25 jamnica", price: 12, category: "Mineralne" },
  { name: "Karlovacko", price: 15, category: "Pivo" },
  { name: "Ozujsko", price: 15, category: "Pivo" },
  { name: "Paulaner", price: 20, category: "Pivo" },
  { name: "Osijecko", price: 15, category: "Pivo" },
  { name: "Vukovarsko", price: 15, category: "Pivo" },
  { name: "Niksicko", price: 15, category: "Pivo" },
  { name: "Heineken", price: 18, category: "Pivo" },
  { name: "Becks", price: 18, category: "Pivo" },
  { name: "Stella Artois", price: 18, category: "Pivo" },
  { name: "Pan", price: 15, category: "Pivo" },
  { name: "Pan zlatni", price: 16, category: "Pivo" },
  { name: "Budweiser", price: 18, category: "Pivo" },
  { name: "Stari lisac", price: 16, category: "Pivo" },
  { name: "Tomislav", price: 16, category: "Pivo" },
  { name: "Karlovacko crno", price: 16, category: "Pivo" },
  { name: "Pago", price: 16, category: "Sokovi" },
  { name: "Schwepps", price: 16, category: "Sokovi" },
  { name: "Cola", price: 16, category: "Sokovi" },
  { name: "Cockta", price: 16, category: "Sokovi" },
  { name: "Fanta", price: 16, category: "Sokovi" },
  { name: "Stock", price: 16, category: "Strana zestoka" },
  { name: "Jaegermeister", price: 16, category: "Strana zestoka" },
  { name: "Chivas Regal", price: 16, category: "Strana zestoka" },
  { name: "Jameson", price: 16, category: "Strana zestoka" },
  { name: "Konjak", price: 16, category: "Domaca zestoka" }, 
  { name: "Cedevita vrecica", price: 16, category: "Sokovi" }, 
  { name: "Šljivovica", price: 16, category: "Domaca zestoka" }, 
  { name: "Travarica", price: 16, category: "Domaca zestoka" }, 
  { name: "Viljamovka", price: 16, category: "Domaca zestoka" }, 
  { name: "Medica", price: 16, category: "Domaca zestoka" }, 
  { name: "Amaro", price: 16, category: "Domaca zestoka" }, 
  { name: "Pelinkovac", price: 16, category: "Domaca zestoka" }, 
  { name: "Antique", price: 16, category: "Domaca zestoka" }, 
  { name: "Lavov", price: 16, category: "Domaca zestoka" }, 
];

function Remaris({giveOrder}) {
  const [selectedCategory, setSelectedCategory] = useState("Sve");
  const [order, setOrder] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [filteredDrinks, setFilteredDrinks] = useState(drinks);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    if (selectedCategory === "Sve") {
        setFilteredDrinks(drinks);
    } else {
        setFilteredDrinks(drinks.filter(drink => drink.category === selectedCategory));
    }
  }, [selectedCategory])
  const addToOrder = (drink) => {
    setOrder(prevOrder => {
      const existingItem = prevOrder.find(item => item.name === drink.name);
      if (existingItem) {
        return prevOrder.map(item =>
          item.name === drink.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevOrder, { ...drink, quantity: 1, id: Date.now() }];
      }
    });
  };

  const removeSelectedOrder = () => {
    if (selectedOrderId !== null) {
      setOrder(prevOrder => prevOrder.filter(item => item.id !== selectedOrderId));
      setSelectedOrderId(null);
    }
  };

  const clearAllOrders = () => {
    setOrder([]);
    setSelectedOrderId(null);
  };

  const totalAmount = order.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const assignBill = () => {
    console.log(order)
    setIsModal(!isModal);

  }
  const setBill = (tableId) => {
    setIsModal(!isModal);
    giveOrder(tableId, order);
  }
  return (
    <div className="pos-system">
      <div className="category-buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`category-button ${selectedCategory === category.name ? 'selected' : ''}`}
            onClick={() => setSelectedCategory(category.name)}
            style={{ backgroundColor: category.color }}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="drink-buttons">
        {filteredDrinks.map((drink, index) => (
          <button
            key={index}
            className="drink-button"
            onClick={() => addToOrder(drink)}
          >
            {drink.name}<br />{drink.price} kn
          </button>
        ))}
      </div>

      <div className="current-order">
        <h2>Current Order</h2>
        <div className="order-list">
          {order.map((item) => (
            <div
              key={item.id}
              className={`order-item ${selectedOrderId === item.id ? 'selected' : ''}`}
              onClick={() => setSelectedOrderId(item.id)}
            >
              <span>{item.name} x{item.quantity}</span>
              <span>{item.price * item.quantity} kn</span>
            </div>
          ))}
        </div>
        <div className="order-summary">
          <div className="total-amount">
            Total: {totalAmount} kn
          </div>
          <div className="order-actions">
            <button onClick={removeSelectedOrder} className="action-button delete">Briši</button>
            <button onClick={clearAllOrders} className="action-button clear">Briši sve</button>
            <button onClick={assignBill} className="action-button cash">Gotovina</button>
          </div>
        </div>
      </div>
      {isModal ? <Modal onClose={() => setIsModal(!isModal)} onSelectTable={setBill} /> : ""}
    </div>
  );
}

export default Remaris;