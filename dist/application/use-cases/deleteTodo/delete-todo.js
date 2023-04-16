"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteTodo = void 0;
var _tsyringe = require("tsyringe");
var _appError = require("../../../infra/errors/app-error");
var _todosRepositoryInterface = require("../../repositories/todos-repository-interface");
var _dec, _dec2, _dec3, _dec4, _class;
let DeleteTodo = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("TodosRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _todosRepositoryInterface.TodoRepository === "undefined" ? Object : _todosRepositoryInterface.TodoRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteTodo {
  constructor(todosRepository) {
    this.todosRepository = todosRepository;
  }
  async execute(todoId) {
    const todoExists = await this.todosRepository.findTodoById(todoId);
    if (!todoExists) {
      throw new _appError.AppError("Todo not existing!");
    }
    await this.todosRepository.deleteTodoById(todoId);
  }
}) || _class) || _class) || _class) || _class);
exports.DeleteTodo = DeleteTodo;