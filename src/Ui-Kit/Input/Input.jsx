import "./Input.css"

const Input = ({ label, register, ...props }) => {
  return (
    <div className="Input">
      {label && <label className="Input__Label">{label}</label>}
      <input 
        className="Input__Field" 
        {...register } 
        {...props} 
      />
    </div>
  );
}

export default Input