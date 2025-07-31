import * as uuid from "uuid";
import { BaseValueObject } from "../Base.js";
let UuidV7 = class UuidV7 extends BaseValueObject {
    validate(value) {
        if (uuid.validate(value) === false || uuid.version(value) !== 7) {
            throw new Error('Invalid UUID v7: ' + value);
        }
        return value;
    }
};
export class PersonnelId extends UuidV7 {
    static from(value) {
        return new PersonnelId(value);
    }
    static make() {
        return new PersonnelId(uuid.v7());
    }
}
export class PersonnelUserTypeId extends UuidV7 {
    static from(value) {
        return new PersonnelUserTypeId(value);
    }
    static make() {
        return new PersonnelUserTypeId(uuid.v7());
    }
}
export class ImageId extends UuidV7 {
    static from(value) {
        return new ImageId(value);
    }
    static make() {
        return new ImageId(uuid.v7());
    }
}
export class AuthenticationInformationId extends UuidV7 {
    static from(value) {
        return new AuthenticationInformationId(value);
    }
    static make() {
        return new AuthenticationInformationId(uuid.v7());
    }
}

//# sourceMappingURL=Uuid.js.map