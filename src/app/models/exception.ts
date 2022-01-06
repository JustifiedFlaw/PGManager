import { HttpErrorResponse } from "@angular/common/http";

export class Exception {
    message: string;
    stackTrace: string;

    constructor(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // client-side error
            this.message = error.error.message;
            this.stackTrace = '';
        } else {
            // server-side error
            var e: any = ((error.error ?? error.message) ?? error.statusText) ?? 'Unknown error';
            if (e.hasOwnProperty("errors")) {
                e = Object.keys(e.errors).map(k => `${k}: ${error.error.errors[k]}`).join('\n');
            }
            var complete = e as string;
            var split = splitAt(complete, '\n   at ');
            this.message = split[0];
            this.stackTrace = split.length > 1 ? split[1] : '';
        }
    }
}

function splitAt(s:string, at: string): string[] {
    var index = s.indexOf(at);
    if (index > -1) {
        return [
            s.substring(0, index),
            s.substring(index)
        ];
    }

    return [s];
}