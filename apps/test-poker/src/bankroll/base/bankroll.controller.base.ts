/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { BankrollService } from "../bankroll.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { BankrollCreateInput } from "./BankrollCreateInput";
import { Bankroll } from "./Bankroll";
import { BankrollFindManyArgs } from "./BankrollFindManyArgs";
import { BankrollWhereUniqueInput } from "./BankrollWhereUniqueInput";
import { BankrollUpdateInput } from "./BankrollUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class BankrollControllerBase {
  constructor(
    protected readonly service: BankrollService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Bankroll })
  @nestAccessControl.UseRoles({
    resource: "Bankroll",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createBankroll(
    @common.Body() data: BankrollCreateInput
  ): Promise<Bankroll> {
    return await this.service.createBankroll({
      data: data,
      select: {
        capital: true,
        createdAt: true,
        description: true,
        devise: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Bankroll] })
  @ApiNestedQuery(BankrollFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Bankroll",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async bankrolls(@common.Req() request: Request): Promise<Bankroll[]> {
    const args = plainToClass(BankrollFindManyArgs, request.query);
    return this.service.bankrolls({
      ...args,
      select: {
        capital: true,
        createdAt: true,
        description: true,
        devise: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Bankroll })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bankroll",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async bankroll(
    @common.Param() params: BankrollWhereUniqueInput
  ): Promise<Bankroll | null> {
    const result = await this.service.bankroll({
      where: params,
      select: {
        capital: true,
        createdAt: true,
        description: true,
        devise: true,
        id: true,
        name: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Bankroll })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bankroll",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateBankroll(
    @common.Param() params: BankrollWhereUniqueInput,
    @common.Body() data: BankrollUpdateInput
  ): Promise<Bankroll | null> {
    try {
      return await this.service.updateBankroll({
        where: params,
        data: data,
        select: {
          capital: true,
          createdAt: true,
          description: true,
          devise: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Bankroll })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Bankroll",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteBankroll(
    @common.Param() params: BankrollWhereUniqueInput
  ): Promise<Bankroll | null> {
    try {
      return await this.service.deleteBankroll({
        where: params,
        select: {
          capital: true,
          createdAt: true,
          description: true,
          devise: true,
          id: true,
          name: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
