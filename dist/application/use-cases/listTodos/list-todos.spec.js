"use strict";

var _inMemoryTodosRepository = require("../../../../test/repositories/in-memory-todos-repository");
var _createTodo = require("../createTodo/create-todo");
var _listTodos = require("./list-todos");
let createTodo;
let listTodos;
let todosRepositoryInMemory;
describe("List todos", () => {
  beforeEach(() => {
    todosRepositoryInMemory = new _inMemoryTodosRepository.TodosRepositoryInMemory();
    createTodo = new _createTodo.CreateTodo(todosRepositoryInMemory);
    listTodos = new _listTodos.ListTodos(todosRepositoryInMemory);
  });
  it('should be able to list all todos', async () => {
    await createTodo.execute({
      label: "label a todoOne"
    });
    await createTodo.execute({
      label: "label a todoTwo"
    });
    const todos = await listTodos.execute();
    expect(todos).toHaveLength(2);
    expect(todos[0].label).toEqual("label a todoOne");
    expect(todos[1].label).toEqual("label a todoTwo");
  });
});