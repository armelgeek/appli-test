import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BankrollModuleBase } from "./base/bankroll.module.base";
import { BankrollService } from "./bankroll.service";
import { BankrollController } from "./bankroll.controller";
import { BankrollResolver } from "./bankroll.resolver";

@Module({
  imports: [BankrollModuleBase, forwardRef(() => AuthModule)],
  controllers: [BankrollController],
  providers: [BankrollService, BankrollResolver],
  exports: [BankrollService],
})
export class BankrollModule {}
