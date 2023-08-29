import { TCharacteristicsItem } from '../../services/types/data';
import { TCharacteristics } from '../table-characteristics/table-characteristics';
import styles from './characteristic.module.css';
import { UseFormReturn } from 'react-hook-form';

type TProps = {
  characteristics: TCharacteristicsItem;
  validation: UseFormReturn<TCharacteristics>;
  name: number;
};

export const Characteristic = ({characteristics, validation, name}: TProps) => {
  const engineAmperage = characteristics.engineAmperage;
  const force = characteristics.force;
  const speed = characteristics.speed;

  return (
    <tr>
      <td>
        <input
          className={`${
            validation.getFieldState(`engineAmperage.${name}`).invalid ? styles.error : styles.input
          }`}
          defaultValue={engineAmperage}
          type="number"
          {...validation.register(`engineAmperage.${name}`, {
            required: true,
            validate: {
              proof: (v) => v >= 0,
            },
          })}
        />
      </td>
      <td>
        <input
          className={`${
            validation.getFieldState(`force.${name}`).invalid ? styles.error : styles.input
          }`}
            defaultValue={force}
            type="number"
            {...validation.register(`force.${name}`, {
              validate: {
                proof: (v) => (v.toString().includes('.')) && v >= 0,
              },
              required: true,
            })}
            step={0.01}
          />
      </td>
      <td>
        <input
          className={`${
            validation.getFieldState(`speed.${name}`).invalid ? styles.error : styles.input
          }`}
            defaultValue={speed}
            type="number"
            {...validation.register(`speed.${name}`, {
              required: true,
              validate: {
                proof: (v) => v >= 0,
              },
            })}
          />
      </td>
    </tr>
  );
}