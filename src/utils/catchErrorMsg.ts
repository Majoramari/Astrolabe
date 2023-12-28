export const catchErrorMsg = (error: unknown): string =>
  error instanceof Error ? error.message : String(error);
