import Budgetplanner from "./Budgetplanner"
import { useAppStates } from "../hooks/useAppStates";

function Everyday() {
  const {handleCloseButtons} = useAppStates()
  function OpenUI () {
    handleCloseButtons();
  }
  return (
    <div onClick={OpenUI}>
      <div className="bg-[url(https://media.istockphoto.com/id/956344832/vector/abstract-white-background-geometric-texture.jpg?s=612x612&w=0&k=20&c=z2EPil603uxXVXUtPst-BAhwhqN9ATG1Nzep_AIPY2Q=)] bg-repeat h-[100px] flex items-center px-5">
        <h1 className="text-blue-600 font-bold text-[40px]">Everyday Money</h1>
      </div>
      <Budgetplanner />
    </div>
  );
}

export default Everyday
