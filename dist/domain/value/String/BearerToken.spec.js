import fc from "fast-check";
import { describe, expect, it } from "vitest";
import { BearerToken } from "./BearerToken.js";
describe('BearerToken', ()=>{
    it('有効な文字列からBearerTokenを作成できる', ()=>{
        fc.assert(fc.property(fc.string().filter((v)=>v.trim().length > 0).map((v)=>v.trim()), (value)=>{
            const token = BearerToken.from(value);
            expect(token).toBeInstanceOf(BearerToken);
        }));
    });
    it('トークンが空の場合はエラーになる', ()=>{
        expect(()=>BearerToken.from('')).toThrow('BearerToken is required');
    });
    it('トークンが空白のみの場合はエラーになる', ()=>{
        fc.assert(fc.property(fc.string({
            unit: fc.constantFrom(' ', '　')
        }), (value)=>{
            expect(()=>BearerToken.from(value)).toThrow('BearerToken is required');
        }));
    });
});

//# sourceMappingURL=BearerToken.spec.js.map