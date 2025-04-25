import { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';

const BoxPlotPlotly = ({
    chartData
}) => {
    const [adjData, setAdjData] = useState([]);

    useEffect(() => {
        const newData = chartData.map(obj => {
            return {
                ...obj,
                type: 'box',
                marker: {
                    color: 'rebeccapurple',
                    outliercolor: 'forestgreen',
                    line: {
                        outliercolor: 'blue',
                        outlierwidth: 2
                    }
                },
                boxpoints: 'Outliers'
            }
        });

        setAdjData(newData);
    }, [chartData]);

    return (
        <Plot
            data={adjData}
            layout={{
                width: 400,
                height: 400,
                title: {
                    text: 'Seasonal Peel Proportions'
                }
            }}
        />
    )
}

export default BoxPlotPlotly