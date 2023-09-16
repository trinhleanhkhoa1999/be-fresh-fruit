"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const argon = require("argon2");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const users_schemas_1 = require("./schemas/users.schemas");
let AuthService = class AuthService {
    constructor(jwt, config, users) {
        this.jwt = jwt;
        this.config = config;
        this.users = users;
    }
    async signUp(dto) {
        const user = await this.users.findOne({ 'user.email': dto.email });
        if (user) {
            return {
                message: 'Email already exists',
            };
        }
        else {
            const hash = await argon.hash(dto.password);
            const { _id, user } = await this.users.create({
                user: {
                    email: dto.email,
                    password: hash,
                },
            });
            const tokens = await this.getTokens(_id, dto.email);
            const res = await this.users.findOneAndUpdate(_id, {
                user: Object.assign(Object.assign({}, user), tokens),
            }, {
                returnDocument: 'after',
            });
            console.log('res', res);
            delete res.user.password;
            return res;
        }
    }
    async signIn(dto) {
        console.log('signin', dto);
        const user = dto;
        if (!user)
            throw new common_1.ForbiddenException('Credentials incorrect');
        const pwMatches = await argon.verify('user.hash', dto.password);
        if (!pwMatches)
            throw new common_1.ForbiddenException('Credentials incorrect');
        return this.signToken(1, user.email);
    }
    async signToken(userId, email) {
        const payload = {
            sub: userId,
            email,
        };
        const secret = this.config.get('JWT_SECRET');
        const token = await this.jwt.signAsync(payload, {
            expiresIn: '15m',
            secret: secret,
        });
        return {
            accessToken: token,
        };
    }
    async signGgOrFb(dto) {
        const user = await this.users.findOne({ 'user.email': dto.user.email });
        console.log('user', dto.user.email, user);
        if (user) {
            return user;
        }
        else {
            const res = await this.users.create(dto);
            return res;
        }
    }
    async getTokens(userId, email) {
        const jwtPayload = {
            sub: userId,
            email: email,
        };
        const [at, rt] = await Promise.all([
            this.jwt.signAsync(jwtPayload, {
                secret: this.config.get('AT_SECRET'),
                expiresIn: '15m',
            }),
            this.jwt.signAsync(jwtPayload, {
                secret: this.config.get('RT_SECRET'),
                expiresIn: '7d',
            }),
        ]);
        return {
            accessToken: at,
            refreshToken: rt,
        };
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, mongoose_2.InjectModel)(users_schemas_1.Users.name)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService,
        mongoose_1.Model])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map