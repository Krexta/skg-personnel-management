import { isEmail } from "class-validator";
import fc from "fast-check";
import { describe, expect, it } from "vitest";
import { Email } from "./Email.js";
describe('Email', ()=>{
    it('should return Email when input is valid', ()=>{
        fc.assert(fc.property(fc.emailAddress(), (email)=>{
            const value = Email.from(email);
            expect(value).toBeInstanceOf(Email);
            expect(value.value).toEqual(email);
        }));
    });
    it('should throw an error when input is empty', ()=>{
        fc.assert(fc.property(fc.constantFrom('', ' ', '  '), (email)=>{
            expect(()=>Email.from(email)).toThrow('Email must be not empty');
        }));
    });
    it('should throw an error when input is not a email', ()=>{
        fc.assert(fc.property(fc.string().map((val)=>val.trim()).filter((val)=>val.length > 1 && !isEmail(val)), (email)=>{
            expect(()=>Email.from(email)).toThrow('Invalid email');
        }));
    });
    describe('equals', ()=>{
        it('should return true when compare two Email has same value', ()=>{
            fc.assert(fc.property(fc.emailAddress(), (email)=>{
                const value1 = Email.from(email);
                const value2 = Email.from(email);
                expect(value1).toBeInstanceOf(Email);
                expect(value2).toBeInstanceOf(Email);
                expect(value1.value).toEqual(email);
                expect(value2.value).toEqual(email);
                expect(value1.equals(value2)).toBe(true);
            }));
        });
        it('should return true when compare two Email has difference value', ()=>{
            fc.assert(fc.property(fc.record({
                email1: fc.emailAddress(),
                email2: fc.emailAddress()
            }).filter(({ email1, email2 })=>email1 !== email2), ({ email1, email2 })=>{
                const value1 = Email.from(email1);
                const value2 = Email.from(email2);
                expect(value1).toBeInstanceOf(Email);
                expect(value2).toBeInstanceOf(Email);
                expect(value1.value).toEqual(email1);
                expect(value2.value).toEqual(email2);
                expect(value1.equals(value2)).toBe(false);
            }));
        });
    });
});

//# sourceMappingURL=Emai.spec.js.map