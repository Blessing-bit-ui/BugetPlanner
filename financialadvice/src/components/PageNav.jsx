import { NavLink } from "react-router-dom"
function PageNav(){
  return(
    <div>
    <NavLink to="/">
       Home
    </NavLink>
    <NavLink to="/everyday">
      Everyday Money
    </NavLink>
    </div>
  )
}
export default PageNav
