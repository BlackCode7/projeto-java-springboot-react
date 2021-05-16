import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";


function App() {
  return (
    <div>
      <>
        <NavBar />
        <div className="container">
          <h1 className="text-primary py-3"> DashBoard para monitoramento</h1>

          <div className="row px-3"></div>

            // instância do barchart
            <div className="col-sm-6">
              <h5>Todas as vendas</h5>
              <BarChart />
            </div>
            // instância do barchart
            <div className="col-sm-12">
              <h5>Todas as vendas</h5>
              <BarChart />
            </div>

          <DataTable />
        </div>
        
        <Footer />
      </>
    </div>
  );
}

export default App;
