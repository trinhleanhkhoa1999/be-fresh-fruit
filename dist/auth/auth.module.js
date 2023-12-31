"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const auth_service_1 = require("./auth.service");
const jwt_1 = require("@nestjs/jwt");
const strategy_1 = require("./strategy");
const passport_1 = require("@nestjs/passport");
const session_serializer_1 = require("./serializer/session.serializer");
const mongoose_1 = require("@nestjs/mongoose");
const users_schemas_1 = require("./schemas/users.schemas");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: users_schemas_1.Users.name,
                    schema: users_schemas_1.UsersSchema,
                },
            ]),
            jwt_1.JwtModule.register({}),
            passport_1.PassportModule.register({ session: true }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            strategy_1.FacebookStrategy,
            strategy_1.GoogleStrategy,
            session_serializer_1.SessionSerializer,
            strategy_1.AtStrategy,
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map