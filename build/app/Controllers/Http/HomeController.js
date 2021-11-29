"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class HomeController {
    async index(ctx) {
        return await ctx.view.render('home');
    }
    async show(ctx) {
        const uid = await ctx.request.param('uid');
        if (!uid)
            return this.index(ctx);
        const user = await User_1.default.findBy('uid', uid);
        return await ctx.view.render('home', {
            user: user?.name,
            session: user?.session
        });
    }
}
exports.default = HomeController;
//# sourceMappingURL=HomeController.js.map