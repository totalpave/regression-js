
type BasicTypes = number | string | boolean | Array<number | string | boolean> | {[key: string]: number | string | boolean};

export interface ISerializable {
    [key: string]: BasicTypes | Array<BasicTypes>;
}

export default ISerializable;
