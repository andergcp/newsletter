export const cleanFileName = (fileName: string) => {
  return fileName.
    replace(/[^a-z0-9_.-]/gi, '_').
    replace(/_+/g, '_')
}