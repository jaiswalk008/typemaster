export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        DB_NAME:string;
        DB_USER:string;
        DB_PASS:string;
        DB_HOST:string
        PORT:number
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}
