import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Outlet } from "react-router-dom";
import {NavLink} from "react-router-dom"
import Home from "./pages/Home";
import Everyday from "./pages/Everyday";
import PageNav from "./pages/PageNav";
import Benefits from "./pages/Benefits"
import UniversalCredit from "./components/UniversalCredit";
import { useNavigate } from "react-router-dom";



function App() {
  const [benefits, setBenefits] = useState(false);
  const [everydayMoney, setEverydayMoney] = useState(false);
  const [pensions, setPensions] = useState(false);
  const [homes, setHomes] = useState(false);
  const [work, setWork] = useState(false);
  const [savings, setSavings] = useState(false); 

function handleCloseBenefit(){
setBenefits(benefits === true  && false)
}

  return (
    <div>
      <Header />
      <BrowserRouter>
        <Buttons benefits={benefits}
         setBenefits={setBenefits} everydayMoney={everydayMoney} 
         setEverydayMoney={setEverydayMoney} pensions={pensions} setPensions={setPensions} homes={homes} 
         setHomes={setHomes} work={work} setWork={setWork} savings={savings} setSavings={setSavings}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="everyday" element={<Everyday handleCloseBenefit={handleCloseBenefit} />} />
          <Route path="benefits" element={<Benefits />} />
          <Route
            path="benefits/universalbenefits"
            element={<UniversalCredit />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function Header() {
  return (
    <div>
      <h1 className="text-blue-600 font-bricolage text-4xl font-bold">
        MONEY <br />
        PLANNER
      </h1>
     
   
    </div>
  );
}

function Buttons({benefits, setBenefits, everydayMoney, setEverydayMoney, pensions, setPensions, homes, setHomes, savings, setSavings, work, setWork}) {
  
function handleBenefits(){
  setBenefits(benefits === false ? true : false)
  setEverydayMoney(false)
  setPensions(false)
  setHomes(false)
  setWork(false)
  setSavings(false)
}
function handleEveryDay(){
  setEverydayMoney(everydayMoney === false ? true : false)
  setBenefits(false)
  setPensions(false)
  setHomes(false)
  setWork(false)
  setSavings(false)
}

function handlePensions(){
  setPensions(pensions=== false ? true : false)
  setEverydayMoney(false)
  setBenefits(false)
  setHomes(false)
  setWork(false)
  setSavings(false)
}
function handleHomes(){
  setHomes(homes === false ? true : false)
  setEverydayMoney(false)
  setPensions(false)
  setBenefits(false)
  setWork(false)
  setSavings(false)
}

function handleWork(){
  setWork(work === false ? true : false)
  setEverydayMoney(false)
  setPensions(false)
  setHomes(false)
  setBenefits(false)
  setSavings(false)
}
function handleSavings(){
  setSavings(savings === false ? true : false)
  setEverydayMoney(false)
  setPensions(false)
  setHomes(false)
  setWork(false)
  setBenefits(false)
}

  return (
    <div className="relative">
      <div className="bg-blue-600 p-2 gap-4 flex justify shadow">
        <button
          onClick={handleBenefits}
          className="bg-tranparent border-none p-0 m-0 text-inherit cursor-pointer text-white hover:underline hover:bg-pink-500 rounded-sm p-2 font-bold "
        >
          Benefits
        </button>
        <button
          onClick={handleEveryDay}
          className="bg-transparent border-none p-0 m-0 text-inherit cursor-pointer text-white hover:underline focus:outline-none hover:bg-pink-500 rounded-sm p-2 font-bold"
        >
          Everyday money
        </button>
        <button
          onClick={handlePensions}
          className="bg-transparent border-none p-0 m-0 text-inherit text-white cursor-pointer hover:underline focus:outline-none hover:bg-pink-500 rounded-sm p-2 font-bold "
        >
          Pensions
        </button>
        <button
          onClick={handleHomes}
          className="bg-transparent border-none p-0 m-0 text-inherit cursor-pointer hover:underline focus:outline-none hover:bg-pink-500 rounded-sm p-2 font-bold text-white"
        >
          Homes
        </button>
        <button
          onClick={handleWork}
          className="bg-transparent border-none p-0 m-0 text-inherit cursor-pointer hover:underline focus:outline-none hover:bg-pink-500 rounded-sm p-2 font-bold text-white"
        >
          Work
        </button>
        <button
          onClick={handleSavings}
          className="bg-transparent border-none p-0 m-0 text-inherit cursor-pointer hover:underline focus:outline-none hover:bg-pink-500 rounded-sm p-2 font-bold text-white "
        >
          Savings
        </button>
      </div>

      {benefits && (
        <div className="absolute top-10 left-0  h-screen bg-white/95 z-50 transition-all duration-500 ease-in-out translate-y-0 opacity-100">
          <Benefit />
        </div>
      )}
      {everydayMoney && (
        <div className="absolute top-10 left-0  h-screen bg-white/95 z-50 transition-all duration-500 ease-in-out translate-y-0 opacity-100">
          <EverdayMoney />
        </div>
      )}
      {pensions && (
        <div className="absolute top-10 left-0  h-screen bg-white/95 z-50 transition-all duration-500 ease-in-out translate-y-0 opacity-100">
          <Pensions />{" "}
        </div>
      )}
      {homes && (
        <div className="absolute top-10 left-0  h-screen bg-white/95 z-50 transition-all duration-500 ease-in-out translate-y-0 opacity-100">
          <Homes />{" "}
        </div>
      )}
      {work && (
        <div className="absolute top-10 left-0  h-screen bg-white/95 z-50 transition-all duration-500 ease-in-out translate-y-0 opacity-100">
          <Work />{" "}
        </div>
      )}
      {savings && (
        <div className="absolute top-10 left-0  h-screen bg-white/95 z-50 transition-all duration-500 ease-in-out translate-y-0 opacity-100">
          <Savings />{" "}
        </div>
      )}
    </div>
  );
}

function Benefit() {
  const navigate= useNavigate()
  return (
    <div onClick={()=>navigate(-1)}>
      
      <ul>
        <li>
          <span>
            <NavLink
              to="/benefits/universalbenefits"
              className="text-pink-500 font-bold hover:underline"
            >
              {" "}
              Universal Credit
            </NavLink>
          </span>
          <p>
            Find Out how Universal Credit works and how to manage your payment
          </p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/benefits/benefits-if-you-have-children">
            Benefits if you have children
          </a>
          <p>
            Entitlement to help with the cost of Pregnancy or bring up children
          </p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/benefits/benefits-if-youre-sick-disabled-or-a-carer">
            {" "}
            Benefits if you're sick, disabled or a carer
          </a>
          <p>Understand what support to available for coping with itt health</p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/benefits/benefits-in-later-life">
            Benefits in Later Life
          </a>
          <p>
            {" "}
            You may be entitled for help with other coasts on top of your State
            Pension
          </p>
        </li>
      </ul>
    </div>
  );
}

function EverdayMoney() {
  return (
    <div>
      <ul>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/everyday-money/banking">
            Banking and Payments
          </a>
          <p>How to choose, use and manage bank accounts</p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/everyday-money/budgeting">
            Budgeting
          </a>
          <p>How to budget, find the best deals and switch to save money</p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/everyday-money/buying-and-running-a-car">
            Buying and running a car
          </a>
          <p>
            How to buy and finance a car, deal with problems with car finance
            and cut running
          </p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/everyday-money/credit">
            Credit
          </a>
          <p>
            Credit basics, applying for credit, credit rating and problems with
            credit
          </p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/everyday-money/insurance">
            Insurance
          </a>
          <p> Insurance for cars, health travel and help with Insurance</p>
        </li>
      </ul>
    </div>
  );
}

function Pensions() {
  return (
    <div>
      <ul>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/building-your-retirement-pot">
            Building your retirement pot
          </a>
          <p>
            How much do you need, ways to build your pot, transferring merging
          </p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/pensions-basics">
            Pension explained
          </a>
          <p>Starting a pension, types of pension, understanding pensions</p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/pension-problems">
            Pension problems
          </a>
          <p> Complaints, financial help when retired, changes to schemes</p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/state-pension">
            State Pension
          </a>
          <p>How it works, what you might get, National Insurance</p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/taking-your-pension">
            Taking your pension
          </a>
          <p>
            Ways to draw your pension, when can you retire, Pension Wise
            appointments
          </p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/pensions-and-retirement/tax-and-pensions">
            Tax and Pensions
          </a>
          <p>Tax allowances, tax paid on pensions, tax relief</p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/pensions-and-retirement">
            Pensions and retirement
          </a>
          <p>All guidance, including how to use the Pension Wise service</p>
        </li>
      </ul>
    </div>
  );
}

function Savings() {
  return (
    <div>
      <ul>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/savings/how-to-save">
            How to save
          </a>
          <p>Getting starting, getting the most out of savings problems</p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/savings/investing">
            Investing
          </a>
          <p>How to invest types of investing, buying and managing</p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/savings/types-of-savings">
            Types of savings
          </a>
          <p>
            Help with meeting goals, tax-friendly saving, saving for Children
          </p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/savings">Savings</a>
          <p>All savings guidance</p>
        </li>
      </ul>
    </div>
  );
}

function Work() {
  return (
    <div>
      <ul>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/work/employment">
            Employment
          </a>
          <p>Basic, benefits, tax and National Insurance</p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/work/losing-your-job">
            Losing your Job
          </a>
          <p>What to do, alternatives, redunctancy </p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/work/self-employment">
            Self-Employment
          </a>
          <p>Starting out, insurance, tax, self-assessment</p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/work">Work</a>
          <p>All work guidance</p>
        </li>
      </ul>
    </div>
  );
}
function Homes() {
  return (
    <div>
      <ul>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/homes/buying-a-home">
            Mortages and Homebuying
          </a>
          <p>
            Mortages, help buying, remortgaging, first-time buyers, help and
            support
          </p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/homes/renting">Renting</a>
          <p>Help rent a home and dealing with problems</p>
        </li>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/homes">Homes</a>
          <p>All Homes guidance</p>
        </li>
      </ul>
    </div>
  );
}


