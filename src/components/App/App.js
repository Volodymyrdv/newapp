import CostItemAll from '../CostItemAll/CostItemAll';
import NewCost from '../NewCost/NewCost';
import React, { useState } from 'react';

const INITIAL_COST = [
  {
    id: 'c1',
    date: new Date(2021, 2, 21),
    description: 'Холодильник',
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    description: 'MacBook',
    amount: 1254.99
  },
  {
    id: 'c3',
    date: new Date(2021, 4, 1),
    description: 'Джинсы',
    amount: 49.99
  }
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COST);

  const addCostHandler = (cost) => {
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <CostItemAll cost={costs} />
    </div>
  );
};

export default App;
