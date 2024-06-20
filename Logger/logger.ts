export interface Logger {
    verbose(message: string);
    info(message: string);
    warning(message: string);
    error(message: string);
}