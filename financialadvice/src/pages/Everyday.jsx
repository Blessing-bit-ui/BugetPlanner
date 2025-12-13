import Budgetplanner from "./Budgetplanner"
import { useAppStates } from "../hooks/useAppStates";

function Everyday() {
  const {handleCloseButtons} = useAppStates()
  function OpenUI () {
    handleCloseButtons();
  }
  return (
    <div onClick={OpenUI}>
      EverydayMoney
      <Budgetplanner />
    </div>
  );
}

export default Everyday
