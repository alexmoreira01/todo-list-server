"use strict";

var _tsyringe = require("tsyringe");
var _prismaTodosRepository = require("../database/prisma/repositories/prisma-todos-repository");
_tsyringe.container.registerSingleton("TodosRepository", _prismaTodosRepository.PrismaTodosRepository);