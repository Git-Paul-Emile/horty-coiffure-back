declare module 'multer' {
  import { Request } from 'express';

  interface File {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    destination: string;
    filename: string;
    path: string;
    buffer: Buffer;
  }

  interface Options {
    dest?: string;
    storage?: any;
    fileFilter?: (req: Request, file: File, callback: (error: Error | null, acceptFile: boolean) => void) => void;
    limits?: {
      fileSize?: number;
      files?: number;
    };
  }

  function diskStorage(options: {
    destination?: (req: Request, file: File, callback: (error: Error | null, destination: string) => void) => void;
    filename?: (req: Request, file: File, callback: (error: Error | null, filename: string) => void) => void;
  }): any;

  function memoryStorage(): any;

  function single(fieldname: string): (req: Request, res: any, next: any) => void;

  export { File, Options, diskStorage, memoryStorage, single };
}