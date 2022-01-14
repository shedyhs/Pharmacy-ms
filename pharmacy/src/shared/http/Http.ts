export type HttpMethod =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'patch'
  | 'options';

export type HttpRequest = {
  params: any;
  body: any;
  query: any;
  headers: any;
};

export type HttpResponse = {
  statusCode: number;
  data: any;
};

export interface Http {
  on(
    method: HttpMethod,
    url: string,
    fn: (req: HttpRequest) => Promise<HttpResponse>,
  ): void;
  listen(port: number): void;
}
