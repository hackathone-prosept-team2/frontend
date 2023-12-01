import "./Input.css"

const Input = ({ label, ...props }) => {
  return (
    <div className="Input">
      {label && <label className="Input__Label">{label}</label>}
      <input className="Input__Field" {...props} />
    </div>
  );
}

export default Input