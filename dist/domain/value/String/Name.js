import { MAX_NAME_LENGTH, NonEmptyString } from "./BaseString.js";
export class Name extends NonEmptyString {
    static from(value) {
        return new Name(value);
    }
    validate(value) {
        value = super.validate(value);
        if (value.length > MAX_NAME_LENGTH) {
            throw new Error(`Name has maximum length of ${MAX_NAME_LENGTH}`);
        }
        return value;
    }
}

//# sourceMappingURL=Name.js.map