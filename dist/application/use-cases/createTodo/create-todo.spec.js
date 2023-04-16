"use strict";

var _inMemoryTodosRepository = require("../../../../test/repositories/in-memory-todos-repository");
var _appError = require("../../../infra/errors/app-error");
var _createTodo = require("./create-todo");
let createTodo;
let todosRepositoryInMemory;
describe("Create todo", () => {
  beforeEach(() => {
    todosRepositoryInMemory = new _inMemoryTodosRepository.TodosRepositoryInMemory();
    createTodo = new _createTodo.CreateTodo(todosRepositoryInMemory);
  });
  it('should be able to create a new todo', async () => {
    const {
      todo
    } = await createTodo.execute({
      label: "label a todo"
    });
    expect(todo).toHaveProperty("id");
    expect(todosRepositoryInMemory.todos).toHaveLength(1);
  });
  it("should not be able to create a todo with title equals", async () => {
    await createTodo.execute({
      label: "labelTest"
    });
    await expect(createTodo.execute({
      label: "labelTest"
    })).rejects.toEqual(new _appError.AppError("Todo already exists!"));
  });
});