"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
exports.BookSchema = new mongoose_1.default.Schema({
    title: String,
    genreId: mongoose_1.default.Schema.Types.ObjectId,
    authorId: mongoose_1.default.Schema.Types.ObjectId
});
exports.Book = mongoose_1.default.model("book", exports.BookSchema, "books");
