import { connect } from "react-redux";
import { handleInputChangeAccountNumber } from "../actions/transactionActions";

const AccountNumber = (props) => {
  return (
    <div>
      <input
        name="accountnumber"
        type="text"
        value={props.accountNumber}
        placeholder="Account Number"
        onChange={props.handleInputChangeAccountNumber}
      />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    accountNumber: state.accountNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChangeAccountNumber: (e) =>
      dispatch(handleInputChangeAccountNumber(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountNumber);
