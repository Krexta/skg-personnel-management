import { createParamDecorator, UnauthorizedException } from "@nestjs/common";
export const CurrentDecodedToken = createParamDecorator((data, host)=>{
    const ctx = host.switchToHttp();
    const request = ctx.getRequest();
    if (!request.decodedToken) {
        throw new UnauthorizedException('Token not found');
    }
    return request.decodedToken;
});

//# sourceMappingURL=decoded-token.js.map