import "./Button.css"

const Button = ({ name, icon, ...props }) => {
  return (
    <>
      <div className="container">
        <div className="links">
          <button className="btn" {...props}>{name}</button>
        </div>
      </div>
    </>
  )
}

export default Button
