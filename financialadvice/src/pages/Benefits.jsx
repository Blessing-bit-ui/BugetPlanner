import  {Link} from "react-router-dom"
import { Outlet } from "react-router-dom";
function Benefits() {
    return (
      <div>
        <Outlet />
        Benefits
        <Link to="universalbenefits"> Universal Credit</Link>
      </div>
    );
}

export default Benefits
