import { GraphQLResolveInfo } from "graphql";
import { AggregateEmpresaArgs } from "./args/AggregateEmpresaArgs";
import { CreateEmpresaArgs } from "./args/CreateEmpresaArgs";
import { CreateManyEmpresaArgs } from "./args/CreateManyEmpresaArgs";
import { DeleteEmpresaArgs } from "./args/DeleteEmpresaArgs";
import { DeleteManyEmpresaArgs } from "./args/DeleteManyEmpresaArgs";
import { FindFirstEmpresaArgs } from "./args/FindFirstEmpresaArgs";
import { FindManyEmpresaArgs } from "./args/FindManyEmpresaArgs";
import { FindUniqueEmpresaArgs } from "./args/FindUniqueEmpresaArgs";
import { GroupByEmpresaArgs } from "./args/GroupByEmpresaArgs";
import { UpdateEmpresaArgs } from "./args/UpdateEmpresaArgs";
import { UpdateManyEmpresaArgs } from "./args/UpdateManyEmpresaArgs";
import { UpsertEmpresaArgs } from "./args/UpsertEmpresaArgs";
import { Empresa } from "../../../models/Empresa";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateEmpresa } from "../../outputs/AggregateEmpresa";
import { EmpresaGroupBy } from "../../outputs/EmpresaGroupBy";
export declare class EmpresaCrudResolver {
    empresa(ctx: any, info: GraphQLResolveInfo, args: FindUniqueEmpresaArgs): Promise<Empresa | null>;
    findFirstEmpresa(ctx: any, info: GraphQLResolveInfo, args: FindFirstEmpresaArgs): Promise<Empresa | null>;
    empresas(ctx: any, info: GraphQLResolveInfo, args: FindManyEmpresaArgs): Promise<Empresa[]>;
    createEmpresa(ctx: any, info: GraphQLResolveInfo, args: CreateEmpresaArgs): Promise<Empresa>;
    createManyEmpresa(ctx: any, info: GraphQLResolveInfo, args: CreateManyEmpresaArgs): Promise<AffectedRowsOutput>;
    deleteEmpresa(ctx: any, info: GraphQLResolveInfo, args: DeleteEmpresaArgs): Promise<Empresa | null>;
    updateEmpresa(ctx: any, info: GraphQLResolveInfo, args: UpdateEmpresaArgs): Promise<Empresa | null>;
    deleteManyEmpresa(ctx: any, info: GraphQLResolveInfo, args: DeleteManyEmpresaArgs): Promise<AffectedRowsOutput>;
    updateManyEmpresa(ctx: any, info: GraphQLResolveInfo, args: UpdateManyEmpresaArgs): Promise<AffectedRowsOutput>;
    upsertEmpresa(ctx: any, info: GraphQLResolveInfo, args: UpsertEmpresaArgs): Promise<Empresa>;
    aggregateEmpresa(ctx: any, info: GraphQLResolveInfo, args: AggregateEmpresaArgs): Promise<AggregateEmpresa>;
    groupByEmpresa(ctx: any, info: GraphQLResolveInfo, args: GroupByEmpresaArgs): Promise<EmpresaGroupBy[]>;
}
