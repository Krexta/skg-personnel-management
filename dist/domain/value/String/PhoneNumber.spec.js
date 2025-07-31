import fc from "fast-check";
import { describe, expect, it } from "vitest";
import { MAX_PHONE_NUMBER_LENGTH } from "./BaseString.js";
import { PhoneNumber } from "./PhoneNumber.js";
describe('PhoneNumber', ()=>{
    it('should return PhoneNumber when input is valid', ()=>{
        fc.assert(fc.property(fc.stringMatching(/^[0-9]{1,21}$/), (phoneNumber)=>{
            const value = PhoneNumber.from(phoneNumber);
            expect(value).toBeInstanceOf(PhoneNumber);
            expect(value.value).toEqual(phoneNumber);
        }));
    });
    it('should return error when input is empty', ()=>{
        fc.assert(fc.property(fc.constantFrom('', ' ', '  '), (phoneNumber)=>{
            expect(()=>PhoneNumber.from(phoneNumber)).toThrow('PhoneNumber must be not empty');
        }));
    });
    it('should return error when input is too long', ()=>{
        fc.assert(fc.property(fc.stringMatching(/^[0-9]{22,}$/), (phoneNumber)=>{
            expect(()=>PhoneNumber.from(phoneNumber)).toThrow(`PhoneNumber has maximum length of ${MAX_PHONE_NUMBER_LENGTH}`);
        }));
    });
    describe('equals', ()=>{
        it('should return true when compare two PhoneNumber has the same value', ()=>{
            fc.assert(fc.property(fc.stringMatching(/^[0-9]{1,21}$/), (phoneNumber)=>{
                const phone1 = PhoneNumber.from(phoneNumber);
                const phone2 = PhoneNumber.from(phoneNumber);
                expect(phone1).toBeInstanceOf(PhoneNumber);
                expect(phone2).toBeInstanceOf(PhoneNumber);
                expect(phone1.value).toEqual(phoneNumber);
                expect(phone2.value).toEqual(phoneNumber);
                expect(phone1.equals(phone2)).toBe(true);
            }));
        });
        it('should return true when compare two PhoneNumber has difference from value', ()=>{
            fc.assert(fc.property(fc.record({
                value1: fc.stringMatching(/^[0-9]{1,21}$/),
                value2: fc.stringMatching(/^[0-9]{1,21}$/)
            }).filter(({ value1, value2 })=>value1 !== value2), ({ value1, value2 })=>{
                const phone1 = PhoneNumber.from(value1);
                const phone2 = PhoneNumber.from(value2);
                expect(phone1).toBeInstanceOf(PhoneNumber);
                expect(phone2).toBeInstanceOf(PhoneNumber);
                expect(phone1.value).toEqual(value1);
                expect(phone2.value).toEqual(value2);
                expect(phone1.equals(phone2)).toBe(false);
            }));
        });
    });
});

//# sourceMappingURL=PhoneNumber.spec.js.map