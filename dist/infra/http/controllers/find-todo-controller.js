"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindTodoController = void 0;
var _tsyringe = require("tsyringe");
var _findTodo = require("../../../application/use-cases/findTodo/find-todo");
var _todoViewModel = require("../view-models/todo-view-model");
class FindTodoController {
  async handle(request, response) {
    const todoId = request.params.id;
    const findTodo = _tsyringe.container.resolve(_findTodo.FindTodo);
    const todo = await findTodo.execute(todoId);
    return response.json(_todoViewModel.TodoViewModel.toHTTP(todo));
  }
}
exports.FindTodoController = FindTodoController;