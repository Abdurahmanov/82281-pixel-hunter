import GreetingView from './greeting-view';

export default () => {
  const greeting = new GreetingView();
  return greeting.element;
};
