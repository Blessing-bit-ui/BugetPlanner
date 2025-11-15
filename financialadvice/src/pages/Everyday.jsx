import Budgetplanner from "./Budgetplanner"

function Everyday({ onhandleCloseButtons }) {
  function OpenUI () {
    onhandleCloseButtons();
  }
  return (
    <div onClick={OpenUI}>
      EverydayMoney
      <Budgetplanner />
    </div>
  );
}

export default Everyday
