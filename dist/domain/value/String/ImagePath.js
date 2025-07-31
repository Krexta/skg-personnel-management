import { MAX_IMAGE_PATH_LENGTH, NonEmptyString } from "./BaseString.js";
export class ImagePath extends NonEmptyString {
    static from(value = null) {
        return new ImagePath(value);
    }
    validate(value) {
        value = super.validate(value);
        if (value !== null && value.length > MAX_IMAGE_PATH_LENGTH) {
            throw new Error(`ImagePath has maximum length of ${MAX_IMAGE_PATH_LENGTH}`);
        }
        return value;
    }
}

//# sourceMappingURL=ImagePath.js.map