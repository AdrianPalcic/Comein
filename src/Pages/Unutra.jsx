import { useState } from 'react'
import Table from "../Components/Table";
import Sank from "../Components/Sank";
import Nav from "../Components/Nav";
import Remaris from '../Components/Remaris';


function Unutra({state, setState, addOrder}) {

    const handleOrderAssignment = (tableid, order) => {
        addOrder(tableid, order)
    }

  return (
    <main>

      <Nav state={state} setState={setState} />
      {state ? <Remaris giveOrder={handleOrderAssignment} /> :
      <>
     <div className="tableRight">
     <Table id={1} />
     <Table  id={2}/>
     <Table id={3} />
     <Table  id={4}/>

     <Table  id={5}/>
     <Table id={6} />
     <Table  id={7}/>
     <Table  id={8}/>

     <Table id={9} />
     <Table id={10} />
     <Table id={11} />
     <Table id={12} />
      </div>

      <div className="tableLeft">
     <Table id={13} />
     <Table id={14} />
     <Table id={15} />
     <Table id={16} />

     <Table id={17} />
     <Table id={18} />
     <Table id={19} />
     <Table id={20} />

     <Table id={21} />
     <Table id={22} />
     <Table id={23} />
     <Table id={24} />
      </div>

      <Sank />
      </>
    }
    </main>
  )
}

export default Unutra
