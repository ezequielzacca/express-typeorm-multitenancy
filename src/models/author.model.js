"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.AuthorSchema = new mongoose_1.default.Schema({
    name: String
});
exports.Author = mongoose_1.default.model("author", exports.AuthorSchema, "authors");
