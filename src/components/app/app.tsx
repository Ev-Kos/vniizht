import { DeleteCharacteristic } from "../../services/actions/characteristicsActions";
import { getAllTrains } from "../../services/actions/trainsActions";
import { useDispatch } from "../../services/hooks";
import { Modal } from "../modal/modal";
import { TableCharacteristics } from "../table-characteristics/table-characteristics";
import { TableTrains } from "../table-trains/table-trains";
import styles from './app.module.css';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';

export default function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const background = location.state?.background;

  useEffect(() => {
    dispatch(getAllTrains());
  }, [dispatch]);

  const closeModal = () => {
    dispatch(DeleteCharacteristic());
    navigate(background.pathname || '/', { replace: true });
  };

  return (
    <section className={styles.page}>
      <Routes location={background || location}>
        <Route path="/" element={<TableTrains />} />
        <Route path="/train/:id" element={<TableCharacteristics />} />
      </Routes>
      {background?.pathname === '/' && (
        <Routes>
          <Route
            path="/train/:id"
            element={
              <Modal closeModal={() => {closeModal()}}
                children={<TableCharacteristics />}
              />
            }
          />
        </Routes>
      )}
    </section>
  )
}