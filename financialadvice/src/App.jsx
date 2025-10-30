
import './App.css'

function App() {
  return (
    <div>
      <Header/>
    </div>
  );
}

export default App

function Header(){
  return (
    <div>
      <h1 class="text-blue-600 font-bricolage text-4xl font-bold">MONEY <br/>PLANNER</h1>
    </div>
  );
}

function Benefits(){
  return (
    <div>
      <ul>
        <li>
          <a href="https://www.moneyhelper.org.uk/en/benefits/universal-credit">
            Universal Credit
          </a>
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
          <p> You may be entitled for help with other coasts on top of your State Pension</p>
        </li>
      </ul>
    </div>
  );
}

function EverdayMoney(){
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

function Pension(){
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

function Save(){
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