import { Promise } from "lie-ts";

export class Animator {

    public start: number;
    private _duration: number;
    private _step: Function;
    private _interval: number;
    private _rate: number;

    public constructor(duration: number, step: Function) {
        this._duration = duration || 200;
        this._step = step;
        this._rate = 16;
    }

    /**
     * Animate calling a step function over duration. Step is called with delta
     * time so that animations complete within the duration.
     * @param start date
     */
    animate(start: number = Date.now()): Promise<boolean> {
        return new Promise((resolve) => {
            this._interval = window.setInterval(() => {
                let deltaTime = Date.now();
                let timePassed = deltaTime - start;
                let progress = timePassed / this._duration;

                if (progress > 1) progress = 1

                var delta = progress;

                this._step(delta); 

                if (progress == 1) {
                    clearInterval(this._interval);
                    resolve(true); 
                }
            }, this._rate)
        })
    }
}