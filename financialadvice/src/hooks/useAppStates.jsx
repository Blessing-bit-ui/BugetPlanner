import { useState } from "react";
export function useAppStates() {
  const [benefits, setBenefits] = useState(false);
  const [everydayMoney, setEverydayMoney] = useState(false);
  const [pensions, setPensions] = useState(false);
  const [homes, setHomes] = useState(false);
  const [work, setWork] = useState(false);
  const [savings, setSavings] = useState(false);

  function handleCloseButtons() {
    setBenefits(benefits === true && false);
    setEverydayMoney(everydayMoney === true && false);
    setPensions(pensions === true && false);
    setHomes(homes === true && false);
    setWork(work === true && false);
    setSavings(savings === true && false);
  }

   function handleBenefits() {
       setBenefits(benefits === false ? true : false);
       setEverydayMoney(false);
       setPensions(false);
       setHomes(false);
       setWork(false);
       setSavings(false);
     }
     function handleEveryDay() {
       setEverydayMoney(everydayMoney === false ? true : false);
       setBenefits(false);
       setPensions(false);
       setHomes(false);
       setWork(false);
       setSavings(false);
     }

     function handlePensions() {
       setPensions(pensions === false ? true : false);
       setEverydayMoney(false);
       setBenefits(false);
       setHomes(false);
       setWork(false);
       setSavings(false);
     }
     function handleHomes() {
       setHomes(homes === false ? true : false);
       setEverydayMoney(false);
       setPensions(false);
       setBenefits(false);
       setWork(false);
       setSavings(false);
     }

     function handleWork() {
       setWork(work === false ? true : false);
       setEverydayMoney(false);
       setPensions(false);
       setHomes(false);
       setBenefits(false);
       setSavings(false);
     }
     function handleSavings() {
       setSavings(savings === false ? true : false);
       setEverydayMoney(false);
       setPensions(false);
       setHomes(false);
       setWork(false);
       setBenefits(false);
     }
  
       return {
         benefits,
         setBenefits,
         everydayMoney,
         setEverydayMoney,
         pensions,
         setPensions,
         homes,
         setHomes,
         work,
         setWork,
         savings,
         setSavings,
         handleCloseButtons,
         handleBenefits,
         handleEveryDay,
         handlePensions,
         handleHomes,
         handleWork,
         handleSavings,
       };

}



