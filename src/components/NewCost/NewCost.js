import React, { useState } from 'react';
import CostForm from '../CostForm/CostForm';
import './NewCost.css';
const NewCost = (props) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    };
    props.onAddCost(costData);
    setFormVisible(false);
  };

  const inputCostDataHandler = () => {
    setFormVisible(true);
  };

  const cancelCostHAndler = () => {
    setFormVisible(false);
  };
  return (
    <div className='new-cost'>
      {!isFormVisible && (
        <button onClick={inputCostDataHandler}>Добавить Новый Расход</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelCostHAndler}
        />
      )}
    </div>
  );
};
export default NewCost;
