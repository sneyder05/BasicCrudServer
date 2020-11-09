import { Any, IPaginationResult } from 'types';

export class PaginationResult implements IPaginationResult {
    public readonly maxPages!: number;

    constructor(public totalRecords: number, public recordsByPage: number, public page: number, public records: Any) {
        this.maxPages = this.recordsByPage !== 0 ? Math.ceil(this.totalRecords / this.recordsByPage) : 0;
    }
}