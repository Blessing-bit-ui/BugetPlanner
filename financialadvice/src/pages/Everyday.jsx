import Budgetplanner from "./Budgetplanner"

function Everyday({ handleCloseBenefit }) {
    function closeBenefits(){
        handleCloseBenefit()
    }
  return (
    <div onClick={handleCloseBenefit}>
      EverydayMoney
      <Budgetplanner />
    </div>
  );
}

export default Everyday
