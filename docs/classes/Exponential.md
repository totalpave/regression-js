[@totalpave/regression](../README.md) / [Exports](../modules.md) / Exponential

# Class: Exponential

## Hierarchy

- [`Regression`](Regression.md)

  ↳ **`Exponential`**

## Table of contents

### Constructors

- [constructor](Exponential.md#constructor)

### Methods

- [\_applyOptionDefaults](Exponential.md#_applyoptiondefaults)
- [\_clone](Exponential.md#_clone)
- [\_derivative](Exponential.md#_derivative)
- [\_findX](Exponential.md#_findx)
- [\_predict](Exponential.md#_predict)
- [allowOutOfBoundResolutions](Exponential.md#allowoutofboundresolutions)
- [clone](Exponential.md#clone)
- [derivative](Exponential.md#derivative)
- [findX](Exponential.md#findx)
- [findY](Exponential.md#findy)
- [getCoefficientAt](Exponential.md#getcoefficientat)
- [getCoefficients](Exponential.md#getcoefficients)
- [getEquation](Exponential.md#getequation)
- [getFitAccuracy](Exponential.md#getfitaccuracy)
- [getOptions](Exponential.md#getoptions)
- [getType](Exponential.md#gettype)
- [serialize](Exponential.md#serialize)
- [setCoefficients](Exponential.md#setcoefficients)
- [setOrder](Exponential.md#setorder)
- [setPeriod](Exponential.md#setperiod)
- [setPrecision](Exponential.md#setprecision)
- [setPreferLowerX](Exponential.md#setpreferlowerx)
- [setRange](Exponential.md#setrange)
- [solve](Exponential.md#solve)
- [toString](Exponential.md#tostring)
- [getFittingStrategy](Exponential.md#getfittingstrategy)
- [getType](Exponential.md#gettype-1)

## Constructors

### constructor

• **new Exponential**(`coefficients`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coefficients` | `number`[] |
| `options?` | [`IOptions`](../interfaces/IOptions.md) |

#### Overrides

[Regression](Regression.md).[constructor](Regression.md#constructor)

#### Defined in

[regressions/Exponential.ts:9](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Exponential.ts#L9)

## Methods

### \_applyOptionDefaults

▸ `Protected` **_applyOptionDefaults**(): `Record`<`any`, `any`\>

#### Returns

`Record`<`any`, `any`\>

#### Inherited from

[Regression](Regression.md).[_applyOptionDefaults](Regression.md#_applyoptiondefaults)

#### Defined in

[Regression.ts:51](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L51)

___

### \_clone

▸ `Protected` **_clone**(): [`Exponential`](Exponential.md)

#### Returns

[`Exponential`](Exponential.md)

#### Overrides

[Regression](Regression.md).[_clone](Regression.md#_clone)

#### Defined in

[regressions/Exponential.ts:42](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Exponential.ts#L42)

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

[regressions/Exponential.ts:36](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Exponential.ts#L36)

___

### \_findX

▸ `Protected` **_findX**(`y`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`number`

#### Overrides

[Regression](Regression.md).[_findX](Regression.md#_findx)

#### Defined in

[regressions/Exponential.ts:46](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Exponential.ts#L46)

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

[regressions/Exponential.ts:13](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Exponential.ts#L13)

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

▸ **findX**(`y`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`number`

#### Inherited from

[Regression](Regression.md).[findX](Regression.md#findx)

#### Defined in

[Regression.ts:94](https://github.com/totalpave/regression-js/blob/6c639d5/src/Regression.ts#L94)

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

[regressions/Exponential.ts:20](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Exponential.ts#L20)

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

[regressions/Exponential.ts:24](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Exponential.ts#L24)

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

[regressions/Exponential.ts:32](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Exponential.ts#L32)

___

### getType

▸ `Static` **getType**(): [`RegressionType`](../enums/RegressionType.md)

#### Returns

[`RegressionType`](../enums/RegressionType.md)

#### Defined in

[regressions/Exponential.ts:28](https://github.com/totalpave/regression-js/blob/6c639d5/src/regressions/Exponential.ts#L28)
