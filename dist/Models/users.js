"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../utils/database"));
const sequelize_1 = __importDefault(require("sequelize"));
const User = database_1.default.define('user', {
    id: {
        type: sequelize_1.default.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: sequelize_1.default.STRING,
        allowNull: false,
    }
});
exports.default = User;
