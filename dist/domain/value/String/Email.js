import { isEmail } from "class-validator";
import { NonEmptyString } from "./BaseString.js";
export class Email extends NonEmptyString {
    static from(value) {
        return new Email(value);
    }
    validate(value) {
        value = super.validate(value);
        if (!isEmail(value)) {
            throw new Error(`Invalid email`);
        }
        return value;
    }
}

//# sourceMappingURL=Email.js.map