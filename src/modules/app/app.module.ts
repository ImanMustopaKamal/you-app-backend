import { Module } from '@nestjs/common';
import { UserModule } from '@modules/user/user.module';
import { PrismaModule } from '@providers/prisma/prisma.module';
import { AuthModule } from '@modules/auth/auth.module';
import appConfig from '@config/app.config';
import { ConfigModule } from '@nestjs/config';
import jwtConfig from '@config/jwt.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, jwtConfig],
    }),
    PrismaModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
