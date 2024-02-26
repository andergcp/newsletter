"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const path_1 = require("path");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const aws_config_1 = require("./config/aws.config");
const mongo_config_1 = require("./config/mongo.config");
const sendgrid_config_1 = require("./config/sendgrid.config");
const cloud_services_module_1 = require("./core/services/cloud-services/cloud.services.module");
const database_services_module_1 = require("./core/services/database-services/database-services.module");
const email_service_module_1 = require("./core/services/email-service/email-service.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const newsletter_module_1 = require("./modules/newsletter/newsletter.module");
const newsletter_resolver_1 = require("./modules/newsletter/newsletter.resolver");
const statistic_module_1 = require("./modules/statistic/statistic.module");
const statistic_resolver_1 = require("./modules/statistic/statistic.resolver");
const subscription_module_1 = require("./modules/subscription/subscription.module");
const subscription_resolver_1 = require("./modules/subscription/subscription.resolver");
const resolvers = [newsletter_resolver_1.NewsletterResolver, statistic_resolver_1.StatisticResolver, subscription_resolver_1.SubscriptionResolver];
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                load: [mongo_config_1.default, aws_config_1.default, sendgrid_config_1.default],
                envFilePath: '.env',
            }),
            graphql_1.GraphQLModule.forRoot({
                autoSchemaFile: (0, path_1.join)(process.cwd(), 'src/schema.gql'),
                playground: true,
                introspection: true,
                driver: apollo_1.ApolloDriver,
            }),
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27017/'),
            cloud_services_module_1.CloudServicesModule,
            database_services_module_1.DatabaseServicesModule,
            email_service_module_1.EmailServiceModule,
            newsletter_module_1.NewsletterModule,
            statistic_module_1.StatisticModule,
            subscription_module_1.SubscriptionModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, ...resolvers],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map