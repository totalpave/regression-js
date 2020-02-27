
export interface IRangeOptions {
    low: number;
    high: number;
    preferLowerX: boolean;
}

export interface IOptions {
    order?: number;
    precision?: number;
    period?: number;
    xRange?: IRangeOptions;
}

export default IOptions;
