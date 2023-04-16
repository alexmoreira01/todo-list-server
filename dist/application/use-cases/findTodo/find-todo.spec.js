"use strict";

var _inMemoryTodosRepository = require("../../../../test/repositories/in-memory-todos-repository");
var _appError = require("../../../infra/errors/app-error");
var _createTodo = require("../createTodo/create-todo");
var _findTodo = require("./find-todo");
let createTodo;
let findTodo;
let todosRepositoryInMemory;
describe("Find todo", () => {
  beforeEach(() => {
    todosRepositoryInMemory = new _inMemoryTodosRepository.TodosRepositoryInMemory();
    createTodo = new _createTodo.CreateTodo(todosRepositoryInMemory);
    findTodo = new _findTodo.FindTodo(todosRepositoryInMemory);
  });
  it('should be able to find todo by id', async () => {
    const {
      todo
    } = await createTodo.execute({
      label: "label a todo find"
    });
    const findTodoById = await findTodo.execute(todo.id);
    expect(findTodoById.id).toEqual(todo.id);
    expect(findTodoById.label).toEqual("label a todo find");
  });
  it("should not be able to find todo not existing", async () => {
    await expect(findTodo.execute("5ea08d52-abee-4881-9b23-9d3f266")).rejects.toEqual(new _appError.AppError("Todo not existing!"));
  });
});