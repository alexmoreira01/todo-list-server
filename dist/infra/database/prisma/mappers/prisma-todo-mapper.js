"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaTodoMapper = void 0;
var _todo = require("../../../../application/entities/todo");
class PrismaTodoMapper {
  static toPrisma(todo) {
    return {
      id: todo.id,
      label: todo.label,
      status: todo.status,
      created_at: todo.created_at,
      updated_at: todo.updated_at
    };
  }
  static toDomain(raw) {
    return new _todo.Todo({
      label: raw.label,
      status: raw.status,
      created_at: raw.created_at,
      updated_at: raw.updated_at
    }, raw.id);
  }
}
exports.PrismaTodoMapper = PrismaTodoMapper;