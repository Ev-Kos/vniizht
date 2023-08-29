import { useSelector } from '../../services/hooks';
import { Train }  from '../train/train';
import styles from './table-trains.module.css';
import { v4 as uuidv4 } from 'uuid';

export const TableTrains = () => {
  const trains = useSelector((store) => store.trainsReducer.trains);
  return (
    <section className={styles.container}>
      <table className={styles.table}>
        <caption className={styles.title}>Поезда</caption>
        <thead >
          <tr className={styles.subTitleWrap}>
            <th className={styles.subTitle}>Название</th>
            <th className={styles.subTitle}>Описание</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((item, index) => {
            return <Train key={uuidv4()} train={item} index={index} />;
          })}
        </tbody>
      </table>
    </section>
  )
}