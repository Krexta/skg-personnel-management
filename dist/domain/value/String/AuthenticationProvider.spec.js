import fc from "fast-check";
import { describe, expect, it } from "vitest";
import { AUTHENTICATION_PROVIDER_LIST, AuthenticationProvider } from "./index.js";
describe('AuthenticationProvider', ()=>{
    it('should return AuthenticationProvider when input is valid', ()=>{
        fc.assert(fc.property(fc.constantFrom(...AUTHENTICATION_PROVIDER_LIST), (provider)=>{
            const value = AuthenticationProvider.from(provider);
            expect(value).toBeInstanceOf(AuthenticationProvider);
            expect(value.value).toEqual(provider);
        }));
    });
    it('should throw an error when input not in enum', ()=>{
        fc.assert(fc.property(fc.string().filter((provider)=>!AUTHENTICATION_PROVIDER_LIST.includes(provider)), (provider)=>{
            expect(()=>AuthenticationProvider.from(provider)).toThrow(/Invalid authentication provider/);
        }));
    });
});

//# sourceMappingURL=AuthenticationProvider.spec.js.map