import React, { useEffect, useState } from 'react'
import fs from 'fs';

export default function DataReadWrite() {
    const[jsonData,setJsonData] = useState(null);
    useEffect(()=>{
        const fetchData = async ()=>{
            try {
                
                const dataToWrite = {
                    key: 'value',
                    number: 42,
                    array: [1, 2, 3],
                  };
                  
                  const jsonData = JSON.stringify(dataToWrite, null, 2);
                  
                  fs.writeFile('./assets/data.json', jsonData);
                  const response = await fetch('./assets/data.json');
                // const data = await response.json();
                setJsonData(response);
                  
              } catch (error) {
                console.error('Error fetching JSON data:', error);
              }
            };
        
            fetchData();
        },[])
  return (
    <div>
      {jsonData ? (
        <pre>{JSON.stringify(jsonData, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  )
}
