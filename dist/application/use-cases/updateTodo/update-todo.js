"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateTodo = void 0;
var _tsyringe = require("tsyringe");
var _appError = require("../../../infra/errors/app-error");
var _todosRepositoryInterface = require("../../repositories/todos-repository-interface");
var _dec, _dec2, _dec3, _dec4, _class;
let UpdateTodo = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("TodosRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _todosRepositoryInterface.TodoRepository === "undefined" ? Object : _todosRepositoryInterface.TodoRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class UpdateTodo {
  constructor(todosRepository) {
    this.todosRepository = todosRepository;
  }
  async execute({
    todoId,
    label,
    status
  }) {
    const todoAlreadyExists = await this.todosRepository.findTodoById(todoId);
    if (!todoAlreadyExists) {
      throw new _appError.AppError("Todo not exists!");
    }
    let todoUpdate = todoAlreadyExists;
    todoUpdate.label = label;
    todoUpdate.status = status;
    todoUpdate.updatedAt();
    await this.todosRepository.updateTodo(todoUpdate);
    return {
      todo: todoUpdate
    };
  }
}) || _class) || _class) || _class) || _class);
exports.UpdateTodo = UpdateTodo;