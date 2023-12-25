import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerPage from './components/customers/CustomerPage';
import CustomersPage from './components/customers/CustomersPage';
import CreateCustomerPage from './components/customers/CreateCustomerPage';
import EditCustomerPage from './components/customers/EditCustomerPage';

function App() {
  return (

    <Routes>
      <Route path='/customer' element={<CustomerPage />} >
        <Route index element={<CustomersPage />} />
        <Route path='add' element={<CreateCustomerPage />} />
        <Route path='edit/:customerId' element={<EditCustomerPage />} />
      </Route>
    </Routes>
  );
}

export default App;
