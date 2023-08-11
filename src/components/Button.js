import PropTypes from 'prop-types'

const Button = ({ name, color, onClick }) => {
   
  return (
    <button onClick = {onClick}
    style={{backgroundColor: color}} className="btn">
    {name}
    </button>
  )
}

Button.defaultProp = {
    color: "steelblue",
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button