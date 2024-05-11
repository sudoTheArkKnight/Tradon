import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return (
    <div className='h-100'>
      <Header />
      <ToastContainer />
      <Container fluid className='h-100 px-0'>
        <Outlet />
      </Container>
    </div>
  );
};

export default App;