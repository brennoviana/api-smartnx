"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = require("express");
const userController_1 = require("../controller/userController");
const userRoutes = (0, express_1.Router)();
exports.userRoutes = userRoutes;
userRoutes.get('/', userController_1.userController.getUsers);
