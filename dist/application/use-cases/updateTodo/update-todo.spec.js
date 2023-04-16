"use strict";

var _inMemoryTodosRepository = require("../../../../test/repositories/in-memory-todos-repository");
var _appError = require("../../../infra/errors/app-error");
var _createTodo = require("../createTodo/create-todo");
var _updateTodo = require("./update-todo");
let createTodo;
let updateTodo;
let todosRepositoryInMemory;
describe("Update todo", () => {
  beforeEach(() => {
    todosRepositoryInMemory = new _inMemoryTodosRepository.TodosRepositoryInMemory();
    createTodo = new _createTodo.CreateTodo(todosRepositoryInMemory);
    updateTodo = new _updateTodo.UpdateTodo(todosRepositoryInMemory);
  });
  it('should be able to update a todo', async () => {
    const {
      todo
    } = await createTodo.execute({
      label: "label a todo"
    });
    await updateTodo.execute({
      todoId: todo.id,
      label: "label update",
      status: "completed"
    });
    expect(todosRepositoryInMemory.todos).toHaveLength(1);
    expect(todosRepositoryInMemory.todos[0].label).toEqual("label update");
    expect(todosRepositoryInMemory.todos[0].status).toEqual("completed");
  });
  it("should not be able to update a todo not exists", async () => {
    await expect(updateTodo.execute({
      todoId: "0b1492ce-865b-4477-92cd-b810e0597",
      label: "label update",
      status: "completed"
    })).rejects.toEqual(new _appError.AppError("Todo not exists!"));
  });
});