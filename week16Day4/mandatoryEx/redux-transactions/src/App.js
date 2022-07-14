import "./App.css";
import AccountNumber from "./components/AccountNumber";
import Amount from "./components/Amount";
import Fsc from "./components/Fsc";
import Name from "./components/Name";
import Button from "./components/Button";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Financial Transactions:</h1>
        <AccountNumber />
        <br />
        <Fsc />
        <br />
        <Name />
        <br />
        <Amount />
        <br />
        <Button />
        <div>
          <Results />
        </div>
      </header>
    </div>
  );
}

export default App;
