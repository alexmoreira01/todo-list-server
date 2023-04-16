"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTodoController = void 0;
var _tsyringe = require("tsyringe");
var _createTodo = require("../../../application/use-cases/createTodo/create-todo");
var _todoViewModel = require("../view-models/todo-view-model");
class CreateTodoController {
  async handle(request, response) {
    const {
      label
    } = request.body;
    const createTodo = _tsyringe.container.resolve(_createTodo.CreateTodo);
    const {
      todo
    } = await createTodo.execute({
      label
    });
    return response.status(201).json(_todoViewModel.TodoViewModel.toHTTP(todo));
  }
}
exports.CreateTodoController = CreateTodoController;