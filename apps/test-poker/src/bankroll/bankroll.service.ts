import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BankrollServiceBase } from "./base/bankroll.service.base";

@Injectable()
export class BankrollService extends BankrollServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
