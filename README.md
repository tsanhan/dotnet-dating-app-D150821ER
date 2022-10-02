Using TypeScript:
so far we have used ts as js and used 'any' as type there we needed.

in brief:
ts gives us intellisense/autocomplete fir the types we have defined and used.

//1. will work on js, not ts
let a = 1;
// a = "s";

let b: string | number = 1;
b = "s";

const car1 = {
  color: 'red',
  model: 'bmw'
}

const car2 = {
  color: 'blue',
  model: 'kia',
  topSpeed: 100
}

interface Car {
  color: string | number;
  model: string;
  topSpeed?: number;
}

const car3: Car = {
  color: 'red',
  model: 'bmw'
}

const car4: Car = {
  color: 3,
  model: 'kia',
  topSpeed: 100
}


//2. function
const multiply: (x: number, y: number) => number = (x: number, y: number): number => x * y;

