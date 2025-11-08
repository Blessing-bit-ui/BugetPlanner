import { NavLink } from "react-router-dom"
function PageNav(){
  return(
    <div>
      <ul className="flex gap-2">
   <li><NavLink to="/">
       Home
    </NavLink>
    </li>
    <li>
    <NavLink to="/everyday">
      Everyday Money
    </NavLink>
    </li>
    </ul>
    </div>
  )
}
export default PageNav
