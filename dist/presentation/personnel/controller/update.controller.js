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
import { Body, Controller, HttpCode, NotImplementedException, Patch, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { ApiBadRequestResponse, ApiBearerAuth, ApiInternalServerErrorResponse, ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiTags, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { CustomLogger } from "../../../utility/index.js";
import { CurrentDecodedToken } from "../../decorator/index.js";
import { UpdatePersonnelRequest } from "../request/index.js";
import { PersonnelResponse } from "../response.js";
export class PersonnelUpdateController {
    async update(decodedToken, body) {
        throw new NotImplementedException({
            message: 'Method not implemented',
            decodedToken,
            body
        });
    }
    constructor(logger){
        this.logger = logger;
        this.logger.setContext(PersonnelUpdateController.name);
    }
}
_ts_decorate([
    Patch(),
    ApiOperation({
        description: 'Update Personnel'
    }),
    ApiOkResponse({
        type: PersonnelResponse
    }),
    ApiNotFoundResponse({
        description: 'Personnel not found'
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
    HttpCode(200),
    _ts_param(0, CurrentDecodedToken()),
    _ts_param(1, Body()),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof IDecodedToken === "undefined" ? Object : IDecodedToken,
        typeof UpdatePersonnelRequest === "undefined" ? Object : UpdatePersonnelRequest
    ]),
    _ts_metadata("design:returntype", Promise)
], PersonnelUpdateController.prototype, "update", null);
PersonnelUpdateController = _ts_decorate([
    ApiTags('personnels'),
    ApiBearerAuth(),
    UseGuards(AuthGuard('bearer')),
    Controller('personnels'),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof CustomLogger === "undefined" ? Object : CustomLogger
    ])
], PersonnelUpdateController);

//# sourceMappingURL=update.controller.js.map