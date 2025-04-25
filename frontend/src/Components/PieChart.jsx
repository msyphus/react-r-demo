import Plot from 'react-plotly.js';

const PieChart = ({
    chartData
}) => {
    return (
        <Plot
            data={chartData}
            layout={{
                width: 400,
                height: 400,
                title: {
                    text: 'Percentage of Total Banana Population'
                }
            }}
        />
    )
}

export default PieChart