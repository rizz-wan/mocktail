import { history } from './history';

export const transitionTo = (path: string): void => {
  history.push(path);
};
