[@totalpave/regression](../README.md) / [Exports](../modules.md) / Polynomial

# Class: Polynomial

## Hierarchy

- [`Regression`](Regression.md)

  ↳ **`Polynomial`**

## Table of contents

### Constructors

- [constructor](Polynomial.md#constructor)

### Methods

- [\_applyOptionDefaults](Polynomial.md#_applyoptiondefaults)
- [\_clone](Polynomial.md#_clone)
- [\_derivative](Polynomial.md#_derivative)
- [\_findX](Polynomial.md#_findx)
- [\_predict](Polynomial.md#_predict)
- [allowOutOfBoundResolutions](Polynomial.md#allowoutofboundresolutions)
- [clone](Polynomial.md#clone)
- [derivative](Polynomial.md#derivative)
- [findX](Polynomial.md#findx)
- [findY](Polynomial.md#findy)
- [getAverageSlope](Polynomial.md#getaverageslope)
- [getCoefficientAt](Polynomial.md#getcoefficientat)
- [getCoefficients](Polynomial.md#getcoefficients)
- [getEquation](Polynomial.md#getequation)
- [getFitAccuracy](Polynomial.md#getfitaccuracy)
- [getOptions](Polynomial.md#getoptions)
- [getType](Polynomial.md#gettype)
- [serialize](Polynomial.md#serialize)
- [setCoefficients](Polynomial.md#setcoefficients)
- [setOrder](Polynomial.md#setorder)
- [setPeriod](Polynomial.md#setperiod)
- [setPrecision](Polynomial.md#setprecision)
- [setPreferLowerX](Polynomial.md#setpreferlowerx)
- [setRange](Polynomial.md#setrange)
- [solve](Polynomial.md#solve)
- [toString](Polynomial.md#tostring)
- [getFittingStrategy](Polynomial.md#getfittingstrategy)
- [getType](Polynomial.md#gettype-1)

## Constructors

### constructor

• **new Polynomial**(`coefficients`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coefficients` | `number`[] |
| `options?` | [`IOptions`](../interfaces/IOptions.md) |

#### Inherited from

[Regression](Regression.md).[constructor](Regression.md#constructor)

#### Defined in

[Regression.ts:17](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L17)

## Methods

### \_applyOptionDefaults

▸ `Protected` **_applyOptionDefaults**(): `Record`<`string`, `any`\>

#### Returns

`Record`<`string`, `any`\>

#### Overrides

[Regression](Regression.md).[_applyOptionDefaults](Regression.md#_applyoptiondefaults)

#### Defined in

[regressions/Polynomial.ts:54](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Polynomial.ts#L54)

___

### \_clone

▸ `Protected` **_clone**(): [`Polynomial`](Polynomial.md)

#### Returns

[`Polynomial`](Polynomial.md)

#### Overrides

[Regression](Regression.md).[_clone](Regression.md#_clone)

#### Defined in

[regressions/Polynomial.ts:145](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Polynomial.ts#L145)

___

### \_derivative

▸ `Protected` **_derivative**(`x`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`number`

#### Overrides

[Regression](Regression.md).[_derivative](Regression.md#_derivative)

#### Defined in

[regressions/Polynomial.ts:95](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Polynomial.ts#L95)

___

### \_findX

▸ `Protected` **_findX**(`y`, `range?`): `number`

while range is "optional", it will always be provided as the public method deals with
a missing range by providing a default based on the polynomial options.
Typescript requires it to be optional so the signature can still match the superclass,
but the super class will never use findX generically, so this is ok.

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |
| `range?` | [`IRangeOptions`](../interfaces/IRangeOptions.md) |

#### Returns

`number`

#### Overrides

[Regression](Regression.md).[_findX](Regression.md#_findx)

#### Defined in

[regressions/Polynomial.ts:179](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Polynomial.ts#L179)

___

### \_predict

▸ `Protected` **_predict**(`x`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`number`[]

#### Overrides

[Regression](Regression.md).[_predict](Regression.md#_predict)

#### Defined in

[regressions/Polynomial.ts:13](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Polynomial.ts#L13)

___

### allowOutOfBoundResolutions

▸ **allowOutOfBoundResolutions**(`flag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flag` | `boolean` |

#### Returns

`void`

#### Inherited from

[Regression](Regression.md).[allowOutOfBoundResolutions](Regression.md#allowoutofboundresolutions)

#### Defined in

[Regression.ts:47](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L47)

___

### clone

▸ **clone**(): [`Regression`](Regression.md)

#### Returns

[`Regression`](Regression.md)

#### Inherited from

[Regression](Regression.md).[clone](Regression.md#clone)

#### Defined in

[Regression.ts:62](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L62)

___

### derivative

▸ **derivative**(`x?`): `number`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x` | `number` | `0` |

#### Returns

`number`

#### Inherited from

[Regression](Regression.md).[derivative](Regression.md#derivative)

#### Defined in

[Regression.ts:66](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L66)

___

### findX

▸ **findX**(`y`, `range?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |
| `range?` | `Partial`<[`IRangeOptions`](../interfaces/IRangeOptions.md)\> |

#### Returns

`number`

#### Overrides

[Regression](Regression.md).[findX](Regression.md#findx)

#### Defined in

[regressions/Polynomial.ts:149](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Polynomial.ts#L149)

___

### findY

▸ **findY**(`x`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`number`

#### Inherited from

[Regression](Regression.md).[findY](Regression.md#findy)

#### Defined in

[Regression.ts:90](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L90)

___

### getAverageSlope

▸ **getAverageSlope**(): `number`

#### Returns

`number`

#### Defined in

[regressions/Polynomial.ts:68](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Polynomial.ts#L68)

___

### getCoefficientAt

▸ **getCoefficientAt**(`index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

#### Inherited from

[Regression](Regression.md).[getCoefficientAt](Regression.md#getcoefficientat)

#### Defined in

[Regression.ts:78](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L78)

___

### getCoefficients

▸ **getCoefficients**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[Regression](Regression.md).[getCoefficients](Regression.md#getcoefficients)

#### Defined in

[Regression.ts:82](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L82)

___

### getEquation

▸ **getEquation**(): `string`

#### Returns

`string`

#### Overrides

[Regression](Regression.md).[getEquation](Regression.md#getequation)

#### Defined in

[regressions/Polynomial.ts:116](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Polynomial.ts#L116)

___

### getFitAccuracy

▸ **getFitAccuracy**(`data`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number`[][] |

#### Returns

`number`

#### Inherited from

[Regression](Regression.md).[getFitAccuracy](Regression.md#getfitaccuracy)

#### Defined in

[Regression.ts:112](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L112)

___

### getOptions

▸ **getOptions**(): [`IOptions`](../interfaces/IOptions.md)

#### Returns

[`IOptions`](../interfaces/IOptions.md)

#### Inherited from

[Regression](Regression.md).[getOptions](Regression.md#getoptions)

#### Defined in

[Regression.ts:70](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L70)

___

### getType

▸ **getType**(): [`RegressionType`](../enums/RegressionType.md)

#### Returns

[`RegressionType`](../enums/RegressionType.md)

#### Overrides

[Regression](Regression.md).[getType](Regression.md#gettype)

#### Defined in

[regressions/Polynomial.ts:133](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Polynomial.ts#L133)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[Regression](Regression.md).[serialize](Regression.md#serialize)

#### Defined in

[Regression.ts:98](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L98)

___

### setCoefficients

▸ **setCoefficients**(`coeffs`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coeffs` | `number`[] |

#### Returns

`void`

#### Inherited from

[Regression](Regression.md).[setCoefficients](Regression.md#setcoefficients)

#### Defined in

[Regression.ts:74](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L74)

___

### setOrder

▸ **setOrder**(`order`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `order` | `number` |

#### Returns

`void`

#### Inherited from

[Regression](Regression.md).[setOrder](Regression.md#setorder)

#### Defined in

[Regression.ts:26](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L26)

___

### setPeriod

▸ **setPeriod**(`period`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `period` | `number` |

#### Returns

`void`

#### Inherited from

[Regression](Regression.md).[setPeriod](Regression.md#setperiod)

#### Defined in

[Regression.ts:34](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L34)

___

### setPrecision

▸ **setPrecision**(`precision`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `precision` | `number` |

#### Returns

`void`

#### Inherited from

[Regression](Regression.md).[setPrecision](Regression.md#setprecision)

#### Defined in

[Regression.ts:30](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L30)

___

### setPreferLowerX

▸ **setPreferLowerX**(`flag`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `flag` | `boolean` |

#### Returns

`void`

#### Inherited from

[Regression](Regression.md).[setPreferLowerX](Regression.md#setpreferlowerx)

#### Defined in

[Regression.ts:43](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L43)

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

#### Inherited from

[Regression](Regression.md).[setRange](Regression.md#setrange)

#### Defined in

[Regression.ts:38](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L38)

___

### solve

▸ **solve**(`x`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`number`

#### Inherited from

[Regression](Regression.md).[solve](Regression.md#solve)

#### Defined in

[Regression.ts:86](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L86)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Regression](Regression.md).[toString](Regression.md#tostring)

#### Defined in

[Regression.ts:108](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L108)

___

### getFittingStrategy

▸ `Static` **getFittingStrategy**(`options`): [`FittingStrategy`](FittingStrategy.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`IOptions`](../interfaces/IOptions.md) |

#### Returns

[`FittingStrategy`](FittingStrategy.md)

#### Defined in

[regressions/Polynomial.ts:141](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Polynomial.ts#L141)

___

### getType

▸ `Static` **getType**(): [`RegressionType`](../enums/RegressionType.md)

#### Returns

[`RegressionType`](../enums/RegressionType.md)

#### Defined in

[regressions/Polynomial.ts:137](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Polynomial.ts#L137)
