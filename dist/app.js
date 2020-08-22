"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes/routes"));
const cors_1 = __importDefault(require("cors"));
const app = express_1.default();
//settings
app.set('port', process.env.PORT);
//middelwares
app.use(morgan_1.default('dev'));
app.use(express_1.default.json());
app.use(cors_1.default());
//routes
app.use('/api', routes_1.default);
// this folder for this apllication will be used to store public files
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
