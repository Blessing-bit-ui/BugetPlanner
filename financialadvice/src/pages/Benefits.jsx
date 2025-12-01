import  {NavLink} from "react-router-dom"
import { Outlet } from "react-router-dom";
function Benefits() {
    return (
      <div>
        <div
          className="bg-[url(https://media.istockphoto.com/id/956344832/vector/abstract-white-background-geometric-texture.jpg?s=612x612&w=0&k=20&c=z2EPil603uxXVXUtPst-BAhwhqN9ATG1Nzep_AIPY2Q=)] bg-repeat
      h-[100px]
      "
        >
          <header className="text-blue-600 font-bold text-[40px]">
            Benefits
          </header>
        </div>
        <main>
          <p>
            Find out what benefits you’re entitled to, how to claim them, when
            you qualify, and what to do if things go wrong.{" "}
          </p>
          <div>
            <span>
              <img src="https://media.istockphoto.com/id/1365865879/photo/happy-face-at-the-beach.jpg?s=612x612&w=0&k=20&c=NOOEN-pgXsY2xYsGDUNV0xRdH11uxkIlk61oPodgvwY= " />
            </span>
            <p>
              Find out how Universal Credit works and how to manage your
              payment.
            </p>
            <NavLink to="/benefits/universalbenefits">
              {" "}
              Universal Credit
            </NavLink>
          </div>
        </main>
      </div>
    );
}

export default Benefits
