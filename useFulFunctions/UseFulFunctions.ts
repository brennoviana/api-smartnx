export class UseFulFunctions {
  static getErrorMessage(error: unknown): string {
    return error instanceof Error
      ? error.message
      : "An unknown error occurred.";
  }
}
