import Chart from 'react-apexcharts';
import './boxPlot.css'

const BoxPlot = ({
    chartData
}) => {
    console.log(chartData);
    const chartProps = {
        series: [
            {
                type: 'boxPlot',
                data: chartData
            }
        ],
        options: {
            chart: {
                type: 'boxPlot'
            },
            title: {
                text: 'Banana Peel Proportions Per Season',
                align: 'center'
            },
            plotOptions: {
                boxPlot: {
                    colors: {
                        upper: 'blue',
                        lower: 'teal'
                    }
                }
            },
            yaxis: {
                min: 13,
                max: 20,
                stepSize: 1,
                title: {
                    text: 'Peel Proportion (%)'
                }
            }
        }
    }

    return (
        <div id='boxPlotWrapper'>
            <Chart
                options={chartProps.options}
                series={chartProps.series}
            />
        </div>
    )
}

export default BoxPlot