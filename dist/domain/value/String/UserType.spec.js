import fc from "fast-check";
import { describe, expect, it } from "vitest";
import { USER_TYPE_LIST, UserType } from "./index.js";
describe('UserType', ()=>{
    it('should return UserType when input is valid', ()=>{
        fc.assert(fc.property(fc.constantFrom(...USER_TYPE_LIST), (type)=>{
            const value = UserType.from(type);
            expect(value).toBeInstanceOf(UserType);
            expect(value.value).toEqual(type);
        }));
    });
    it('should throw an error when input not in enum', ()=>{
        fc.assert(fc.property(fc.string().filter((type)=>!USER_TYPE_LIST.includes(type)), (type)=>{
            expect(()=>UserType.from(type)).toThrow(/Invalid user type/);
        }));
    });
});

//# sourceMappingURL=UserType.spec.js.map