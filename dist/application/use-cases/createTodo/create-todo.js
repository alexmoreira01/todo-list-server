"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateTodo = void 0;
var _tsyringe = require("tsyringe");
var _appError = require("../../../infra/errors/app-error");
var _todo = require("../../entities/todo");
var _todosRepositoryInterface = require("../../repositories/todos-repository-interface");
var _dec, _dec2, _dec3, _dec4, _class;
let CreateTodo = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("TodosRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _todosRepositoryInterface.TodoRepository === "undefined" ? Object : _todosRepositoryInterface.TodoRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateTodo {
  constructor(todosRepository) {
    this.todosRepository = todosRepository;
  }
  async execute({
    label
  }) {
    const todoAlreadyExists = await this.todosRepository.findTodoByLabel(label);
    if (todoAlreadyExists) {
      throw new _appError.AppError("Todo already exists!");
    }
    const todo = new _todo.Todo({
      label: label,
      status: 'pending',
      updated_at: null
    });
    await this.todosRepository.createTodo(todo);
    return {
      todo
    };
  }
}) || _class) || _class) || _class) || _class);
exports.CreateTodo = CreateTodo;