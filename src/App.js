import './App.css';
import GoogleMap from './components/GoogleMap';
import {Helmet} from "react-helmet";

function App() {
  return (
    <div className="App">
            <h1>UTD</h1>
      <h1>Google Maps App</h1>
      <GoogleMap />
      <Helmet>
      <script defer data-key="0a944a45-2192-4b71-adab-f9cd3e8782d6" src="https://widget.tochat.be/bundle.js"></script>
       </Helmet>
    </div>
  );
}

export default App;

