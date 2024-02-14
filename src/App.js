import { useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout'


function App() {
  const location = useLocation();

  return (
    <div className="App" style={location.pathname === '/checkout' ? {backgroundColor: '#e9e7e7'} : {backgroundColor: '#FFF'}}>
      <Layout/>
    </div>
  );
}

export default App;
