import { useState, useEffect } from 'react'
import DHT11Table from './DHT11Table.js'

function App() {
  
  const [sensorData, setSensorData] = useState([{}])

  useEffect(() => {
    fetch("/api").then(
      response => response.json()
    ).then(
      data => { setSensorData(data); }
    )
  }, [])

  const components = ((!Array.isArray(sensorData))
    ? <p>Loading...</p>
    : <div>
        <DHT11Table sensorData={sensorData} />
        {/* Import and include other custom React Components, using sensorData as above optionally */}
      </div>
  );

  return (
    <div>
      <h2>DHT11 Sensor Data</h2>
      {components}
    </div>
	);
}

export default App;