import NavBar from 'components/NavBar';
import Footer from 'components/Footer';
import DataTable from 'components/DataTable';

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary">DSVendas</h1>
        <DataTable />
      </div>
      <Footer />
    </>
  )
}
