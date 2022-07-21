import logo from './logo.svg';
import './App.css';

const movies = [
  {
    name: "Avengers",
    available: 50,
  },
  {
    name: "Minions",
    available: 50,
  }
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movies</h1>        
      </header>

      {movies.map(movie => (
        <h3>{movie.name}</h3>
      ))}
    </div>
  );
}

export default App;
