import  {NavLink} from "react-router-dom"
import { Outlet } from "react-router-dom";
function Benefits() {
    return (
      <div>
        Benefits
        <div>
          <NavLink to="/benefits/universalbenefits"> Universal Credit</NavLink>
        </div>
      </div>
    );
}

export default Benefits
