import { Children, useReducer } from "react";

const initialState = {
pay:0,
selfEmployment: 0,
statutory:0,
mortgage:0,
rent:0,
grocery:0,
travel:0,
children:0,
income:0,
spending:0,
balance:0

}
function reducer(){
  switch(action.type){
 case "pay":
  return(
4
  )
  }
}
function Budgetplanner() {
  const [{pay}, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="w-[300px]">
      <h1>Budget Planner</h1>
      <form>
        <label> PAY (after tax)
        <input type="number" value={pay} class="bg-pink-300" />
        </label>
        <label> Income from Self Employment
        <input type="number" />
        </label>
        <label>Statutory Sick Pay
        <input type="number" />
        </label>
      </form>
      <form>
        <label> Mortgage repayment
        <input type="number" class="bg-pink-300" />
        </label>
        <label> Rent
        <input type="number" />
        </label>
        <label> Grocery Shopping
        <input type="number" />
        </label>
        <label>
          Travel
          <input type="number"/>
        </label>
        <label>
          Children Expenses
          <input type="number"/>
        </label>
      </form>

      <h1> Income </h1>
      <h1> Spending</h1>
      <h1>Balance</h1>
    </div>
  );}

export default Budgetplanner;
