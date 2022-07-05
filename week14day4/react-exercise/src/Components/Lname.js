const Lname = (props) => {
  return (
    <div>
      <input
        name="sname"
        type="text"
        placeholder="sname"
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Lname;
