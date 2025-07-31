import { BaseValueObject } from "../Base.js";
export const MAX_NAME_LENGTH = 256;
export const MAX_PHONE_NUMBER_LENGTH = 21;
export const MAX_IMAGE_PATH_LENGTH = 400;
export class NonEmptyString extends BaseValueObject {
    validate(value) {
        if (value !== null) {
            const trimmed = value.trim();
            if (trimmed.length === 0) {
                throw new Error(`${this.constructor.name} must be not empty`);
            }
        }
        return value;
    }
}

//# sourceMappingURL=BaseString.js.map