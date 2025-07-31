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
import { Transform } from "class-transformer";
import { IsDateString, IsNotEmpty, IsOptional, IsUrl, MaxLength } from "class-validator";
export class CreatePersonnelRequest {
}
_ts_decorate([
    ApiProperty({
        title: 'Name'
    }),
    IsNotEmpty(),
    MaxLength(256),
    Transform(({ value })=>value?.toString().trim()),
    _ts_metadata("design:type", String)
], CreatePersonnelRequest.prototype, "name", void 0);
_ts_decorate([
    ApiProperty({
        title: 'Phone number'
    }),
    IsNotEmpty(),
    MaxLength(21),
    Transform(({ value })=>value?.toString().trim()),
    _ts_metadata("design:type", String)
], CreatePersonnelRequest.prototype, "phone_number", void 0);
_ts_decorate([
    ApiProperty({
        title: 'Date of birth',
        format: 'yyyy-MM-dd',
        example: '2025-01-01'
    }),
    IsDateString({
        strict: true
    }),
    _ts_metadata("design:type", String)
], CreatePersonnelRequest.prototype, "date_of_birth", void 0);
_ts_decorate([
    ApiProperty({
        title: 'Image url',
        required: false,
        example: 'example.com/123.png'
    }),
    IsOptional(),
    IsUrl(),
    _ts_metadata("design:type", String)
], CreatePersonnelRequest.prototype, "image_url", void 0);

//# sourceMappingURL=create.request.js.map