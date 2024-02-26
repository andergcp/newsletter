"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseServicesModule = void 0;
const common_1 = require("@nestjs/common");
const mongo_database_services_module_1 = require("../../../infrastructure/database-services/mongo/mongo-database-services.module");
let DatabaseServicesModule = class DatabaseServicesModule {
};
exports.DatabaseServicesModule = DatabaseServicesModule;
exports.DatabaseServicesModule = DatabaseServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [mongo_database_services_module_1.MongoDatabaseServicesModule],
        exports: [mongo_database_services_module_1.MongoDatabaseServicesModule],
    })
], DatabaseServicesModule);
//# sourceMappingURL=database-services.module.js.map