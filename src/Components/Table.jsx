
    export default function Table({id}) {
        return ( 
            <div className="tableContainer" id={id}>
                <div className="table"></div>
                <div className="chair chair-left"></div>
                <div className="chair chair-right"></div>
            </div>
        )
    }