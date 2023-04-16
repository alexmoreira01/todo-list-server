"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaTodosRepository = void 0;
var _prismaTodoMapper = require("../mappers/prisma-todo-mapper");
var _prismaService = _interopRequireDefault(require("../prisma-service"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
class PrismaTodosRepository {
  constructor() {
    this.prisma = _prismaService.default;
  }
  async createTodo(todo) {
    const raw = _prismaTodoMapper.PrismaTodoMapper.toPrisma(todo);
    await this.prisma.todo.create({
      data: raw
    });
  }
  async listTodos() {
    const allTodos = await this.prisma.todo.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });
    return allTodos.map(todo => {
      return _prismaTodoMapper.PrismaTodoMapper.toDomain(todo);
    });
  }
  async findTodoById(todoId) {
    const todoExists = await this.prisma.todo.findUnique({
      where: {
        id: todoId
      }
    });
    if (!todoExists) {
      return null;
    }
    return _prismaTodoMapper.PrismaTodoMapper.toDomain(todoExists);
  }
  async findTodoByLabel(label) {
    const todo = await this.prisma.todo.findUnique({
      where: {
        label: label
      }
    });
    if (!todo) {
      return null;
    }
    return _prismaTodoMapper.PrismaTodoMapper.toDomain(todo);
  }
  async listTodosByStatus(status) {
    const allTodosStatus = await this.prisma.todo.findMany({
      where: {
        status: status
      },
      orderBy: {
        created_at: 'desc'
      }
    });
    return allTodosStatus.map(todo => {
      return _prismaTodoMapper.PrismaTodoMapper.toDomain(todo);
    });
  }
  async updateTodo(todo) {
    const raw = _prismaTodoMapper.PrismaTodoMapper.toPrisma(todo);
    await this.prisma.todo.update({
      where: {
        id: raw.id
      },
      data: raw
    });
  }
  async deleteTodoById(todoId) {
    await this.prisma.todo.delete({
      where: {
        id: todoId
      }
    });
  }
}
exports.PrismaTodosRepository = PrismaTodosRepository;