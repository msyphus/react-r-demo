import { useState, useEffect } from 'react';
import './App.css';
import { getSeasonalData } from '../API/bananasAPIs';
import {
  getHistogram,
  getMax
} from '../API/RAPIs';

function App() {
  const [seasonData, setSeasonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const peels = await getSeasonalData();
      console.log(peels);
    }

    fetchData();
  }, []);

  const getHistAPI = async(e) => {
    try {
      const result = await getHistogram({arg: e.target.value});
      console.log(result);
    }catch(err) {
      console.log(err);
    }
  }

  const getMaxAPI = async(e) => {
    try {
      console.log(e.target.value);
      const result = await getMax({arg: e.target.value});
      console.log(result);
    }catch(err) {
      console.log(err);
    }
  }

  return (
    <>
      <div>
        Make a histogram
      </div>
      <input
        type='number'
        onMouseOut={e => getHistAPI(e)}
      />
      <div>
        What is the biggest number?
      </div>
      <input
        type='number'
        onMouseOut={e => getMaxAPI(e)}
      />
    </>
  )
}

export default App
