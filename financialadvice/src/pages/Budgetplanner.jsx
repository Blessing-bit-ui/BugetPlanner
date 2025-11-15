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
period : ""

}
function reducer(state, action){

  switch (action.type) {
    case "period":
      return{
        ...state,
        period:action.payload
      }
    case "pay":
      return {
        ...state,
        pay: state.period === "yearly" ? action.payload * 12 : state.period=== "daily" ? action.payload * 360 : action.payload
      }
    case "selfemployment":
      return {
        ...state,
        selfEmployment:
          state.period === "yearly"
            ? action.payload * 12
            : state.period === "daily"
            ? action.payload * 360
            : action.payload,
      };
      case "statutory":
        return {
          ...state,
          statutory:
            state.period === "yearly"
              ? action.payload * 12
              : state.period === "daily"
              ? action.payload * 360
              : action.payload,
        };
        case "shopping":
          return {
            ...state,
            shopping:
              state.period === "yearly"
                ? action.payload * 12
                : state.period === "daily"
                ? action.payload * 360
                : action.payload,
          };
          case "travel":
            return{
              ...state,
              travel: action.payload
            };
        case "children":
          return {
            ...state,
            children:
              state.period === "yearly"
                ? action.payload * 12
                : state.period === "daily"
                ? action.payload * 360
                : action.payload,
          };
          case "rent":
          return {
            ...state,
            rent:
              state.period === "yearly"
                ? action.payload * 12
                : state.period === "daily"
                ? action.payload * 360
                : action.payload,
          };
          case "mortgage":
          return {
            ...state,
            mortgage:
              state.period === "yearly"
                ? action.payload * 12
                : state.period === "daily"
                ? action.payload * 360
                : action.payload,
          };
          case "income":
            return{
              ...state,
              income:state.pay + state.selfEmployment + state.statutory
            };
            case "spending":
              return{
                ...state,
                spending : state.mortgage + state.rent + state.shopping + state.travel + state.children
              };
            default:{
              return state
            }
  }
}
function Budgetplanner() {
  const [{ pay, selfEmployment, statutory, shopping, children, travel, rent, mortgage, income, spending, period}, dispatch] = useReducer(
    reducer,
    initialState
  );
   const Balance = income - spending
  useEffect(
    function () {
      dispatch({ type: "income" });
      dispatch({type : "spending"});
    },
    [pay, selfEmployment, statutory, mortgage, rent, shopping, travel, children,]
  );

  useEffect(function(){
    dispatch({type: "pay", payload: pay})
    dispatch({type: "selfEmployment", payload: selfEmployment })
  },[period])

  return (
    <div className="w-[300px] ml-5 p-2 ">
      <h1 className="text-pink-500 font-bold text-xl underline mb-2">
        Budget Planner
      </h1>
      <form>
        <label className="font-bold"> PAY (after tax)</label>
        <input
          type="number"
          value={pay}
          onChange={(e) =>
            dispatch({ type: "pay", payload: Number(e.target.value) })
          }
          className="border-[2px]"
        />
        <select
          value={period}
          onChange={(e) =>
            dispatch({ type: "period", payload: e.target.value })
          }
        >
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
          <option value="daily">Daily</option>
        </select>
        <label>
          {" "}
          Income from Self Employment
          <input
            type="number"
            value={selfEmployment}
            onChange={(e) =>
              dispatch({
                type: "selfemployment",
                payload: Number(e.target.value),
              })
            }
            className="border-[1px]"
          />
        </label>
        <select
          value={period}
          onChange={(e) =>
            dispatch({ type: "period", payload: e.target.value })
          }
        >
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
          <option value="daily">Daily</option>
        </select>
        <label>
          Statutory Sick Pay
          <input
            type="number"
            value={statutory}
            onChange={(e) =>
              dispatch({ type: "statutory", payload: Number(e.target.value) })
            }
            className="border-[1px]"
          />
        </label>
        <select
          value={period}
          onChange={(e) =>
            dispatch({ type: "period", payload: e.target.value })
          }
        >
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
          <option value="daily">Daily</option>
        </select>
      </form>
      <form>
        <label>
          Mortgage repayment
          <input
            type="number"
            value={mortgage}
            onChange={(e) =>
              dispatch({ type: "mortgage", payload: Number(e.target.value) })
            }
            class="border-[1px]"
          />
        </label>
        <label>
          {" "}
          Rent
          <input
            type="number"
            value={rent}
            onChange={(e) =>
              dispatch({ type: "rent", payload: Number(e.target.value) })
            }
            className="border-[1px]"
          />
        </label>
        <label>
          {" "}
          Grocery Shopping
          <input
            type="number"
            value={shopping}
            onChange={(e) =>
              dispatch({ type: "shopping", payload: Number(e.target.value) })
            }
            className="border-[1px]"
          />
        </label>
        <label>
          Travel
          <input
            type="number"
            value={travel}
            onChange={(e) =>
              dispatch({ type: "travel", payload: Number(e.target.value) })
            }
            className="border-[1px]"
          />
        </label>
        <label>
          Children Expenses
          <input
            type="number"
            value={children}
            onChange={(e) =>
              dispatch({ type: "children", payload: Number(e.target.value) })
            }
            className="border-[1px]"
          />
        </label>
      </form>
      <div>
        <h1> Income {income}</h1>
        <h1> Spending {spending}</h1>
        <h1>
          {income > spending
            ? "Spare Cash"
            : spending > income
            ? " OverSpending"
            : "Balance"}{" "}
          {Balance}
        </h1>
      </div>
    </div>
  );}

export default Budgetplanner;
