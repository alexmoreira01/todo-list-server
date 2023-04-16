"use strict";

var _inMemoryTodosRepository = require("../../../../test/repositories/in-memory-todos-repository");
var _appError = require("../../../infra/errors/app-error");
var _createTodo = require("../createTodo/create-todo");
var _deleteTodo = require("./delete-todo");
let createTodo;
let deleteTodo;
let todosRepositoryInMemory;
describe("Delete todo", () => {
  beforeEach(() => {
    todosRepositoryInMemory = new _inMemoryTodosRepository.TodosRepositoryInMemory();
    createTodo = new _createTodo.CreateTodo(todosRepositoryInMemory);
    deleteTodo = new _deleteTodo.DeleteTodo(todosRepositoryInMemory);
  });
  it('should be able to delete a todo by id', async () => {
    const {
      todo
    } = await createTodo.execute({
      label: "label a todo delete"
    });
    await deleteTodo.execute(todo.id);
    expect(todosRepositoryInMemory.todos).toHaveLength(0);
  });
  it("should not be able to delete todo not existing", async () => {
    await expect(deleteTodo.execute("5ea08d52-abee-4881-9b23-9d3f266")).rejects.toEqual(new _appError.AppError("Todo not existing!"));
  });
});