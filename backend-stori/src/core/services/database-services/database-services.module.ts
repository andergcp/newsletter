import { Module } from '@nestjs/common';
import { MongoDatabaseServicesModule } from 'src/infrastructure/database-services/mongo/mongo-database-services.module';

@Module({
  imports: [MongoDatabaseServicesModule],
  exports: [MongoDatabaseServicesModule],
})
export class DatabaseServicesModule {}
