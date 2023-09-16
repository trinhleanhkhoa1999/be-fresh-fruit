"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionSerializer = void 0;
const passport_1 = require("@nestjs/passport");
class SessionSerializer extends passport_1.PassportSerializer {
    constructor() {
        super();
    }
    serializeUser(user, done) {
        console.log('serializeUser', user);
        done(null, user);
    }
    deserializeUser(payload, done) {
        console.log('deserializeUser', payload);
        done(null, payload);
    }
}
exports.SessionSerializer = SessionSerializer;
//# sourceMappingURL=session.serializer.js.map