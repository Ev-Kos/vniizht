import { TTrains } from "../services/types/data";

const baseUrl = 'https://gist.githubusercontent.com/orlov-oleg-developer/49f08290d1c59a6851e0a0581900e2a7/raw/e5daf87338f3c75165f8edf4c76cc7ec9c2b4aa9/gistfile1.json';

const checkResponse = <T> (res: Response): Promise<T> => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const getTrains = () => {
    return fetch(`${baseUrl}`)
    .then((res) => checkResponse<TTrains[]>(res))
}
