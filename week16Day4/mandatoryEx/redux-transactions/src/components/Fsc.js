import { connect } from "react-redux";
import { handleInputChangeFsc } from "../actions/transactionActions";

const Fsc = (props) => {
  return (
    <div>
      <input
        name="fsc"
        type="text"
        value={props.FSC}
        placeholder="FSC"
        onChange={props.handleInputChangeFsc}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    FSC: state.FSC,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputChangeFsc: (e) => dispatch(handleInputChangeFsc(e.target.value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Fsc);
