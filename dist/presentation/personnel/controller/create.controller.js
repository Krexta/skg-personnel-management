function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
function _ts_param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
import { Body, Controller, NotImplementedException, Post, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBadRequestResponse, ApiBearerAuth, ApiConsumes, ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { CustomLogger } from "../../../utility/index.js";
import { CurrentDecodedToken } from "../../decorator/index.js";
import { CreatePersonnelRequest } from "../request/index.js";
import { PersonnelResponse } from "../response.js";
export class PersonnelCreateController {
    async create(decodedToken, body) {
        throw new NotImplementedException({
            message: 'Method not implemented',
            body,
            decodedToken
        });
    }
    constructor(logger){
        this.logger = logger;
        this.logger.setContext(PersonnelCreateController.name);
    }
}
_ts_decorate([
    Post(),
    ApiConsumes('application/json'),
    ApiOperation({
        description: 'Create Personnel'
    }),
    ApiOkResponse({
        type: PersonnelResponse
    }),
    ApiBadRequestResponse({
        description: 'リクエスト内容が不正'
    }),
    ApiInternalServerErrorResponse({
        description: 'サーバーエラー'
    }),
    ApiUnauthorizedResponse({
        description: '認証エラー'
    }),
    _ts_param(0, CurrentDecodedToken()),
    _ts_param(1, Body()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof IDecodedToken === "undefined" ? Object : IDecodedToken,
        typeof CreatePersonnelRequest === "undefined" ? Object : CreatePersonnelRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], PersonnelCreateController.prototype, "create", null);
PersonnelCreateController = _ts_decorate([
    ApiTags('personnels'),
    ApiBearerAuth(),
    UseGuards(AuthGuard('bearer')),
    Controller('personnels'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof CustomLogger === "undefined" ? Object : CustomLogger
    ])
], PersonnelCreateController);

//# sourceMappingURL=create.controller.js.map