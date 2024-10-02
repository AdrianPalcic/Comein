import { useState } from 'react'
import Table from "../Components/Table";
import Sank from "../Components/Sank";
import Nav from "../Components/Nav";
import Remaris from '../Components/Remaris';
import ShowTableBillModal from "../Components/ShowTableBillModal"


function Unutra({state, setState, addOrder, tableOrder, isModal, setIsModal, currentTableId, setCurrentTableId, removeOrder}) {

    const handleOrderAssignment = (tableid, order) => {
        addOrder(tableid, order)
    }

  return (
    <main>

      <Nav state={state} setState={setState} />
      {state ? <Remaris giveOrder={handleOrderAssignment} /> :
      <>
     <div className="tableRight">
     <Table id={1} order={tableOrder}  state={isModal} setState={setIsModal} setId={setCurrentTableId}  />
     <Table  id={2} order={tableOrder}  state={isModal} setState={setIsModal} setId={setCurrentTableId}/>
     <Table id={3} order={tableOrder}  state={isModal} setState={setIsModal} setId={setCurrentTableId} />
     <Table  id={4} order={tableOrder}  state={isModal} setState={setIsModal} setId={setCurrentTableId}/>

     <Table  id={5} order={tableOrder}  state={isModal} setState={setIsModal} setId={setCurrentTableId}/>
     <Table  id={6} order={tableOrder}  state={isModal} setState={setIsModal} setId={setCurrentTableId} />
     <Table  id={7} order={tableOrder}  state={isModal} setState={setIsModal} setId={setCurrentTableId}/>
     <Table  id={8} order={tableOrder}  state={isModal} setState={setIsModal} setId={setCurrentTableId}/>

     <Table id={9} order={tableOrder}  state={isModal} setState={setIsModal} setId={setCurrentTableId} />
     <Table id={10} order={tableOrder} state={isModal} setState={setIsModal} setId={setCurrentTableId} />
     <Table id={11} order={tableOrder} state={isModal} setState={setIsModal} setId={setCurrentTableId} />
     <Table id={12} order={tableOrder} state={isModal} setState={setIsModal} setId={setCurrentTableId} />
      </div>

      <div className="tableLeft">
     <Table id={13} order={tableOrder} state={isModal} setState={setIsModal} setId={setCurrentTableId} />
     <Table id={14} order={tableOrder} state={isModal} setState={setIsModal} setId={setCurrentTableId}  />
     <Table id={15} order={tableOrder} state={isModal} setState={setIsModal} setId={setCurrentTableId} />
     <Table id={16} order={tableOrder} state={isModal} setState={setIsModal} setId={setCurrentTableId} />

     <Table id={17} order={tableOrder} state={isModal} setState={setIsModal} setId={setCurrentTableId} />
     <Table id={18} order={tableOrder} state={isModal} setState={setIsModal} setId={setCurrentTableId} />
     <Table id={19} order={tableOrder} state={isModal} setState={setIsModal} setId={setCurrentTableId} />
     <Table id={20} order={tableOrder} state={isModal} setState={setIsModal} setId={setCurrentTableId} />

     <Table id={21} order={tableOrder} state={isModal} setState={setIsModal} setId={setCurrentTableId} />
     <Table id={22} order={tableOrder} state={isModal} setState={setIsModal} setId={setCurrentTableId} />
     <Table id={23} order={tableOrder} state={isModal} setState={setIsModal} setId={setCurrentTableId} />
     <Table id={24} order={tableOrder} state={isModal} setState={setIsModal} setId={setCurrentTableId} />
      </div>

      <Sank />
      {isModal ? 
        <ShowTableBillModal id={currentTableId} order={tableOrder} state={isModal} setState={setIsModal} removeOrder={removeOrder} /> : ""  
    }
      </>
    }
    </main>
  )
}

export default Unutra
