"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateTodoController = void 0;
var _tsyringe = require("tsyringe");
var _updateTodo = require("../../../application/use-cases/updateTodo/update-todo");
var _todoViewModel = require("../view-models/todo-view-model");
class UpdateTodoController {
  async handle(request, response) {
    const todoId = request.params.id;
    const {
      label,
      status
    } = request.body;
    const updateTodo = _tsyringe.container.resolve(_updateTodo.UpdateTodo);
    const {
      todo
    } = await updateTodo.execute({
      todoId,
      label,
      status
    });
    return response.status(200).json(_todoViewModel.TodoViewModel.toHTTP(todo));
  }
}
exports.UpdateTodoController = UpdateTodoController;