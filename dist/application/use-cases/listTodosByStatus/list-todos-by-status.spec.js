"use strict";

var _inMemoryTodosRepository = require("../../../../test/repositories/in-memory-todos-repository");
var _createTodo = require("../createTodo/create-todo");
var _updateTodo = require("../updateTodo/update-todo");
var _listTodosByStatus = require("./list-todos-by-status");
let createTodo;
let updateTodo;
let listTodosByStatus;
let todosRepositoryInMemory;
describe("List todos", () => {
  beforeEach(() => {
    todosRepositoryInMemory = new _inMemoryTodosRepository.TodosRepositoryInMemory();
    createTodo = new _createTodo.CreateTodo(todosRepositoryInMemory);
    updateTodo = new _updateTodo.UpdateTodo(todosRepositoryInMemory);
    listTodosByStatus = new _listTodosByStatus.ListTodosByStatus(todosRepositoryInMemory);
  });
  it('should be able to list all todos', async () => {
    const {
      todo
    } = await createTodo.execute({
      label: "label a todoOne"
    });
    await createTodo.execute({
      label: "label a todoTwo"
    });
    await updateTodo.execute({
      todoId: todo.id,
      label: "label update",
      status: "completed"
    });
    const todos = await listTodosByStatus.execute("completed");
    expect(todos).toHaveLength(1);
    expect(todos[0].label).toEqual("label update");
    expect(todos[0].status).toEqual("completed");
  });
});