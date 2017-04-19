import { Promise } from "lie-ts";
export declare class Animator {
    start: number;
    private _duration;
    private _step;
    private _interval;
    private _rate;
    constructor(duration: number, step: Function);
    animate(start?: number): Promise<boolean>;
}
