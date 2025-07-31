export class Personnel {
    update(args) {
        return new UpdatePersonnel({
            id: this.id,
            ...args
        });
    }
    constructor(args){
        this.id = args.id;
        this.name = args.name;
        this.phoneNumber = args.phoneNumber;
        this.email = args.email;
        this.dateOfBirth = args.dateOfBirth;
        this.image = args.image;
        this.userType = args.userType;
        this.authenticationInformation = args.authenticationInformation;
    }
}
export class UpdatePersonnel {
    constructor(args){
        this.id = args.id;
        this.name = args.name;
        this.phoneNumber = args.phoneNumber;
        this.email = args.email;
        this.dateOfBirth = args.dateOfBirth;
        this.image = args.image;
        this.userType = args.userType;
        this.authenticationInformation = args.authenticationInformation;
    }
}

//# sourceMappingURL=Personnel.js.map