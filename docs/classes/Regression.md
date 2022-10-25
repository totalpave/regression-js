[@totalpave/regression](../README.md) / [Exports](../modules.md) / Regression

# Class: Regression

## Hierarchy

- **`Regression`**

  ↳ [`Exponential`](Exponential.md)

  ↳ [`Linear`](Linear.md)

  ↳ [`Logarithmic`](Logarithmic.md)

  ↳ [`Polynomial`](Polynomial.md)

  ↳ [`Power`](Power.md)

## Implements

- `ISerializable`
- `ICloneable`<[`Regression`](Regression.md)\>

## Table of contents

### Constructors

- [constructor](Regression.md#constructor)

### Methods

- [\_applyOptionDefaults](Regression.md#_applyoptiondefaults)
- [\_clone](Regression.md#_clone)
- [\_derivative](Regression.md#_derivative)
- [\_findX](Regression.md#_findx)
- [\_predict](Regression.md#_predict)
- [allowOutOfBoundResolutions](Regression.md#allowoutofboundresolutions)
- [clone](Regression.md#clone)
- [derivative](Regression.md#derivative)
- [findX](Regression.md#findx)
- [findY](Regression.md#findy)
- [getCoefficientAt](Regression.md#getcoefficientat)
- [getCoefficients](Regression.md#getcoefficients)
- [getEquation](Regression.md#getequation)
- [getFitAccuracy](Regression.md#getfitaccuracy)
- [getOptions](Regression.md#getoptions)
- [getType](Regression.md#gettype)
- [serialize](Regression.md#serialize)
- [setCoefficients](Regression.md#setcoefficients)
- [setOrder](Regression.md#setorder)
- [setPeriod](Regression.md#setperiod)
- [setPrecision](Regression.md#setprecision)
- [setPreferLowerX](Regression.md#setpreferlowerx)
- [setRange](Regression.md#setrange)
- [solve](Regression.md#solve)
- [toString](Regression.md#tostring)

## Constructors

### constructor

• **new Regression**(`coefficients`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coefficients` | `number`[] |
| `options?` | [`IOptions`](../interfaces/IOptions.md) |

#### Defined in

[Regression.ts:17](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L17)

## Methods

### \_applyOptionDefaults

▸ `Protected` **_applyOptionDefaults**(): `Record`<`any`, `any`\>

#### Returns

`Record`<`any`, `any`\>

#### Defined in

[Regression.ts:51](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L51)

___

### \_clone

▸ `Protected` `Abstract` **_clone**(): [`Regression`](Regression.md)

#### Returns

[`Regression`](Regression.md)

#### Defined in

[Regression.ts:61](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L61)

___

### \_derivative

▸ `Protected` `Abstract` **_derivative**(`x`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`number`

#### Defined in

[Regression.ts:58](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L58)

___

### \_findX

▸ `Protected` `Abstract` **_findX**(`y`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`number`

#### Defined in

[Regression.ts:59](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L59)

___

### \_predict

▸ `Protected` `Abstract` **_predict**(`x`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`number`[]

#### Defined in

[Regression.ts:55](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L55)

___

### allowOutOfBoundResolutions

▸ **allowOutOfBoundResolutions**(`flag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flag` | `boolean` |

#### Returns

`void`

#### Defined in

[Regression.ts:47](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L47)

___

### clone

▸ **clone**(): [`Regression`](Regression.md)

#### Returns

[`Regression`](Regression.md)

#### Implementation of

ICloneable.clone

#### Defined in

[Regression.ts:62](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L62)

___

### derivative

▸ **derivative**(`x?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |

#### Returns

`number`

#### Defined in

[Regression.ts:66](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L66)

___

### findX

▸ **findX**(`y`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`number`

#### Defined in

[Regression.ts:94](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L94)

___

### findY

▸ **findY**(`x`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`number`

#### Defined in

[Regression.ts:90](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L90)

___

### getCoefficientAt

▸ **getCoefficientAt**(`index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

#### Defined in

[Regression.ts:78](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L78)

___

### getCoefficients

▸ **getCoefficients**(): `number`[]

#### Returns

`number`[]

#### Defined in

[Regression.ts:82](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L82)

___

### getEquation

▸ `Abstract` **getEquation**(): `string`

#### Returns

`string`

#### Defined in

[Regression.ts:57](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L57)

___

### getFitAccuracy

▸ **getFitAccuracy**(`data`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number`[][] |

#### Returns

`number`

#### Defined in

[Regression.ts:112](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L112)

___

### getOptions

▸ **getOptions**(): [`IOptions`](../interfaces/IOptions.md)

#### Returns

[`IOptions`](../interfaces/IOptions.md)

#### Defined in

[Regression.ts:70](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L70)

___

### getType

▸ `Abstract` **getType**(): [`RegressionType`](../enums/RegressionType.md)

#### Returns

[`RegressionType`](../enums/RegressionType.md)

#### Defined in

[Regression.ts:56](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L56)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Implementation of

ISerializable.serialize

#### Defined in

[Regression.ts:98](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L98)

___

### setCoefficients

▸ **setCoefficients**(`coeffs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coeffs` | `number`[] |

#### Returns

`void`

#### Defined in

[Regression.ts:74](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L74)

___

### setOrder

▸ **setOrder**(`order`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `order` | `number` |

#### Returns

`void`

#### Defined in

[Regression.ts:26](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L26)

___

### setPeriod

▸ **setPeriod**(`period`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `period` | `number` |

#### Returns

`void`

#### Defined in

[Regression.ts:34](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L34)

___

### setPrecision

▸ **setPrecision**(`precision`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `precision` | `number` |

#### Returns

`void`

#### Defined in

[Regression.ts:30](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L30)

___

### setPreferLowerX

▸ **setPreferLowerX**(`flag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flag` | `boolean` |

#### Returns

`void`

#### Defined in

[Regression.ts:43](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L43)

___

### setRange

▸ **setRange**(`low`, `high`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `low` | `number` |
| `high` | `number` |

#### Returns

`void`

#### Defined in

[Regression.ts:38](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L38)

___

### solve

▸ **solve**(`x`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`number`

#### Defined in

[Regression.ts:86](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L86)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

[Regression.ts:108](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L108)
