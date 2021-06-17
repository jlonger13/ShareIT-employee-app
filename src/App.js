import './App.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import { BrowserRouter } from 'react-router-dom';
import PropsRoute from './components/PropsRoute';
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import EmailSent from './components/EmailSent';


function App() {
  return (
    <BrowserRouter>
      <PropsRoute path='/login' exact component={Login}/>
      <PropsRoute path='/forgot' exact component={ForgotPassword}/>
      <PropsRoute path='/confirm' exact component={EmailSent}/>
    </BrowserRouter>
  );
}

export default App;
