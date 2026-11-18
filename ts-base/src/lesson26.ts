export class CanvasNode1 {
  readonly x: number = 0;
  readonly y: number = 0;
}
const canvasNode1 = new CanvasNode1();

export class CanvasNode {
  readonly x: number;
  readonly y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }
}

const canvasNode = new CanvasNode();

// task 2
export class CanvasNode2 {
  x: number = 0;
  y: number = 0;
  move(x:number, y:number) {
    this.x = x;
    this.y = y;
  }
}

//task 3

export class CanvasNode3 {
  x: number;
  y: number;

  constructor(position?: { x: number; y: number }) {
    this.x = position?.x ?? 0;
    this.y = position?.y ?? 0;
  }

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
  
  get position() {
    return {x: this.x, y: this.y}
  }
}

//task 4
export class CanvasNode4 {
  #x: number;
  #y: number;

  constructor(position?: { x: number; y: number }) {
    this.#x = position?.x ?? 0;
    this.#y = position?.y ?? 0;
  }

  
  get position() {
    return {x: this.#x, y: this.#y}
  }
  
  set position(value: {x:number, y:number}) {
    this.#x = value.x,
    this.#y = value.y
  }

  move(x: number, y: number) {
    this.#x = x;
    this.#y = y;
  }
}