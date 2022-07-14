import { connect } from "react-redux";
import { deleteData, update } from "../actions/transactionActions";

const Result = (props) => {
  console.log(props.result);
  //   if (!props.result.result) {
  //     return null;
  //   } else {
  return (
    <div>
      {props.result.map((item, i) => {
        return (
          <p key={i}>
            {item.accountNumber}
            {item.name}
            {item.amount}
            <button onClick={() => props.bbbb(i)}>Edit</button>
            <button onClick={() => props.aaaa(i)}>Delete</button>
          </p>
        );
      })}
    </div>
  );
};
// };

const mapDispatchToProps = (dispatch) => {
  return {
    aaaa: (item) => dispatch(deleteData(item)),
    bbbb: (item) => dispatch(update(item)),
  };
};

const mapStateToProps = (state) => {
  return {
    result: state.result,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Result);
