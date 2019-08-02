
type BasicTypes = number | string | boolean | Array<number | string | boolean> | {[key: string]: number | string | boolean};

export interface Serializable {
    [key: string]: BasicTypes | Array<BasicTypes>;
}
