"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const users_1 = __importDefault(require("../Models/users"));
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    try {
        const user = yield users_1.default.findOne({ where: { username: username } });
        if (user) {
            res.status(501).json({ message: 'User Exist' });
        }
        else {
            yield users_1.default.create({ username: username });
            res.status(200).json({ message: "user created" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "internal server error" });
    }
});
exports.addUser = addUser;
