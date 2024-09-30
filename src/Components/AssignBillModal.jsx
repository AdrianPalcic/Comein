
    export default function Modal ({onSelectTable, onClose}) {

        const tables = [
              1,
             2,
             3,
             4,
             5,
             6,
             7,
             8,
             9,
             10,
             12,
             13,
             14,
             15,
             16,
             17,
             18,
             19,
             20,
             21,
             22,
             23,
             24,
             25,
             26,
             27,
        ]

return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Select a Table</h2>
        <div className="table-buttons">
          {tables.map(tableId => (
            <button key={tableId} onClick={() => onSelectTable(tableId)}>
              Table {tableId}
            </button>
          ))}
        </div>
        <button onClick={onClose} className="cancel-button">Cancel</button>
      </div>
    </div>
  );
    }