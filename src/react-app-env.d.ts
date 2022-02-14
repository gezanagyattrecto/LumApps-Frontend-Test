/// <reference types="react-scripts" />
type ApplicationState = import('store').ApplicationState;

declare module 'sanitize-html' {
    const sanitizeHtml: any;

    export = sanitizeHtml;
}
