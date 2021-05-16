import DataTable from "components/DataTable";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <div>
      <>
        <NavBar />
        <div className="container">
          <h1 className="text-primary"> Ola Mundo - Projeto Java com React</h1>
          <DataTable />
        </div>
        
        <Footer />
      </>
    </div>
  );
}

export default App;
