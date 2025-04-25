import { useState, useEffect } from 'react';
import './App.css';
import { getSeasonalData } from '../API/bananasAPIs';
import {
  getHistogram,
  getMax
} from '../API/RAPIs';
// import BoxPlot from './Components/BoxPlot';

function App() {
  const [seasonData, setSeasonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const peels = await getSeasonalData();
      setSeasonData(peels.data);
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log(seasonData);
  }, [seasonData]);

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
        onChange={e => getHistAPI(e)}
      />
      <div>
        What is the biggest number?
      </div>
      <input
        type='number'
        onChange={e => getMaxAPI(e)}
      />
      {/* <BoxPlot
        chartData={seasonData}
      /> */}
    </>
  )
}

export default App
