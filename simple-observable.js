import { Observable } from 'rxjs';

const observable = new Observable((subscribe) => {
  subscribe.next(1);
  subscribe.next(2);
  subscribe.next(3);

  setTimeout(() => {
    subscribe.next(4);
    subscribe.complete();
  });
});

console.log('Before subscirption');

observable.subscribe({
  next(value) {
    console.log('Value:', value);
  },
  error(value) {
    console.log(value);
  },
  complete() {
    console.log('Stream completed');
  },
});

console.log('After subscirption');
