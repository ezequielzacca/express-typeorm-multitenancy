"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var book_model_1 = require("./../models/book.model");
var author_model_1 = require("./../models/author.model");
var genre_model_1 = require("./../models/genre.model");
exports.loadFixture = function () { return __awaiter(_this, void 0, void 0, function () {
    var i, randomAuthorName, author, randomGenre, book;
    var _this = this;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, book_model_1.Book.deleteMany({})];
            case 1:
                _a.sent();
                return [4 /*yield*/, author_model_1.Author.deleteMany({})];
            case 2:
                _a.sent();
                return [4 /*yield*/, genre_model_1.Genre.deleteMany({})];
            case 3:
                _a.sent();
                return [4 /*yield*/, Promise.all(exports.genres.map(function (genre) { return __awaiter(_this, void 0, void 0, function () {
                        var created;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    created = Object.assign(new genre_model_1.Genre(), { name: genre });
                                    return [4 /*yield*/, created.save()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    }); }))];
            case 4:
                _a.sent();
                i = 1;
                _a.label = 5;
            case 5:
                if (!(i <= exports.bookNames.length)) return [3 /*break*/, 12];
                randomAuthorName = exports.authorNames[Math.floor(Math.random() * exports.authorNames.length)] + " " + exports.authorLastNames[Math.floor(Math.random() * exports.authorLastNames.length)];
                return [4 /*yield*/, author_model_1.Author.findOne({
                        name: randomAuthorName
                    })];
            case 6:
                author = _a.sent();
                if (!!author) return [3 /*break*/, 8];
                return [4 /*yield*/, Object.assign(new author_model_1.Author(), {
                        name: randomAuthorName
                    }).save()];
            case 7:
                author = _a.sent();
                _a.label = 8;
            case 8: return [4 /*yield*/, genre_model_1.Genre.findOne({
                    name: exports.genres[Math.floor(Math.random() * exports.genres.length)]
                })];
            case 9:
                randomGenre = _a.sent();
                book = Object.assign(new book_model_1.Book(), {
                    title: exports.bookNames[i - 1],
                    authorId: author.id,
                    genreId: randomGenre.id
                });
                return [4 /*yield*/, book.save()];
            case 10:
                _a.sent();
                _a.label = 11;
            case 11:
                i++;
                return [3 /*break*/, 5];
            case 12: return [2 /*return*/];
        }
    });
}); };
exports.authorNames = [
    "John",
    "Alexis",
    "Mark"
];
exports.authorLastNames = [
    "Johnson",
    "Stewart",
    "Harrison"
];
exports.bookNames = [
    "Woman Of The Stockades",
    "Rebel Of The North",
    "Spies Of The Eclipse",
    "Boys Of Eternity",
    "Hunters And Cats",
    "Lords And Owls",
    "Throne Of Perfection",
    "Failure Without Fear",
    "Fighting The Mountains",
    "Sailing Into The Sun",
    "Assassin Of The Sea",
    "Hawk Of Utopia",
    "Doctors Of Yesterday",
    "Rats Of Earth",
    "Heirs And Gangsters",
    "Descendants And Foreigners",
    "Dishonor Without Glory",
    "Completion Of Darkness",
    "Question The East",
    "Chasing The Ships",
    "Woman Of My Admiration",
    "Write About The Night",
    "Secret Admirers With Curly Hair",
    "Witch Of Outer Space",
    "Criminal Of Nature",
    "Giants In My City",
    "Pilots Of History",
    "Pilots And Wives",
    "Armies And Trees",
    "Nightmares Of The Mountain",
    "Oracle Of A Woman",
    "Corrupted By My Past",
    "Doubting My Home"
];
exports.genres = [
    "Fantasy",
    "Romance",
    "Drama",
    "Humor",
    "Adventure",
    "Sci-Fi"
];
