import { useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout'


function App() {
  const location = useLocation();
  const body = document.body;
  // addind background color for checkout
  if(location.pathname === '/checkout'){
    body.style.backgroundColor = '#e9e7e7';
  }else{
    body.style.backgroundColor = '#FFF';
  }
  return (
    <div className="App">
      <Layout/>
    </div>
  );
}

export default App;
