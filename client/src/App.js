import { useState, useEffect } from 'react'

function App() {
  
  const [backendData, setBackendData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => { setBackendData(data); }
    )
  }, [])

  const createTableRow = (entry, key) => (
    <tr>
      { entry.map((elem) => <th>{elem}</th>) }
    </tr>
  )

  return (
    <div>
      {(typeof backendData === 'undefined') ? (
        <p>Loading...</p>
      ): (
        <table>
          { backendData.map(createTableRow) }
        </table>
        // backendData.users.map((user, i) => (
        //   <p key={i}>{user}</p>
        // ))
      )}
    </div>
	);
}

export default App;