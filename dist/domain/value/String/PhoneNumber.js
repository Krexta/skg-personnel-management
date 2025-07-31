import { MAX_PHONE_NUMBER_LENGTH, NonEmptyString } from "./BaseString.js";
export class PhoneNumber extends NonEmptyString {
    static from(value) {
        return new PhoneNumber(value);
    }
    validate(value) {
        value = super.validate(value);
        if (value.length > MAX_PHONE_NUMBER_LENGTH) {
            throw new Error(`PhoneNumber has maximum length of ${MAX_PHONE_NUMBER_LENGTH}`);
        }
        return value;
    }
}

//# sourceMappingURL=PhoneNumber.js.map