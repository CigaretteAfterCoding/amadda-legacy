export interface UnauthorizedErrorResponse {
  errors: Array<{
    type: 'UNAUTHORIZED';
    message: string;
  }>
}

export interface IdAlreadyExistsErrorResponse {
  errors: Array<{
    type: 'ID_ALREADY_EXISTS';
    message: string;
  }>
}

export interface AlreadySignedInErrorResponse {
  errors: Array<{
    type: 'ALREADY_SIGNED_IN';
    message: string;
  }>
}

export interface NoItemsToDeleteErrorResponse {
  errors: Array<{
    type: 'NO_ITEMS_TO_DELETE';
    message: string;
  }>
}