import { connect } from "react-redux";
import { handleInputChangeName } from "../actions/transactionActions";

const Name = (props) => {
  return (
    <div>
      <input
        name="name"
        type="text"
        value={props.name}
        placeholder="A/C Holder Name"
        onChange={props.handleInputChangeName}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    name: state.name,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChangeName: (e) =>
      dispatch(handleInputChangeName(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Name);
