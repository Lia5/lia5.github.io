let example1: string = "Hello World!";
let example2: number = 42;
// Type 'number' is not assignable to type 'string'.
let example3: boolean = true;
// Type 'boolean' is not assignable to type 'string'.
let example4: Symbol = Symbol();
// Type 'symbol' is not assignable to type 'string'.
let example5: bigint = 123n;
// Type 'bigint' is not assignable to type 'string'.

const concatTwoStrings = (a:string, b:string) => {
// Parameter 'b' implicitly has an 'any' type.
// Parameter 'a' implicitly has an 'any' type.
  return [a, b].join(" ");
};

const add = (a: number, b: number):number => {
  return a + b;
// Operator '+' cannot be applied to types 'boolean' and 'boolean'.
};