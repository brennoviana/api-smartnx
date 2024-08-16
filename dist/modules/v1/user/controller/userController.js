"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
class UserController {
    async getUsers(req, res) {
        try {
            res.status(200).send("teste");
        }
        catch (error) {
            console.error(error);
            res.status(500).send({ message: 'Internal server error.' });
        }
    }
    ;
}
const userController = new UserController();
exports.userController = userController;
