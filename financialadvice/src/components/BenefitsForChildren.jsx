import {useEffect} from "react"
function BenefitsForChildren({onhandleCloseButtons}) {
 /*useEffect(function(){
    onhandleCloseButtons()
 }, [])*/
  return <div onClick={onhandleCloseButtons}>Benfits for children</div>;
}
export default BenefitsForChildren
