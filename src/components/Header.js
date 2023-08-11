import {useLocation} from "react-router-dom"
import Button from './Button'

const Header = ({title, onAdd, showAdd }) => {
  const location = useLocation();

  return (

    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && <Button 
      name={showAdd ? "Close" : "Add"} 
      color={showAdd ? "red" : "green"} 
      onClick={onAdd}
      />}
    </header>
  )
}

Header.defaultProps =  {
  title: "Task Tracker",
}

// ____Protypes

// Header.propTypes = {
//   title: PropTypes.string.isRequired,
// }

// _____

// const headingStyle = {
//   color: "purple",
//   backgroundColor: "grey",
//   margin: "10px",
//   padding: "100px",
// }

export default Header