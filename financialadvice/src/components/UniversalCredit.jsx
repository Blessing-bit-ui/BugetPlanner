import { Outlet } from "react-router-dom";
import { useEffect } from "react";
function UniversalCredit({onhandleCloseButtons }) {
/*useEffect(function(){
  onhandleCloseButtons()
}, [])*/
    return (
      <div onClick={onhandleCloseButtons}>
        <div
          className="bg-[url(https://media.istockphoto.com/id/956344832/vector/abstract-white-background-geometric-texture.jpg?s=612x612&w=0&k=20&c=z2EPil603uxXVXUtPst-BAhwhqN9ATG1Nzep_AIPY2Q=)] bg-repeat
      h-[100px]
      "
        >
          <h1 className="text-blue-600 font-bold text-[40px]">
            Universal Credit
          </h1>
        </div>
        <summary className="flex">
          <span className="p-4">
            <p>
              If you're on a low income, Universal Credit can give you extra
              money to help <br/> with the costs of living, including housing and
              bringing up children. Our Universal Credit guides and tools<br/> will
              help you find out:
            </p>
            <ul>
              <li> if you qualify for Universal Credit </li>
              <li> how much extra money you could get </li>
              <li> how to apply for Universal Credit </li>
              <li>how Universal Credit works</li>
              <li> what to do if you’ve received a Migration Notice </li>
              <li>how to manage your money and get financial support </li>
              <li>where to get free and confidential advice and help. </li>
            </ul>
          </span>
          <span>
            <img src="https://www.moneyhelper.org.uk/content/dam/maps/en/l2-images/man-and-two-young-children-sitting-on-floor-reading.jpg.pic.624.312.low.jpg" />
          </span>
        </summary>
      </div>
    );
}

export default UniversalCredit
