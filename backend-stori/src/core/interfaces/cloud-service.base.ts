export const CloudServiceSymbol = Symbol.for('CloudService');

export interface CloudService {
  downloadFile: (fileUrl: string) => Promise<string>;
}
