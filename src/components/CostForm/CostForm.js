import React, { useState } from 'react';
import './CostForm.css';
const CostForm = (props) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const costData = {
      description: name,
      amount,
      date: new Date(date)
    };
    props.onSaveCostData(costData);
    setName('');
    setAmount('');
    setDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-cost__controls'>
        <div className='new-cost__control'>
          <label>Название</label>
          <input type='text' onChange={nameChangeHandler} value={name} />
        </div>
        <div className='new-cost__control'>
          <label>Сума</label>
          <input
            value={amount}
            onChange={amountChangeHandler}
            type='number'
            min='0.01'
            step='0.01'
          />
        </div>
        <div className='new-cost__control'>
          <label>Сума</label>
          <input
            value={date}
            onChange={dateChangeHandler}
            type='date'
            min='2019-01-01'
            step='2022-12-31'
          />
        </div>
        <div className='new-cost__actions'>
          <button type='submit'>Добавить Расход</button>
          <button type='button' onClick={props.onCancel}>
            Отмена
          </button>
        </div>
      </div>
    </form>
  );
};
export default CostForm;
