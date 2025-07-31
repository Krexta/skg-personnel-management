function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
import { Injectable, NotImplementedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-http-bearer";
import { CustomLogger } from "../../utility/index.js";
export class AuthorizationStrategy extends PassportStrategy(Strategy) {
    async validate(req, token) {
        throw new NotImplementedException({
            message: 'AuthorizationStrategy not implement',
            path: req.path,
            method: req.method,
            token
        });
    }
    constructor(logger){
        super({
            passReqToCallback: true
        }), this.logger = logger;
        this.logger.setContext(AuthorizationStrategy.name);
    }
}
AuthorizationStrategy = _ts_decorate([
    Injectable(),
    _ts_metadata("design:type", Function),
    _ts_metadata("design:paramtypes", [
        typeof CustomLogger === "undefined" ? Object : CustomLogger
    ])
], AuthorizationStrategy);

//# sourceMappingURL=authorization.strategy.js.map