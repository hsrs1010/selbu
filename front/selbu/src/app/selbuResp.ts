
export interface SelbuResp
{
    // content: Selbu[];
    id: number;
    place: string;
    status: string;
    
    content: any;
    
    // pageable: any;
    // pageNumber: number;
    pageSize: number;
    totalPages:number;
}