import {useEffect} from "react"
function Benefitslater({ onhandleCloseButtons }) {
    /*useEffect(function(){
        onhandleCloseButtons()
    }, [])*/
  return <div onClick={onhandleCloseButtons}>Benefitslater</div>;
}

export default Benefitslater
