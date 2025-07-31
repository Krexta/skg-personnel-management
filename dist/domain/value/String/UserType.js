import { BaseValueObject } from "../Base.js";
export const USER_TYPE_LIST = [
    'PRESIDENT',
    'PROJECT_MANAGER',
    'GENERAL_AFFAIRS'
];
export class UserType extends BaseValueObject {
    static from(value) {
        return new UserType(value);
    }
    validate(value) {
        if (!USER_TYPE_LIST.includes(value)) {
            throw new Error('Invalid user type');
        }
        return value;
    }
}

//# sourceMappingURL=UserType.js.map