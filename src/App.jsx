import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Unutra from './Pages/Unutra';
import TerasaDesno from './Pages/TerasaDesno';
import TerasaLijevo from './Pages/TerasaLijevo';

function App() {

    const [showRemaris, setShowRemaris] = useState(false);
    const [tableOrders, setTableOrders] = useState(
      []
    )
    const addOrderToTable = (tableId, order) => {
      setTableOrders((prevOrder) => {
        const existingOrderIndex = prevOrder.findIndex((order) => order.tableId === tableId);
        if (existingOrderIndex !== -1) { 
          const updatedOrder = [...prevOrder];
          updatedOrder[existingOrderIndex] = {tableId, order};
          return updatedOrder
        } else {
          return [...prevOrder, {tableId, order}];
        }
      })
    }
    useEffect(() => {
      console.log("Updated table orders: ", tableOrders);
    }, [tableOrders]);

    const removeOrderFromTable = (tableId) => {
      setTableOrders(tableOrders.filter((order) => order.tableId !== tableId));
    }



return (
  <Router>
    <Routes>
      <Route path="/"
        element={<Unutra 
        state={showRemaris}
        setState={setShowRemaris}
        addOrder={addOrderToTable}
          />} 
          />
      <Route path='/2' 
      element={<TerasaDesno 
        state={showRemaris}
       setState={setShowRemaris}
        />}
         />
      <Route path='/3'
       element={<TerasaLijevo
        state={showRemaris}
         setState={setShowRemaris}
         />}
          />
    </Routes>
  </Router>
)
}

export default App
