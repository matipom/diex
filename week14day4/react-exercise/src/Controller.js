import Fname from "./Components/Fname";
import Lname from "./Components/Lname";
import Button from "./Components/Button";
import Results from "./Components/Results";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "5b32186a52msh662881a5bf2d032p1b065fjsn764996b6670a",
    "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
  },
};

fetch(
  "https://love-calculator.p.rapidapi.com/getPercentage?sname=Alice&fname=Asd",
  options
)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

const App = () => {
  return (
    <div>
      <p>
        <Fname />
      </p>
      <p>
        <Lname />
      </p>
      <p>
        <Button />
      </p>
      <p>
        <Results />
      </p>
    </div>
  );
};

export default Controller;
