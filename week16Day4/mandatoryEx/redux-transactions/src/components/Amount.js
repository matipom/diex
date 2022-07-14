import { connect } from "react-redux";
import { handleInputChangeAmount } from "../actions/transactionActions";

const Amount = (props) => {
  return (
    <div>
      <input
        name="amount"
        type="text"
        value={props.amount}
        placeholder="Amount"
        onChange={props.handleInputChangeAmount}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    amount: state.amount,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChangeAmount: (e) =>
      dispatch(handleInputChangeAmount(e.target.value)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Amount);
