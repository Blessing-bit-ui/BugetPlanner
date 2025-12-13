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
  };
}
