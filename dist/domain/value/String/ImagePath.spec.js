import fc from "fast-check";
import { describe, expect, it } from "vitest";
import { MAX_IMAGE_PATH_LENGTH } from "./BaseString.js";
import { ImagePath } from "./ImagePath.js";
describe('ImagePath', ()=>{
    it('should return ImagePath when input is valid', ()=>{
        fc.assert(fc.property(fc.string({
            minLength: 1,
            maxLength: MAX_IMAGE_PATH_LENGTH
        }).map((val)=>val.trim()).filter((val)=>val.length >= 1), (imagePath)=>{
            const value = ImagePath.from(imagePath);
            expect(value).toBeInstanceOf(ImagePath);
            expect(value.value).toEqual(imagePath);
        }));
    });
    it('should throw an error when input is empty', ()=>{
        fc.assert(fc.property(fc.constantFrom('', ' ', '  '), (imagePath)=>{
            expect(()=>ImagePath.from(imagePath)).toThrow('ImagePath must be not empty');
        }));
    });
    it('should throw an error when input is too long', ()=>{
        fc.assert(fc.property(fc.string({
            minLength: MAX_IMAGE_PATH_LENGTH + 1
        }).map((val)=>val.trim()).filter((val)=>val.length > MAX_IMAGE_PATH_LENGTH), (imagePath)=>{
            expect(()=>ImagePath.from(imagePath)).toThrow(`ImagePath has maximum length of ${MAX_IMAGE_PATH_LENGTH}`);
        }));
    });
    describe('equals', ()=>{
        it('should return true when compare two ImagePath has same value', ()=>{
            fc.assert(fc.property(fc.string({
                minLength: 1,
                maxLength: MAX_IMAGE_PATH_LENGTH
            }).map((val)=>val.trim()).filter((val)=>val.length >= 1), (imagePath)=>{
                const value1 = ImagePath.from(imagePath);
                const value2 = ImagePath.from(imagePath);
                expect(value1).toBeInstanceOf(ImagePath);
                expect(value2).toBeInstanceOf(ImagePath);
                expect(value1.value).toEqual(imagePath);
                expect(value2.value).toEqual(imagePath);
                expect(value1.equals(value2)).toBe(true);
            }));
        });
        it('should return true when compare two ImagePath has difference value', ()=>{
            fc.assert(fc.property(fc.record({
                imagePath1: fc.string({
                    minLength: 1,
                    maxLength: MAX_IMAGE_PATH_LENGTH
                }).map((val)=>val.trim()).filter((val)=>val.length >= 1),
                imagePath2: fc.string({
                    minLength: 1,
                    maxLength: MAX_IMAGE_PATH_LENGTH
                }).map((val)=>val.trim()).filter((val)=>val.length >= 1)
            }).filter(({ imagePath1, imagePath2 })=>imagePath1 !== imagePath2), ({ imagePath1, imagePath2 })=>{
                const value1 = ImagePath.from(imagePath1);
                const value2 = ImagePath.from(imagePath2);
                expect(value1).toBeInstanceOf(ImagePath);
                expect(value2).toBeInstanceOf(ImagePath);
                expect(value1.value).toEqual(imagePath1);
                expect(value2.value).toEqual(imagePath2);
                expect(value1.equals(value2)).toBe(false);
            }));
        });
    });
});

//# sourceMappingURL=ImagePath.spec.js.map