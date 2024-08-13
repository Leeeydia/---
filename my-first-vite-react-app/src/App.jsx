// App.jsx
import React,{useState} from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);
  const addCountry = () => {

  }
  console.log(country, gold, silver, bronze)
  return (
    <div className="container">
      <h1>2024 파리 올림픽 메달 트래커</h1>
      <form className="input-group" onSubmit={addCountry}>
        <input 
        type="text"
      placeholder="국가 이름"
    value={country}
    onChange={(e) => setCountry(e.target.value)}
    />
    <input 
        type="number"
      placeholder="금메달"
    value={gold}
    onChange={(e) => setGold(e.target.value)}
    />
    <input 
        type="number"
      placeholder="은메달"
    value={silver}
    onChange={(e) => setSilver(e.target.value)}
    />
    <input 
        type="number"
      placeholder="동메달"
    value={bronze}
    onChange={(e) => setBronze(e.target.value)}
    />
    <button type="submit">추가</button>
      </form>
      <div>
      {countries.map((country) => (
    <div key={country.id}>
      <div>국가명: {country.name}</div>
      <div>금메달: {country.gold}</div>
      <div>은메달: {country.silver}</div>
      <div>동메달: {country.bronze}</div>
    </div>
  
  ))}
      </div>
    </div>
  );
}

export default App;