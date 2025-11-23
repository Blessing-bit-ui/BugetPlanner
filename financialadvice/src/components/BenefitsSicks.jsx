import {useEffect} from "react"
function BenefitsSicks({ onhandleCloseButtons }) {
  useEffect(function (){
    onhandleCloseButtons()
  }, []);
  return <div onClick={()=>onhandleCloseButtons()}>Benefits if sick</div>;
}

export default BenefitsSicks
