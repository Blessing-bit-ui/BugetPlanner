import {  useReducer, useEffect, useState } from "react";

const initialState = {
pay:0,
selfEmployment:0,
statutory:0,
mortgage:0,
rent:0,
shopping:0,
travel:0,
children:0,
income:0,
spending:0,
balance:0,
payPeriod : "",
selfEmploymentPeriod:"",
statutoryPeriod:"",
mortgagePeriod:"",
rentPeriod:"",
shoppingPeriod:"",
travelPeriod:"",
childrenPeriod:"",


}
function reducer(state, action){

  switch (action.type) {
    case "period":
      return {
        ...state,
        payPeriod: action.payload,
      };
    case "selfEmploymentPeriod":
      return {
        ...state,
        selfEmploymentPeriod: action.payload,
      };
    case "statutoryPeriod":
      return {
        ...state,
        statutoryPeriod: action.payload,
      };
    case "mortgagePeriod":
      return {
        ...state,
        mortgagePeriod: action.payload,
      };
    case "rentPeriod":
      return {
        ...state,
        rentPeriod:action.payload,
      };
    case "shoppingPeriod":
      return {
        ...state,
        shoppingPeriod: action.payload,
      };
    case "travelPeriod":
      return {
        ...state,
        travelPeriod: action.payload,
      };
    case "childrenPeriod":
      return {
        ...state,
        childrenPeriod: action.payload,
      };
    case "pay":
      return {
        ...state,
        pay:
          state.payPeriod === "yearly"
            ? action.payload * 12
            : state.payPeriod === "daily"
            ? action.payload * 360
            : action.payload,
      };
    case "selfemployment":
      return {
        ...state,
        selfEmployment:
          state.selfEmploymentPeriod === "yearly"
            ? action.payload * 12
            : state.selfEmploymentPeriod === "daily"
            ? action.payload * 360
            : action.payload,
      };
    case "statutory":
      return {
        ...state,
        statutory:
          state.statutoryPeriod === "yearly"
            ? action.payload * 12
            : state.statutoryPeriod === "daily"
            ? action.payload * 360
            : action.payload,
      };
    case "shopping":
      return {
        ...state,
        shopping:
          state.shoppingPeriod === "yearly"
            ? action.payload * 12
            : state.shoppingPeriod === "daily"
            ? action.payload * 360
            : action.payload,
      };
    case "travel":
      return {
        ...state,
        travel:
          state.travelPeriod === "yearly"
            ? action.payload * 12
            : state.travelPeriod === "daily"
            ? action.payload * 360
            : action.payload,
      };
    case "children":
      return {
        ...state,
        children:
          state.childrenPeriod === "yearly"
            ? action.payload * 12
            : state.childrenPeriod === "daily"
            ? action.payload * 360
            : action.payload,
      };
    case "rent":
      return {
        ...state,
        rent:
          state.rentPeriod === "yearly"
            ? action.payload * 12
            : state.rentPeriod === "daily"
            ? action.payload * 360
            : action.payload,
      };
    case "mortgage":
      return {
        ...state,
        mortgage:
          state.mortgagePeriod === "yearly"
            ? action.payload * 12
            : state.mortgagePeriod === "daily"
            ? action.payload * 360
            : action.payload,
      };
    case "income":
      return {
        ...state,
        income: state.pay + state.selfEmployment + state.statutory,
      };
    case "spending":
      return {
        ...state,
        spending:
          state.mortgage +
          state.rent +
          state.shopping +
          state.travel +
          state.children,
      };
    default: {
      return state;
    }
  }
}
function Budgetplanner() {
  const [{ pay, selfEmployment,
     statutory, shopping,
      children, travel, 
      rent, mortgage, income, spending, payPeriod, selfEmploymentPeriod, statutoryPeriod, shoppingPeriod, travelPeriod, rentPeriod, childrenPeriod,mortgagePeriod }, dispatch] = useReducer(
    reducer,
    initialState
  );
   
  useEffect(function () {
       dispatch({type:"pay", payload: pay })
     },
     [payPeriod]
   )

   useEffect(function(){
    dispatch({type:"selfemployment", payload: selfEmployment })
   }, [selfEmploymentPeriod])

   useEffect(function(){
    dispatch({type:"statutory", payload: statutory })
   }, [statutoryPeriod])

useEffect(
  function () {
    dispatch({type:"shopping", payload: shopping })
  },
  [shoppingPeriod]
)
useEffect(function () {
    dispatch({type:"travel", payload: travel });
  },
  [travelPeriod]
)
useEffect(
  function () {
    dispatch({type:"children", payload: children });
  },
  [childrenPeriod]
)

useEffect(
  function () {
    dispatch({ type:"rent", payload: rent });
  },
  [rentPeriod]
)
useEffect(
  function () {
    dispatch({type:"mortgage", payload: mortgage });
  },
  [mortgagePeriod]
)

  useEffect(
    function () {
      dispatch({ type: "income" , payload :income});
      dispatch({type : "spending", payload: spending});
    },
    [pay, selfEmployment, statutory, mortgage, rent, shopping, travel, children]
  )

  const Balance = income-spending 

  return (
    <div className=" ml-5 p-2 border">
      <h1 className="text-pink-500 font-bold text-xl underline mb-2">
        Budget Planner
      </h1>
      <div className="flex">
      <form classname="">
        <h1 className="text-[40px] font-bold text-blue-700">Income</h1>
        <label className="font-bold"> PAY (after tax) </label> <br />
        <input
          type="number"
          value={pay}
          onChange={(e) =>
            dispatch({ type: "pay", payload: Number(e.target.value) })
          }
          className="border-[2px] border-blue-500 p-2
    rounded-lg hover:border-[4px] hover:border-red-400 "
        />
        <select
          value={payPeriod}
          className="border-[2px] border-blue-500 p-2 ml-2
    rounded-lg hover:border-[4px] hover:border-red-400 "
          onChange={(e) =>
            dispatch({ type: "period", payload: e.target.value })
          }
        >
          <option value="monthly"> Per month</option>
          <option value="yearly">Per year</option>
          <option value="daily">per day</option>
        </select>
        <br />
        <label className="font-bold"> Income from Self Employment</label>
        <br />
        <input
          type="number"
          value={selfEmployment}
          onChange={(e) =>
            dispatch({
              type: "selfemployment",
              payload: Number(e.target.value),
            })
          }
          className="border-[2px] border-blue-500 p-2
    rounded-lg hover:border-[4px] hover:border-red-400 "
        />
        <select
          value={selfEmploymentPeriod}
          className="border-[2px] border-blue-500 p-2
    rounded-lg hover:border-[4px] hover:border-red-400 ml-2"
          onChange={(e) =>
            dispatch({ type: "selfEmploymentPeriod", payload: e.target.value })
          }
        >
          <option value="monthly"> Per month</option>
          <option value="yearly"> Per year</option>
          <option value="daily"> Per day</option>
        </select>{" "}
        <br />
        <label className="font-bold">Statutory Sick Pay</label> <br />
        <input
          type="number"
          value={statutory}
          onChange={(e) =>
            dispatch({ type: "statutory", payload: Number(e.target.value) })
          }
          className="border-[2px] border-blue-500 p-2
    rounded-lg hover:border-[4px] hover:border-red-400 "
        />
        <select
          value={statutoryPeriod}
          className="border-[2px] border-blue-500 p-2
    rounded-lg hover:border-[4px] hover:border-red-400 ml-2"
          onChange={(e) =>
            dispatch({ type: "statutoryPeriod", payload: e.target.value })
          }
        >
          <option value="monthly">Per month</option>
          <option value="yearly">Per year</option>
          <option value="daily">Per Day</option>
        </select>
      </form>
      <form className="ml-5">
        <h1 className="text-[40px] font-bold text-blue-700">Expenditure</h1>
        <label className="font-bold">Mortgage repayment</label> <br />
        <input
          type="number"
          value={mortgage}
          className="border-[2px] border-blue-500 p-2
    rounded-lg hover:border-[4px] hover:border-red-400 "
          onChange={(e) =>
            dispatch({ type: "mortgage", payload: Number(e.target.value) })
          }
        />
        <select
          value={mortgagePeriod}
          className="border-[2px] border-blue-500 p-2
    rounded-lg hover:border-[4px] hover:border-red-400 ml-2"
          onChange={(e) =>
            dispatch({ type: "mortgagePeriod", payload: e.target.value })
          }
        >
          <option value="monthly">Per month</option>
          <option value="yearly">Per year</option>
          <option value="daily">Per Day</option>
        </select>
        <br />
        <label className="font-bold">Rent</label> <br />
        <input
          type="number"
          value={rent}
          className="border-[2px] border-blue-500 p-2
    rounded-lg hover:border-[4px] hover:border-red-400 "
          onChange={(e) =>
            dispatch({ type: "rent", payload: Number(e.target.value) })
          }
        />
        <select
          value={rentPeriod}
          className="border-[2px] border-blue-500 p-2
    rounded-lg hover:border-[4px] hover:border-red-400 ml-2"
          onChange={(e) =>
            dispatch({ type: "rentPeriod", payload: e.target.value })
          }
        >
          <option value="monthly">Per month</option>
          <option value="yearly">Per year</option>
          <option value="daily">Per Day</option>
        </select>
        <br />
        <label className="font-bold"> Grocery Shopping </label>
        <br />
        <input
          type="number"
          value={shopping}
          className="border-[2px] border-blue-500 p-2
    rounded-lg hover:border-[4px] hover:border-red-400 "
          onChange={(e) =>
            dispatch({ type: "shopping", payload: Number(e.target.value) })
          }
        />
        <select
          value={shoppingPeriod}
          className="border-[2px] border-blue-500 p-2
    rounded-lg hover:border-[4px] hover:border-red-400 ml-2"
          onChange={(e) =>
            dispatch({ type: "shoppingPeriod", payload: e.target.value })
          }
        >
          <option value="monthly">Per month</option>
          <option value="yearly">Per year</option>
          <option value="daily">Per Day</option>
        </select>{" "}
        <br />
        <label className="font-bold">Travel</label>
        <br />
        <input
          type="number"
          value={travel}
          className="border-[2px] border-blue-500 p-2
    rounded-lg hover:border-[4px] hover:border-red-400"
          onChange={(e) =>
            dispatch({ type: "travel", payload: Number(e.target.value) })
          }
        />
        <select
          value={travelPeriod}
          className="border-[2px] border-blue-500 p-2
    rounded-lg hover:border-[4px] hover:border-red-400 ml-2"
          onChange={(e) =>
            dispatch({ type: "travelPeriod", payload: e.target.value })
          }
        >
          <option value="monthly">Per month</option>
          <option value="yearly">Per year</option>
          <option value="daily">Per Day</option>
        </select>{" "}
        <br />
        <label className="font-bold">Children Expenses</label>
        <br />
        <input
          type="number"
          value={children}
          className="border-[2px] border-blue-500 p-2
    rounded-lg hover:border-[4px] hover:border-red-400 "
          onChange={(e) =>
            dispatch({ type: "children", payload: Number(e.target.value) })
          }
        />
        <select
          value={childrenPeriod}
          className="border-[2px] border-blue-500 p-2
    rounded-lg hover:border-[4px] hover:border-red-400 ml-2"
          onChange={(e) =>
            dispatch({ type: "childrenPeriod", payload: e.target.value })
          }
        >
          <option value="monthly">Per month</option>
          <option value="yearly">Per year</option>
          <option value="daily">Per Day</option>
        </select>
      </form>
      
      <div>
        <h1> Income {income}</h1>
        <h1> Spending {spending}</h1>
        <h1>
          {income > spending
            ? "Spare Cash"
            : spending > income
            ? " OverSpending"
            : "Balance"}
          {Balance}
        </h1>
      </div>
      </div>
    </div>
  );}

export default Budgetplanner;
