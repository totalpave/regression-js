
export interface IRangeOptions {
    low: number;
    high: number;
    preferLowerX: boolean;
    allowOutOfBounds?: boolean;
}

export interface IOptions {
    order?: number;
    precision?: number;
    period?: number;
    xRange?: IRangeOptions;
}

export default IOptions;
