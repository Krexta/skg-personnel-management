import { format } from "date-fns";
import fc from "fast-check";
import { describe, expect, it } from "vitest";
import { AUTHENTICATION_PROVIDER_LIST, AuthenticationProvider, Email, ImagePath, Name, PersonnelId, PhoneNumber, USER_TYPE_LIST, UserType, YEAR_MONTH_DAY_FORMAT, YearMonthDay } from "../value/index.js";
import { MAX_NAME_LENGTH, MAX_PHONE_NUMBER_LENGTH } from "../value/String/BaseString.js";
import { AuthenticationInformation } from "./AuthenticationInformation.js";
import { Personnel } from "./Personnel.js";
function makeCreateProperty() {
    return fc.record({
        id: fc.uuid({
            version: 7
        }),
        name: fc.string({
            minLength: 1,
            maxLength: MAX_NAME_LENGTH
        }).map((val)=>val.trim()).filter((val)=>val.length >= 1),
        phoneNumber: fc.string({
            minLength: 1,
            maxLength: MAX_PHONE_NUMBER_LENGTH
        }).map((val)=>val.trim()).filter((val)=>val.length >= 1),
        email: fc.emailAddress(),
        dateOfBirth: fc.date({
            min: new Date(0),
            max: new Date(9999, 11, 31)
        }).map((val)=>format(val, YEAR_MONTH_DAY_FORMAT)),
        image: fc.webUrl(),
        userType: fc.constantFrom(...USER_TYPE_LIST),
        authenticationInformation: fc.array(fc.record({
            uid: fc.string({
                minLength: 1,
                maxLength: 256
            }).map((val)=>val.trim()).filter((val)=>val.length >= 1),
            provider: fc.constantFrom(...AUTHENTICATION_PROVIDER_LIST).map((val)=>val.trim()).filter((val)=>val.length >= 1)
        }), {
            minLength: 1
        })
    }).map(({ id, name, phoneNumber, email, dateOfBirth, image, userType, authenticationInformation })=>({
            id: PersonnelId.from(id),
            name: Name.from(name),
            phoneNumber: PhoneNumber.from(phoneNumber),
            email: Email.from(email),
            dateOfBirth: YearMonthDay.from(dateOfBirth),
            image: ImagePath.from(image),
            userType: UserType.from(userType),
            authenticationInformation: authenticationInformation.map(({ uid, provider })=>new AuthenticationInformation({
                    uid,
                    provider: AuthenticationProvider.from(provider)
                }))
        }));
}
function makeUpdateProperty() {
    return fc.record({
        name: fc.option(fc.string({
            minLength: 1,
            maxLength: MAX_NAME_LENGTH
        }).map((val)=>val.trim()).filter((val)=>val.length >= 1), {
            nil: undefined
        }),
        phoneNumber: fc.option(fc.string({
            minLength: 1,
            maxLength: MAX_PHONE_NUMBER_LENGTH
        }).map((val)=>val.trim()).filter((val)=>val.length >= 1), {
            nil: undefined
        }),
        email: fc.option(fc.emailAddress(), {
            nil: undefined
        }),
        dateOfBirth: fc.option(fc.date({
            min: new Date(0),
            max: new Date(9999, 11, 31)
        }).map((val)=>format(val, YEAR_MONTH_DAY_FORMAT)), {
            nil: undefined
        }),
        image: fc.option(fc.webUrl(), {
            nil: undefined
        }),
        userType: fc.option(fc.constantFrom(...USER_TYPE_LIST), {
            nil: undefined
        }),
        authenticationInformation: fc.option(fc.array(fc.record({
            uid: fc.string({
                minLength: 1,
                maxLength: 256
            }).map((val)=>val.trim()).filter((val)=>val.length >= 1),
            provider: fc.constantFrom(...AUTHENTICATION_PROVIDER_LIST).map((val)=>val.trim()).filter((val)=>val.length >= 1)
        }), {
            minLength: 1
        }), {
            nil: undefined
        })
    }).map(({ name, phoneNumber, email, dateOfBirth, image, userType, authenticationInformation })=>({
            name: name ? Name.from(name) : undefined,
            phoneNumber: phoneNumber ? PhoneNumber.from(phoneNumber) : undefined,
            email: email ? Email.from(email) : undefined,
            dateOfBirth: dateOfBirth ? YearMonthDay.from(dateOfBirth) : undefined,
            image: image ? ImagePath.from(image) : undefined,
            userType: userType ? UserType.from(userType) : undefined,
            authenticationInformation: authenticationInformation?.map(({ uid, provider })=>new AuthenticationInformation({
                    uid,
                    provider: AuthenticationProvider.from(provider)
                }))
        }));
}
describe('Personnel', ()=>{
    it('should return Personnel when input is valid', ()=>{
        fc.assert(fc.property(makeCreateProperty(), (args)=>{
            const value = new Personnel(args);
            expect(value).toBeInstanceOf(Personnel);
            expect(value.id.value).toEqual(args.id.value);
            expect(value.name.value).toEqual(args.name.value);
            expect(value.phoneNumber.value).toEqual(args.phoneNumber.value);
            expect(value.email.value).toEqual(args.email.value);
            expect(value.dateOfBirth.toString()).toEqual(args.dateOfBirth.toString());
            expect(value.image.value).toEqual(args.image.value);
            expect(value.userType.value).toEqual(args.userType.value);
            expect(value.authenticationInformation).toEqual(expect.arrayContaining(args.authenticationInformation));
        }));
    });
    describe('update', ()=>{
        it('should return UpdatePersonnel when input is valid', ()=>{
            fc.assert(fc.property(makeCreateProperty(), makeUpdateProperty(), (createArgs, updateArgs)=>{
                const entity = new Personnel(createArgs);
                expect(entity).toBeInstanceOf(Personnel);
                const update = entity.update(updateArgs);
                expect(update.id.value).toEqual(entity.id.value);
                expect(update.name?.value).toEqual(updateArgs.name?.value);
                expect(update.phoneNumber?.value).toEqual(updateArgs.phoneNumber?.value);
                expect(update.email?.value).toEqual(updateArgs.email?.value);
                expect(update.dateOfBirth?.toString()).toEqual(updateArgs.dateOfBirth?.toString());
                expect(update.image?.value).toEqual(updateArgs.image?.value);
                expect(update.userType?.value).toEqual(updateArgs.userType?.value);
                if (updateArgs.authenticationInformation) {
                    expect(update.authenticationInformation).toEqual(expect.arrayContaining(updateArgs.authenticationInformation));
                } else {
                    expect(update.authenticationInformation).toBeUndefined();
                }
            }));
        });
    });
});

//# sourceMappingURL=Personnel.spec.js.map