import { BaseValueObject } from "../Base.js";
export const AUTHENTICATION_PROVIDER_LIST = [
    'GOOGLE'
];
export class AuthenticationProvider extends BaseValueObject {
    static from(value) {
        return new AuthenticationProvider(value);
    }
    validate(value) {
        if (!AUTHENTICATION_PROVIDER_LIST.includes(value)) {
            throw new Error('Invalid authentication provider');
        }
        return value;
    }
}

//# sourceMappingURL=AuthenticationProvider.js.map