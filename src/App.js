import logo from './logo.svg';
import './App.css';
import Form from './Form';

const movies = [
  {
    name: "Thor Love & Thunder",
    available: 50,
    quantity: 5
  },
  {
    name: "Minions",
    available: 50,
    quantity: 7
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies</h1>        
      </header>

      {movies.map((movie) => (
        <Form movie={movie} />
      ))}
    </div>
  );
}

export default App;
