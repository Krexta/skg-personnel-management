function _ts_decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function _ts_metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}
import { ApiProperty } from "@nestjs/swagger";
export class PersonnelResponse {
}
_ts_decorate([
    ApiProperty({
        title: 'Personnel id'
    }),
    _ts_metadata("design:type", String)
], PersonnelResponse.prototype, "id", void 0);
_ts_decorate([
    ApiProperty({
        title: 'Personnel name'
    }),
    _ts_metadata("design:type", String)
], PersonnelResponse.prototype, "name", void 0);
_ts_decorate([
    ApiProperty({
        title: 'Personnel phone number'
    }),
    _ts_metadata("design:type", String)
], PersonnelResponse.prototype, "phone_number", void 0);
_ts_decorate([
    ApiProperty({
        title: 'Personnel email'
    }),
    _ts_metadata("design:type", String)
], PersonnelResponse.prototype, "email", void 0);
_ts_decorate([
    ApiProperty({
        title: 'Personnel date of birth'
    }),
    _ts_metadata("design:type", String)
], PersonnelResponse.prototype, "date_of_birth", void 0);
_ts_decorate([
    ApiProperty({
        title: 'Personnel image',
        required: false
    }),
    _ts_metadata("design:type", String)
], PersonnelResponse.prototype, "image_url", void 0);
_ts_decorate([
    ApiProperty({
        title: 'Personnel user type'
    }),
    _ts_metadata("design:type", String)
], PersonnelResponse.prototype, "user_type", void 0);

//# sourceMappingURL=response.js.map