"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Route_1 = __importDefault(global[Symbol.for('ioc.use')]("Adonis/Core/Route"));
Route_1.default.get('/', 'HomeController.index');
Route_1.default.get('/:uid', 'HomeController.show');
Route_1.default.get('/test', async ({ view }) => {
    return view.render('welcome');
});
//# sourceMappingURL=routes.js.map