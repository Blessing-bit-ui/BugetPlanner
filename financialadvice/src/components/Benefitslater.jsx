import {useEffect} from "react"
function Benefitslater({ onhandleCloseButtons }) {
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
        <h1 className="text-blue-600 font-bold text-[40px] ">Benefits later</h1>
      </div>
      <div className="flex mr-auto ml-auto">
        
          <summary className="p-5">
          Whether you have care needs or a disability, it’s important to know
          what disability benefits and entitlements you might qualify for and
          how to claim them. <br/> Looking after a family member who has a disability,
          illness, mental health condition, or drug or alcohol problem can be a
          huge commitment. Fortunately, there’s financial support and support
          services out there to help you. <br/>
          This section will help you find out
          what support is available and how to apply for certain benefits
          depending on your circumstance.
        </summary>

        <img
          src="https://www.careuk.com/getmedia/b875e3ab-4d80-4d42-b7f1-af066108657e/JB_ChandlerCourt-CareUK24042024-053.jpg"
          className="w-[500px]"
        />
      </div>
    </div>
  );
}

export default Benefitslater
