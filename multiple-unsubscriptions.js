import { Observable } from 'rxjs';

const observable = new Observable((subscriber) => {
  const intervalId = setInterval(() => {
    subscriber.next(1);
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
});

const observable1 = new Observable((subscriber) => {
  const intervalId = setInterval(() => {
    subscriber.next(2);
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
});

const subscirption = observable.subscribe((value) => {
  console.log(value);
});
const subscirption1 = observable1.subscribe((value) => {
  console.log(value);
});

subscirption.add(subscirption1);

setTimeout(() => {
  subscirption.unsubscribe();
}, 10000);
