"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentosCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = (0, tslib_1.__importStar)(require("type-graphql"));
let DocumentosCountAggregate = class DocumentosCountAggregate {
};
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DocumentosCountAggregate.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DocumentosCountAggregate.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DocumentosCountAggregate.prototype, "link", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DocumentosCountAggregate.prototype, "empresaId", void 0);
(0, tslib_1.__decorate)([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], DocumentosCountAggregate.prototype, "_all", void 0);
DocumentosCountAggregate = (0, tslib_1.__decorate)([
    TypeGraphQL.ObjectType("DocumentosCountAggregate", {
        isAbstract: true
    })
], DocumentosCountAggregate);
exports.DocumentosCountAggregate = DocumentosCountAggregate;
