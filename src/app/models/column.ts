export interface Column {
    schemaName: string;
    tableName: string;
    columnName: string;
    dataType: string;
    ordinalPosition: number;
    isNullable: boolean;
    characterMaximumLength: number;
    isIdentity: boolean;
    identityGeneration: string;
}