import './DHT11Table.css'

function DHT11Table({ sensorData }) {

  const createTableRow = (cellRow, rowNumber) => (
    (Array.isArray(cellRow)) &&
    <tr key={rowNumber}>
      { cellRow.map((cell, colNumber) => <th key={colNumber}>{cell}</th>) }
    </tr>
  )

  return (
    <table>
      <tbody>
        { sensorData.map(createTableRow) }
      </tbody>
    </table>
  )
}

export default DHT11Table;