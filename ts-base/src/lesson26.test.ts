import { describe, it, expect } from 'vitest';

import {
  CanvasNode,
  CanvasNode1,
  CanvasNode2,
  CanvasNode3,
  CanvasNode4,
} from './lesson26.js';

describe('CanvasNode1 (без конструктора)', () => {
  it('Should store some basic properties', () => {
    const canvasNode = new CanvasNode1();

    expect(canvasNode.x).toEqual(0);
    expect(canvasNode.y).toEqual(0);

    // @ts-expect-error Property is readonly
    canvasNode.x = 10;

    // @ts-expect-error Property is readonly
    canvasNode.y = 20;
  });
});

describe('CanvasNode (з конструктором)', () => {
  it('Should store some basic properties', () => {
    const canvasNode = new CanvasNode();

    expect(canvasNode.x).toEqual(0);
    expect(canvasNode.y).toEqual(0);

    // @ts-expect-error Property is readonly
    canvasNode.x = 10;

    // @ts-expect-error Property is readonly
    canvasNode.y = 20;
  });
});

//task 2

describe('CanvasNode2 (move)', () => {
  it('Should be able to move to a new location', () => {
    const canvasNode = new CanvasNode2();

    expect(canvasNode.x).toEqual(0);
    expect(canvasNode.y).toEqual(0);

    canvasNode.move(10, 20);

    expect(canvasNode.x).toEqual(10);
    expect(canvasNode.y).toEqual(20);
  });
});

//task 3

describe('CanvasNode3 (getter position)', () => {
  it('Should be able to move', () => {
    const canvasNode = new CanvasNode3();

    expect(canvasNode.position).toEqual({ x: 0, y: 0 });

    canvasNode.move(10, 20);

    expect(canvasNode.position).toEqual({ x: 10, y: 20 });
  });

  it('Should be able to receive an initial position', () => {
    const canvasNode = new CanvasNode3({
      x: 10,
      y: 20,
    });

    expect(canvasNode.position).toEqual({ x: 10, y: 20 });
  });
});

//task 4

describe('CanvasNode4 (setter position)', () => {
  it('Should be able to set position via setter', () => {
    const canvasNode = new CanvasNode4();

    expect(canvasNode.position).toEqual({ x: 0, y: 0 });

    canvasNode.position = { x: 10, y: 20 };

    expect(canvasNode.position).toEqual({ x: 10, y: 20 });
  });

  it('Should be able to receive an initial position', () => {
    const canvasNode = new CanvasNode4({ x: 5, y: 6 });

    expect(canvasNode.position).toEqual({ x: 5, y: 6 });
  });

  it('Should still support move', () => {
    const canvasNode = new CanvasNode4();

    canvasNode.move(3, 4);

    expect(canvasNode.position).toEqual({ x: 3, y: 4 });
  });
});
