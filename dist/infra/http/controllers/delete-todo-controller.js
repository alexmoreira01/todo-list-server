"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteTodoController = void 0;
var _tsyringe = require("tsyringe");
var _deleteTodo = require("../../../application/use-cases/deleteTodo/delete-todo");
class DeleteTodoController {
  async handle(request, response) {
    const todoId = request.params.id;
    const deleteTodo = _tsyringe.container.resolve(_deleteTodo.DeleteTodo);
    await deleteTodo.execute(todoId);
    return response.status(204).send();
  }
}
exports.DeleteTodoController = DeleteTodoController;