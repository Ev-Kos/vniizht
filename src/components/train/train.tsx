import { Link, useLocation } from 'react-router-dom';
import { AddCharacteristic } from '../../services/actions/characteristicsActions';
import { useDispatch } from '../../services/hooks';
import { TTrains } from '../../services/types/data';
import styles from './train.module.css';

type TProps = {
  train: TTrains;
  index: number;
};

export const Train = ({ train, index }: TProps) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleClick = () => {
    dispatch(AddCharacteristic(train));
  };
  return (
    <tr className={styles.row}>
      <td className={styles.sell}>
        <Link className={styles.link}
            onClick={() => handleClick()}
            to={{ pathname: `train/${index}` }}
            state={{ background: location }}>
            {train.name}
        </Link>
      </td>
      <td className={styles.sell}>
        <Link className={styles.link}
            onClick={() => handleClick()}
            to={{ pathname: `train/${index}` }}
            state={{ background: location }}>
            {train.description}
        </Link>
      </td>
    </tr>
  )
}