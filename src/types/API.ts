export interface APIResponse {
  data:   any,
  status: APIResponseStatus
}

export interface APIResponseStatus {
  code: number,
  text: string
}
