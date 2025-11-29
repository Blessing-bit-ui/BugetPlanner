import {useEffect} from "react"
function BenefitsForChildren({onhandleCloseButtons}) {
 /*useEffect(function(){
    onhandleCloseButtons()
 }, [])*/
  return (
    <div onClick={onhandleCloseButtons}>
      <div className="bg-[url(https://media.istockphoto.com/id/956344832/vector/abstract-white-background-geometric-texture.jpg?s=612x612&w=0&k=20&c=z2EPil603uxXVXUtPst-BAhwhqN9ATG1Nzep_AIPY2Q=)] bg-repeat
      h-[100px]
      ">
        <h1 className="text-blue-600 font-bold text-[40px]">Benefits for children </h1>
      </div>
      <div className="flex mr-auto ml-auto">
        <span className="p-3">
          Having a baby is both exciting and costly but there are a number of
          benefits and entitlements available to give a boost to your family
          budget.
          <br />
          If you’re pregnant, you can get free prescriptions and NHS dental care
          with a Maternity Exemption Certificate.
          <br /> You can also claim more than £1,000 a year if you have one
          child, and an extra £800 for additional children if you earn less than
          £50,000. This section details your options if your family has low
          income or if you’re looking for financial support during or after your
          pregnancy.
        </span>
        <img src="https://www.shutterstock.com/image-photo/happy-young-black-dad-spoon-600nw-2003206955.jpg" />
      </div>
    </div>
  );
}
export default BenefitsForChildren
