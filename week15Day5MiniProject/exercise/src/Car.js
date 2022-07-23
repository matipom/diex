const Car = (props) => {
  let { chosenCar } = props;
  return (
    <div>
      {chosenCar.map((item) => {
        return (
          <ul key={item.id}>
            <li>Brand: {item.brand}</li>
            <li>Name: {item.name}</li>
            <li>Year of creation : {item.year}</li>
            <li>Origin: {item.origin}</li>
          </ul>
        );
      })}
    </div>
  );
};

export default Car;
