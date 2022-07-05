const Fname = (props) => {
  return (
    <div>
      <input
        name="fname"
        type="text"
        placeholder="fname"
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Fname;
