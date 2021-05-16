import Chart from 'react-apexcharts';

function DonutChart(){
    // criando gráficos com typescript com lib barchart
    const mockData = {
        series: [477588, 499932, 666569, 663656, 884548], 
        labels: ['Anakin', 'Barrys Allen', 'Kal-El', 'Logan', 'Padme']
    }

    const options = {
        legend: {
            show: true,
        }
    }
    return(
        // o chart tem estes parametros abaixo
        <Chart 
            options={{...options, labels: mockData.labels}}
            series={mockData.series}
            type="donut"
            height="200"
        />
    );
}

export default DonutChart;

/*
Outro modelo de function in <TypeScript>
const BarChart = () => {
    return (
        // comandos do TypeScript
    );
}
*/