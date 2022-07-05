const Results = (props) => {
  if (!props.result.result) {
    return null;
  } else {
    return (
      <div>
        <h2>Result: </h2>
        <p>
          {props.result.fname} & {props.result.sname}
        </p>
        <p>
          Percentage:
          {props.result.percentage}
        </p>
        Result: {props.result.result}
      </div>
    );
  }
};

export default Results;
