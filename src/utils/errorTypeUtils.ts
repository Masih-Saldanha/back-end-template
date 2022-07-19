export interface ErrorData {
    type: string;
    message: string;
};

export function throwError(condition: boolean, type: string, message: string | string[]) {
    if (condition) {
        throw {
            type,
            message
        };
    };
};

export function errorType(error: ErrorData) {
    if (error.type === "Unauthorized") {
        return { status: 401, message: error.message };
    };
    if (error.type === "Not Found") {
        return { status: 404, message: error.message };
    };
    if (error.type === "Not Acceptable") {
        return { status: 406, message: error.message };
    };
    if (error.type === "Conflict") {
        return { status: 409, message: error.message };
    };
    return { status: 500, message: "Internal Server Error" };
};