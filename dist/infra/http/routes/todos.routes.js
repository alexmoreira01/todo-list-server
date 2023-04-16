"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.todosRoutes = void 0;
var _express = require("express");
var _createTodoController = require("../controllers/create-todo-controller");
var _listTodosController = require("../controllers/list-todos-controller");
var _findTodoController = require("../controllers/find-todo-controller");
var _deleteTodoController = require("../controllers/delete-todo-controller");
var _updateTodoController = require("../controllers/update-todo-controller");
var _listTodosByStatusController = require("../controllers/list-todos-by-status-controller");
const todosRoutes = (0, _express.Router)();
exports.todosRoutes = todosRoutes;
const createTodoController = new _createTodoController.CreateTodoController();
const listTodoController = new _listTodosController.ListTodosController();
const listTodoByStatusController = new _listTodosByStatusController.ListTodoByStatusController();
const findTodoController = new _findTodoController.FindTodoController();
const updateTodoController = new _updateTodoController.UpdateTodoController();
const deleteTodoController = new _deleteTodoController.DeleteTodoController();
todosRoutes.post('/', createTodoController.handle);
todosRoutes.get('/', listTodoController.handle);
todosRoutes.get('/:status', listTodoByStatusController.handle);
todosRoutes.get('/find/:id', findTodoController.handle);
todosRoutes.put('/:id', updateTodoController.handle);
todosRoutes.delete('/:id', deleteTodoController.handle);