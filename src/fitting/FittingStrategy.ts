import IOptions from "../IOptions";
import { DEFAULT_OPTIONS } from "../utils/defaults";

export abstract class FittingStrategy {
    private _options: IOptions;

    public constructor(options?: IOptions) {
        if (!options) {
            options = DEFAULT_OPTIONS;
        }

        this._options = options;
    }

    protected abstract _fit(data: Array<Array<number>>, options: IOptions): Array<number>;

    public fit(data: Array<Array<number>>): Array<number> {
        return this._fit(data, this._options);
    }
}

export default FittingStrategy;