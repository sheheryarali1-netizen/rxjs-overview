import { BehaviorSubject } from 'rxjs';

const subject = new BehaviorSubject(0);

subject.subscribe((value) => {
  console.log(`Observer A: ${value}`);
});

subject.next(1);
subject.next(2);

subject.subscribe((value) => {
  console.log(`Observer B: ${value}`);
});

subject.next(3);
