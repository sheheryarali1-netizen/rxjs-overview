import { AsyncSubject } from 'rxjs';

const subject = new AsyncSubject();

subject.subscribe((value) => {
  console.log(`Observer A: ${value}`);
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe((value) => {
  console.log(`Observer B: ${value}`);
});

subject.next(5);
subject.complete();
