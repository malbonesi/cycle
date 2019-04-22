# cycle
Steps an array index forward or backward, looping around if necessary

#### Install:

```
npm install @malbonesi/cycle
```

#### Usage:

```js

//cycle(array, findIndex callback, step(default 1))

import cycle from '@malbonesi/cycle';

let array = [{a: 1}, {a: 2, selected: true}, {a: 3}]

cycle(array, el => el.selected) // 2
cycle(array, el => el.selected, -1) // 0

cycle(array, el => el.notfound) // 0
cycle(array, el => el.notfound, -1) // 2

cycle(array, el => el.selected, 2) // 0
cycle(array, el => el.selected, -2) // 2

```

