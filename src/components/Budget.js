import { useState } from "react";
import "./Budget.css";

const Budget = ({ getbudget, addToBudget, removeFormBudget, val }) => {
  /* if (val == true) {
    addToBudget();
  } else if (val == false) {
    removeFormBudget();
  }*/
  return (
    <div>
      <h2>Budget:{getbudget}$</h2>
    </div>
  );
};

export default Budget;
