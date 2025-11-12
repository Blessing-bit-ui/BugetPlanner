import { NavLink } from "react-router-dom"
function PageNav(){
  return (
    <div>
      <ul className="flex gap-2">
        <li>
          <NavLink to="/" className="hover:underline text-pink-500 font-bold">
            Home
          </NavLink>
        </li>
        <span class="material-symbols-outlined text-pink-600 text-sm mt-auto mb-auto font-bolder ">arrow_forward_ios</span>
        <li>
          <NavLink
            to="/everyday"
            className="hover:underline text-pink-500 font-bold"
          >
            Everyday Money
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
export default PageNav
