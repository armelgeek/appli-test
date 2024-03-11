import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BankrollService } from "./bankroll.service";
import { BankrollControllerBase } from "./base/bankroll.controller.base";

@swagger.ApiTags("bankrolls")
@common.Controller("bankrolls")
export class BankrollController extends BankrollControllerBase {
  constructor(
    protected readonly service: BankrollService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
