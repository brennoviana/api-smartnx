"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequestSchema = validateRequestSchema;
function validateRequestSchema(schema) {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).send({ message: error.details[0].message });
        }
        next();
    };
}
