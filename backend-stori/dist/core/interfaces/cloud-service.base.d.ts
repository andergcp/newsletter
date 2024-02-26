export declare const CloudServiceSymbol: unique symbol;
export interface CloudService {
    downloadFile: (fileUrl: string) => Promise<string>;
}
