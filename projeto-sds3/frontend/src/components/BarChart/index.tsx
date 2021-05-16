import Chart from 'react-apexcharts';

function BarChart(){
    // criando gráficos com typescript com lib barchart
    const options ={
        plotOptions:{
            bar:{
                horizontal: true,
            }
        }
    };
    const mockData = {
        labels:{
            // estes dados precisam vir do banco de dados
            categories:['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padme']
        },
        series: [
            {
                name: "% Sucesso",
                data: [44.2, 67.1, 67.7, 45.6, 71.1]
            }
        ]
    };
    return(
        // o chart tem estes parametros abaixo
        <Chart 
            options={{...options, xaxis: mockData.labels}}
            series={mockData.series}
            type="bar"
            height="200"
        />
    );
}

export default BarChart;

/*
Outro modelo de function in <TypeScript>
const BarChart = () => {
    return (
        // comandos do TypeScript
    );
}
*/