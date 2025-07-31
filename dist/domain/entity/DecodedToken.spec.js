import fc from "fast-check";
import { describe, expect, it } from "vitest";
import { Email, PersonnelId } from "../value/index.js";
import { DecodedToken } from "./DecodedToken.js";
function makeCreateDecodedTokenProperty() {
    return fc.record({
        personnelId: fc.option(fc.uuid({
            version: 7
        }), {
            nil: undefined
        }),
        userId: fc.string({
            minLength: 1,
            maxLength: 256
        }).map((val)=>val.trim()).filter((val)=>val.length >= 1),
        email: fc.emailAddress()
    }).map(({ personnelId, userId, email })=>({
            personnelId: personnelId ? PersonnelId.from(personnelId) : undefined,
            userId,
            email: Email.from(email)
        }));
}
describe('DecodedToken', ()=>{
    it('should return DecodedToken when input is valid', ()=>{
        fc.assert(fc.property(makeCreateDecodedTokenProperty(), (args)=>{
            const value = new DecodedToken(args);
            expect(value).toBeInstanceOf(DecodedToken);
            expect(value.personnelId?.value).toEqual(args.personnelId?.value);
            expect(value.userId).toEqual(args.userId);
            expect(value.email.value).toEqual(args.email.value);
        }));
    });
});

//# sourceMappingURL=DecodedToken.spec.js.map