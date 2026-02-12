import { Observable } from 'rxjs';

console.log('==== Function calls ====');

function foo() {
  console.log('Hello World!');
  return 42;
}

const x = foo();
console.log(x);
const y = foo();
console.log(y);

console.log('==== Observable calls ====');

const observable = new Observable((subscribe) => {
  console.log('Hello World!');
  subscribe.next(42);
});

observable.subscribe((value) => {
  console.log(value);
});

observable.subscribe((value) => {
  console.log(value);
});
