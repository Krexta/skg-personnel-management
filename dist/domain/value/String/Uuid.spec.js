import fc from "fast-check";
import * as uuid from "uuid";
import { describe, expect, it } from "vitest";
import { AuthenticationInformationId, ImageId, PersonnelId, PersonnelUserTypeId } from "./Uuid.js";
describe('Uuid', ()=>{
    describe('PersonnelId', ()=>{
        it('Should return PersonnelId when input is valid', ()=>{
            fc.assert(fc.property(fc.uuid({
                version: 7
            }), (id)=>{
                const result = PersonnelId.from(id);
                expect(result).toBeInstanceOf(PersonnelId);
                expect(result.value).toEqual(id);
            }));
        });
        it('Should throw error when input is invalid', ()=>{
            fc.assert(fc.property(fc.uuid().filter((value)=>uuid.version(value) !== 7), (id)=>{
                expect(()=>PersonnelId.from(id)).toThrow(/Invalid UUID v7/);
            }));
        });
        it('Should generate PersonnelId', ()=>{
            const result = PersonnelId.make();
            expect(result).toBeInstanceOf(PersonnelId);
            expect(uuid.validate(result.value)).toBe(true);
            expect(uuid.version(result.value)).toEqual(7);
        });
    });
    describe('PersonnelUserTypeId', ()=>{
        it('Should return PersonnelUserTypeId when input is valid', ()=>{
            fc.assert(fc.property(fc.uuid({
                version: 7
            }), (id)=>{
                const result = PersonnelUserTypeId.from(id);
                expect(result).toBeInstanceOf(PersonnelUserTypeId);
                expect(result.value).toEqual(id);
            }));
        });
        it('Should throw error when input is invalid', ()=>{
            fc.assert(fc.property(fc.uuid().filter((value)=>uuid.version(value) !== 7), (id)=>{
                expect(()=>PersonnelUserTypeId.from(id)).toThrow(/Invalid UUID v7/);
            }));
        });
        it('Should generate PersonnelUserTypeId', ()=>{
            const result = PersonnelUserTypeId.make();
            expect(result).toBeInstanceOf(PersonnelUserTypeId);
            expect(uuid.validate(result.value)).toBe(true);
            expect(uuid.version(result.value)).toEqual(7);
        });
    });
    describe('ImageId', ()=>{
        it('Should return ImageId when input is valid', ()=>{
            fc.assert(fc.property(fc.uuid({
                version: 7
            }), (id)=>{
                const result = ImageId.from(id);
                expect(result).toBeInstanceOf(ImageId);
                expect(result.value).toEqual(id);
            }));
        });
        it('Should throw error when input is invalid', ()=>{
            fc.assert(fc.property(fc.uuid().filter((value)=>uuid.version(value) !== 7), (id)=>{
                expect(()=>ImageId.from(id)).toThrow(/Invalid UUID v7/);
            }));
        });
        it('Should generate ImageId', ()=>{
            const result = ImageId.make();
            expect(result).toBeInstanceOf(ImageId);
            expect(uuid.validate(result.value)).toBe(true);
            expect(uuid.version(result.value)).toEqual(7);
        });
    });
    describe('AuthenticationInformationId', ()=>{
        it('Should return AuthenticationInformationId when input is valid', ()=>{
            fc.assert(fc.property(fc.uuid({
                version: 7
            }), (id)=>{
                const result = AuthenticationInformationId.from(id);
                expect(result).toBeInstanceOf(AuthenticationInformationId);
                expect(result.value).toEqual(id);
            }));
        });
        it('Should throw error when input is invalid', ()=>{
            fc.assert(fc.property(fc.uuid().filter((value)=>uuid.version(value) !== 7), (id)=>{
                expect(()=>AuthenticationInformationId.from(id)).toThrow(/Invalid UUID v7/);
            }));
        });
        it('Should generate AuthenticationInformationId', ()=>{
            const result = AuthenticationInformationId.make();
            expect(result).toBeInstanceOf(AuthenticationInformationId);
            expect(uuid.validate(result.value)).toBe(true);
            expect(uuid.version(result.value)).toEqual(7);
        });
    });
});

//# sourceMappingURL=Uuid.spec.js.map