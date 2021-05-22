import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";


function App() {
  return (
    <div>
      <>
        <NavBar />
        <div className="container">
          
          <h1 className="text-primary py-3"> DashBoard para monitoramento de vendas</h1>
          <div className="row px-3">
            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de Sucesso no fechamento das vendas (%)</h5>
              <BarChart />
            </div>

            <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de Sucesso no fechamento das vendas (%)</h5>
              <DonutChart />
            </div>
          </div>

          <div className="py-3">
            <h2 className="text-primary">Todas as Vendas</h2>
          </div>

          <DataTable />

        </div>

        <Footer />
      </>
    </div>
  );
}

export default App;
