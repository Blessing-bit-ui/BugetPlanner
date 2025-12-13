import { useState } from "react";
import { useAppStates } from "./useAppStates";

export function useButtons() {

     const {
       benefits,
       setBenefits,
       everydayMoney,
       setEverydayMoney,
       pensions,
       setPensions,
       homes,
       setHomes,
       savings,
       setSavings,
       work,
       setWork,
      
     } = useAppStates();

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
    return {handleBenefits, handleEveryDay, handlePensions, handleHomes, handleWork, handleSavings}
}


