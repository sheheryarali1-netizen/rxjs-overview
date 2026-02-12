import { ReplaySubject } from 'rxjs';

const subject = new ReplaySubject(3);

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
