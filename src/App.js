import SearchBar from './containers/SearchBar/SearchBar';
import WeatherList from './containers/SearchBar/WeatherList/WeatherList';

function App() {
  return (
    <div className="container"> 
      <SearchBar/>
      <WeatherList/>
    </div>
  );
}

export default App;
