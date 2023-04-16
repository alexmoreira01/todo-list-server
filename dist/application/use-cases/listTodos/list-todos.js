"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListTodos = void 0;
var _tsyringe = require("tsyringe");
var _todosRepositoryInterface = require("../../repositories/todos-repository-interface");
var _dec, _dec2, _dec3, _dec4, _class;
let ListTodos = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("TodosRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _todosRepositoryInterface.TodoRepository === "undefined" ? Object : _todosRepositoryInterface.TodoRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ListTodos {
  constructor(todosRepository) {
    this.todosRepository = todosRepository;
  }
  async execute() {
    const todos = await this.todosRepository.listTodos();
    return todos;
  }
}) || _class) || _class) || _class) || _class);
exports.ListTodos = ListTodos;