"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListTodosController = void 0;
var _tsyringe = require("tsyringe");
var _listTodos = require("../../../application/use-cases/listTodos/list-todos");
var _todoViewModel = require("../view-models/todo-view-model");
class ListTodosController {
  async handle(request, response) {
    const listTodos = _tsyringe.container.resolve(_listTodos.ListTodos);
    const todos = await listTodos.execute();
    return response.json(todos.map(_todoViewModel.TodoViewModel.toHTTP));
  }
}
exports.ListTodosController = ListTodosController;