class ValidationError extends Error {
    statusCode: number;
    constructor(message: string) {
        super(message);
        this.name = "ValidationError";
        this.statusCode = 400;
    }
}

class NotFoundError extends Error {
    statusCode: number;
    constructor(message: string) {
        super(message);
        this.name = "NotFoundError";
        this.statusCode = 404;
    }
}

class UnauthorizedError extends Error {
    statusCode: number;
    constructor(message: string) {
        super(message);
        this.name = "UnauthorizedError";
        this.statusCode = 401;
    }
}

export { ValidationError, NotFoundError, UnauthorizedError };