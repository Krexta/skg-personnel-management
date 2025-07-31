import fc from "fast-check";
import { describe, expect, it } from "vitest";
import { AUTHENTICATION_PROVIDER_LIST, AuthenticationProvider } from "../value/index.js";
import { AuthenticationInformation } from "./AuthenticationInformation.js";
function makeCreateProperty() {
    return fc.record({
        uid: fc.string({
            minLength: 1,
            maxLength: 256
        }).map((val)=>val.trim()).filter((val)=>val.length >= 1),
        provider: fc.constantFrom(...AUTHENTICATION_PROVIDER_LIST).map((val)=>val.trim()).filter((val)=>val.length >= 1)
    }).map(({ uid, provider })=>({
            uid,
            provider: AuthenticationProvider.from(provider)
        }));
}
describe('AuthenticationInformation', ()=>{
    it('should return AuthenticationInformation when input is valid', ()=>{
        fc.assert(fc.property(makeCreateProperty(), (args)=>{
            const value = new AuthenticationInformation(args);
            expect(value).toBeInstanceOf(AuthenticationInformation);
            expect(value.uid).toEqual(args.uid);
            expect(value.provider.value).toEqual(args.provider.value);
        }));
    });
});

//# sourceMappingURL=AuthenticationInformation.spec.js.map