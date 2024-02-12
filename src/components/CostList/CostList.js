import CostItem from '../CostItem/CostItem';
import './CostList.css';
const CostList = ({ costs }) => {
  if (costs.length === 0) {
    return <h2 className='cost-list__fallback'>В Этом Году Расходов Нет</h2>;
  }
  return (
    <ul className='cost-list'>
      {costs.map((item) => (
        <CostItem
          date={item.date}
          description={item.description}
          amount={item.amount}
          key={item.id}
        />
      ))}
    </ul>
  );
};
export default CostList;
