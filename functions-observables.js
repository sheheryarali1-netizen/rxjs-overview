import { Observable } from 'rxjs';

console.log('==== Function calls ====');

function foo() {
  console.log('Hello World!');
  return 42;
  return 100;
}

const x = foo();
console.log(x);
const y = foo();
console.log(y);

console.log('==== Observable calls ====');

const observable = new Observable((subscriber) => {
  console.log('Hello World!');
  subscriber.next(42);
  subscriber.next(100);

  setTimeout(() => {
    subscriber.next(300);
  }, 1000);
});

observable.subscribe((value) => {
  console.log(value);
});

observable.subscribe((value) => {
  console.log(value);
});
