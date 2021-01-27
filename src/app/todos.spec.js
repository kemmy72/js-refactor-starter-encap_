'use strict';

import jsdom from 'jsdom';
import chai from 'chai';

import { todos } from './todos.js';

// build the DOM properties we will use in testing
const { document, Element } = new jsdom.JSDOM('').window;
// create a global variable named `document` that behaves just like in the browser
// you view function will not work without this
global.document = document;

// declare the `expect` variable for testing
const expect = chai.expect;

describe('app: todo manager inspired by Practical JavaScript', () => {
  describe('set entries: copies entries from an array into state', () => {
    it('does not store the same array', () => {
      const newEntries = [
        { text: 'hello', completed: true },
        { text: 'bye', completed: false },
      ];
      todos.entries = newEntries;
      expect(todos._state.entries).to.not.equal(newEntries);
    });
    it('does store the correct entries', () => {
      todos.entries = [
        { text: 'hello', completed: true },
        { text: 'bye', completed: false },
      ];
      expect(todos._state.entries).to.deep.equal([
        { text: 'hello', completed: true },
        { text: 'bye', completed: false },
      ]);
    });
  });

  describe("get entries: read the app's entries from state", () => {
    // set the initial state for this grouping of tests
    todos.entries = [
      { text: 'hello', completed: true },
      { text: 'bye', completed: false },
    ];

    it('returns a new array', () => {
      const gotEntries = todos.entries;
      expect(gotEntries).to.not.equal(todos._state.entries);
    });
    it('with the correct entries', () => {
      const gotEntries = todos.entries;
      expect(gotEntries).to.deep.equal([
        { text: 'hello', completed: true },
        { text: 'bye', completed: false },
      ]);
    });
  });

  describe('todos.toggleCompleted: given a todo index, change its status', () => {
    // set the initial state for this grouping of tests
    todos.entries = [
      { text: 'hello', completed: false },
      { text: 'bye', completed: false },
    ];

    it('changes the first todo', () => {
      todos.toggleCompleted(0);
      expect(todos.entries).to.deep.equal([
        { text: 'hello', completed: true },
        { text: 'bye', completed: false },
      ]);
    });
    it('changes the second todo', () => {
      todos.toggleCompleted(1);
      expect(todos.entries).to.deep.equal([
        { text: 'hello', completed: true },
        { text: 'bye', completed: true },
      ]);
    });
    it('changes the first todo again', () => {
      todos.toggleCompleted(0);
      expect(todos.entries).to.deep.equal([
        { text: 'hello', completed: false },
        { text: 'bye', completed: true },
      ]);
    });
    it('does nothing if the index is out of range', () => {
      todos.toggleCompleted(71);
      expect(todos.entries).to.deep.equal([
        { text: 'hello', completed: false },
        { text: 'bye', completed: true },
      ]);
    });
  });

  describe('renderTodos: renders all saved todos into a UL element', () => {
    it('would be a nice challenge to write a test for this!', () => {});
  });

  describe('... writing tests for the rest of the methods ...', () => {
    it('is', () => {});
    it('fun', () => {});
    it('!', () => {});
  });
});
