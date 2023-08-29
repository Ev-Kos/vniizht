import { useSelector } from '../../services/hooks';
import { Characteristic } from '../characteristic/characteristic';
import styles from './table-characteristics.module.css';
import { useForm } from 'react-hook-form';

export type TCharacteristics = {
  engineAmperage: number[];
  force: number[];
  speed: number[];
};

export const TableCharacteristics = () => {
  const train = useSelector((store) => store.characteristicReducer.train);
  const characteristics = train?.characteristics;
  const validation = useForm<TCharacteristics>({ mode: 'onBlur' });
  const errors = validation.formState.errors;
  const errorEngineAmperage = errors.engineAmperage;
  const errorForce = errors.force;
  const errorSpeed = errors.speed;

  const handleSubmit = (data: TCharacteristics) => {
    const speeds = data.speed.map((item) => item);
      console.log(speeds.sort((a, b) => a - b));
  };

  return (
    <>
    {train !== null && characteristics &&
      <section className={styles.container}>
        <form className={styles.form} onSubmit={validation.handleSubmit(handleSubmit)}>
          <table className={styles.table} >
            <caption className={styles.title}>Характеристики</caption>
            <thead>
              <tr className={styles.wrap}>
                <th className={styles.train}>{train.name}</th>
                {errorEngineAmperage && (
                  <th className={styles.error}>
                    Пожалуйста, введите целое положительное число
                  </th>
                )}
                {errorForce && (
                  <th className={styles.error}>
                    Пожалуйста, введите положительное число c плавающей запятой
                  </th>
                )}
                {errorSpeed && (
                  <th className={styles.error}>
                    Пожалуйста, введите целое положительное число
                  </th>
                )}
              </tr>
            </thead>
            <thead className={styles.subTitleWrap}>
              <tr>
                <th className={styles.subTitle}>Ток двигателя</th>
                <th className={styles.subTitle}>Сила тяги</th>
                <th className={styles.subTitle}>Скорость</th>
              </tr>
            </thead>
            <tbody>
              {characteristics.map((item, index) => {
                return (
                  <Characteristic
                    characteristics={item}
                    key={index}
                    name={index}
                    validation={validation}
                  />
                );
              })}
            </tbody>
          </table>
          <button
            className={Object.keys(errors).length === 0 ? styles.button : styles.buttonInactive}
            type="submit"
            disabled={Object.keys(errors).length === 0 ? false : true}>
            Отправить данные
          </button>
        </form>
      </section>}
    </>
  )
}