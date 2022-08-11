import React from 'react';
import { Title } from './Title';
import {Theme} from './Theme';
import Form from './Form';

const movies = [
  {
    name: "Thor Love & Thunder",
    available: 10,
    quantity: 0,
    source: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/846a9086-8a40-43e0-aa10-2fc7d6d73730/deaml8h-951ead38-2ff8-4206-9cb5-3744b808bf21.png/v1/fill/w_1239,h_645,strp/thor_love_and_thunder_logo_png__by_mintmovi3_deaml8h-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjY3IiwicGF0aCI6IlwvZlwvODQ2YTkwODYtOGE0MC00M2UwLWFhMTAtMmZjN2Q2ZDczNzMwXC9kZWFtbDhoLTk1MWVhZDM4LTJmZjgtNDIwNi05Y2I1LTM3NDRiODA4YmYyMS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.7DBam_C7z2gWAgOK_NaXnsim30zdxNz1WhOGiwzWDpg",
    length: "1h 59min",
    trailer: "https://youtu.be/Go8nTmfrQd8",
    id: "thor"
  },
  {
    name: "Minions",
    available: 5,
    quantity: 0,
    source: "https://www.seekpng.com/png/detail/18-185606_happy-minions-png-image-with-transparent-background-poster.png",
    length: "1h 27min",
    trailer: 'https://youtu.be/6DxjJzmYsXo',
    id: "minions"
  },
  {
    name: "DC League of Super-Pets",
    available: 8,
    quantity: 0,
    source: "https://outrightgames.com/wp-content/uploads/2021/10/DC-Superpets-logo-english-449x240.png",
    length: "1h 45min",
    trailer: 'https://youtu.be/1jkw2JPCl18',
    id: "superPets"
  }
];


function App() {
  const [theme, setTheme] = React.useState('default');
  return (
    <Theme theme={theme} className="App">
      <header className="App-header">
        <Title>Movies</Title>       
      </header>

      {movies.map((movie) => (
        <Form 
        movie = {movie}
        imgUrl = {movie.source}
        updateTheme={() => setTheme(movie.id)} 
        defaultTheme={() => setTheme('default')}/>
      ))}
    </Theme>
  );
}

export default App;
