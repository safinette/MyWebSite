import { Drawing } from './drawing';

export interface Page {
    id: Number;
    count: Number;
    next: String;
    previous: String;
    drawings: Drawing[];
}
