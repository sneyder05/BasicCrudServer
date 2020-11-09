import { Any } from 'types';

export interface IPaginationResult {
    totalRecords: number,
    recordsByPage: number,
    page: number,
    records: Any,
    readonly maxPages: number
}