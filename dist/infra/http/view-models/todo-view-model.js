"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TodoViewModel = void 0;
class TodoViewModel {
  static toHTTP(todo) {
    return {
      id: todo.id,
      label: todo.label,
      status: todo.status,
      created_at: todo.created_at,
      updated_at: todo.updated_at
    };
  }
}
exports.TodoViewModel = TodoViewModel;