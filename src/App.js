import './App.css';
import Form from './Form';

const movies = [
  {
    name: "Thor Love & Thunder",
    available: 10,
    quantity: 0,
    source: "../assets/ThorLT.png",
    length: "1h 59min",
    trailer: "https://youtu.be/Go8nTmfrQd8"
  },
  {
    name: "Minions",
    available: 5,
    quantity: 0,
    source: "../assets/MinionsTheRiseofGru.png",
    length: "1h 27min",
    trailer: 'https://youtu.be/6DxjJzmYsXo'
  },
  {
    name: "DC League of Super-Pets",
    available: 8,
    quantity: 0,
    source: "../assets/DCLeague.png",
    length: "1h 45min",
    trailer: 'https://youtu.be/1jkw2JPCl18'
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
