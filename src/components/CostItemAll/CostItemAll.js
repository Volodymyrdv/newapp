import CostsFilter from '../CostFilter/CostFilter';
import Card from '../Card/Card';
import React, { useState } from 'react';
import './CostItemAll.css';
import CostList from '../CostList/CostList';
import CostsDiagram from '../CostsDiagram/CostsDiagram';

const CostItemAll = ({ cost }) => {
  const [selectedYear, setSelectedYear] = useState('2021');
  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = cost.filter((item) => {
    return item.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className='costs'>
        <CostsFilter onChangeYear={yearChangeHandler} year={selectedYear} />
        <CostsDiagram costs={filteredCosts} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
};
export default CostItemAll;
