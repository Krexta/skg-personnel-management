import { BaseValueObject } from "../Base.js";
export class BearerToken extends BaseValueObject {
    static from(value) {
        return new BearerToken(value);
    }
    validate(value) {
        if (!value || value.trim().length === 0) {
            throw new Error('BearerToken is required');
        }
        return value;
    }
}

//# sourceMappingURL=BearerToken.js.map