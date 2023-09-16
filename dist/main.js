"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const session = require("express-session");
const passport = require("passport");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    console.log('Running on port localhost:3456');
    console.log('Swagger on port localhost:3456/api');
    app.use(session({
        secret: 'my-secret',
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 3600000 },
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
    }));
    const config = new swagger_1.DocumentBuilder()
        .setTitle('One Drink And Food')
        .setDescription('The ONE API description')
        .setVersion('1.0')
        .addTag('version 1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(3456);
}
bootstrap();
//# sourceMappingURL=main.js.map