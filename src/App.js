import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container text-center">
      <Weather defaultCity="London"/>
      </div>
    </div>
  );
}

export default App;
