"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListTodoByStatusController = void 0;
var _tsyringe = require("tsyringe");
var _listTodosByStatus = require("../../../application/use-cases/listTodosByStatus/list-todos-by-status");
var _todoViewModel = require("../view-models/todo-view-model");
var _appError = require("../../errors/app-error");
class ListTodoByStatusController {
  async handle(request, response) {
    const validStatuses = ["pending", "completed"];
    const status = request.params.status;
    if (!validStatuses.includes(status)) {
      throw new _appError.AppError("Invalid status");
    }
    const listTodoByStatus = _tsyringe.container.resolve(_listTodosByStatus.ListTodosByStatus);
    const statusTodos = await listTodoByStatus.execute(status);
    return response.json(statusTodos.map(_todoViewModel.TodoViewModel.toHTTP));
  }
}
exports.ListTodoByStatusController = ListTodoByStatusController;