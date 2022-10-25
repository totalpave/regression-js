[@totalpave/regression](../README.md) / [Exports](../modules.md) / Linear

# Class: Linear

## Hierarchy

- [`Regression`](Regression.md)

  ↳ **`Linear`**

## Table of contents

### Constructors

- [constructor](Linear.md#constructor)

### Methods

- [\_applyOptionDefaults](Linear.md#_applyoptiondefaults)
- [\_clone](Linear.md#_clone)
- [\_derivative](Linear.md#_derivative)
- [\_findX](Linear.md#_findx)
- [\_predict](Linear.md#_predict)
- [allowOutOfBoundResolutions](Linear.md#allowoutofboundresolutions)
- [clone](Linear.md#clone)
- [derivative](Linear.md#derivative)
- [findX](Linear.md#findx)
- [findY](Linear.md#findy)
- [getCoefficientAt](Linear.md#getcoefficientat)
- [getCoefficients](Linear.md#getcoefficients)
- [getEquation](Linear.md#getequation)
- [getFitAccuracy](Linear.md#getfitaccuracy)
- [getOptions](Linear.md#getoptions)
- [getType](Linear.md#gettype)
- [serialize](Linear.md#serialize)
- [setCoefficients](Linear.md#setcoefficients)
- [setOrder](Linear.md#setorder)
- [setPeriod](Linear.md#setperiod)
- [setPrecision](Linear.md#setprecision)
- [setPreferLowerX](Linear.md#setpreferlowerx)
- [setRange](Linear.md#setrange)
- [solve](Linear.md#solve)
- [toString](Linear.md#tostring)
- [getFittingStrategy](Linear.md#getfittingstrategy)
- [getType](Linear.md#gettype-1)

## Constructors

### constructor

• **new Linear**(`coefficients`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `coefficients` | `number`[] |
| `options?` | [`IOptions`](../interfaces/IOptions.md) |

#### Inherited from

[Regression](Regression.md).[constructor](Regression.md#constructor)

#### Defined in

[Regression.ts:17](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L17)

## Methods

### \_applyOptionDefaults

▸ `Protected` **_applyOptionDefaults**(): `Record`<`any`, `any`\>

#### Returns

`Record`<`any`, `any`\>

#### Inherited from

[Regression](Regression.md).[_applyOptionDefaults](Regression.md#_applyoptiondefaults)

#### Defined in

[Regression.ts:51](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L51)

___

### \_clone

▸ `Protected` **_clone**(): [`Linear`](Linear.md)

#### Returns

[`Linear`](Linear.md)

#### Overrides

[Regression](Regression.md).[_clone](Regression.md#_clone)

#### Defined in

[regressions/Linear.ts:39](https://github.com/totalpave/regression-js/blob/5b33716/src/regressions/Linear.ts#L39)

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

[regressions/Linear.ts:35](https://github.com/totalpave/regression-js/blob/5b33716/src/regressions/Linear.ts#L35)

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

[regressions/Linear.ts:43](https://github.com/totalpave/regression-js/blob/5b33716/src/regressions/Linear.ts#L43)

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

[regressions/Linear.ts:10](https://github.com/totalpave/regression-js/blob/5b33716/src/regressions/Linear.ts#L10)

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

[Regression.ts:47](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L47)

___

### clone

▸ **clone**(): [`Regression`](Regression.md)

#### Returns

[`Regression`](Regression.md)

#### Inherited from

[Regression](Regression.md).[clone](Regression.md#clone)

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

#### Inherited from

[Regression](Regression.md).[derivative](Regression.md#derivative)

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

#### Inherited from

[Regression](Regression.md).[findX](Regression.md#findx)

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

#### Inherited from

[Regression](Regression.md).[findY](Regression.md#findy)

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

#### Inherited from

[Regression](Regression.md).[getCoefficientAt](Regression.md#getcoefficientat)

#### Defined in

[Regression.ts:78](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L78)

___

### getCoefficients

▸ **getCoefficients**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[Regression](Regression.md).[getCoefficients](Regression.md#getcoefficients)

#### Defined in

[Regression.ts:82](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L82)

___

### getEquation

▸ **getEquation**(): `string`

#### Returns

`string`

#### Overrides

[Regression](Regression.md).[getEquation](Regression.md#getequation)

#### Defined in

[regressions/Linear.ts:17](https://github.com/totalpave/regression-js/blob/5b33716/src/regressions/Linear.ts#L17)

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

[Regression.ts:112](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L112)

___

### getOptions

▸ **getOptions**(): [`IOptions`](../interfaces/IOptions.md)

#### Returns

[`IOptions`](../interfaces/IOptions.md)

#### Inherited from

[Regression](Regression.md).[getOptions](Regression.md#getoptions)

#### Defined in

[Regression.ts:70](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L70)

___

### getType

▸ **getType**(): [`RegressionType`](../enums/RegressionType.md)

#### Returns

[`RegressionType`](../enums/RegressionType.md)

#### Overrides

[Regression](Regression.md).[getType](Regression.md#gettype)

#### Defined in

[regressions/Linear.ts:23](https://github.com/totalpave/regression-js/blob/5b33716/src/regressions/Linear.ts#L23)

___

### serialize

▸ **serialize**(): `string`

#### Returns

`string`

#### Inherited from

[Regression](Regression.md).[serialize](Regression.md#serialize)

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

#### Inherited from

[Regression](Regression.md).[setCoefficients](Regression.md#setcoefficients)

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

#### Inherited from

[Regression](Regression.md).[setOrder](Regression.md#setorder)

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

#### Inherited from

[Regression](Regression.md).[setPeriod](Regression.md#setperiod)

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

#### Inherited from

[Regression](Regression.md).[setPrecision](Regression.md#setprecision)

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

#### Inherited from

[Regression](Regression.md).[setPreferLowerX](Regression.md#setpreferlowerx)

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

#### Inherited from

[Regression](Regression.md).[setRange](Regression.md#setrange)

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

#### Inherited from

[Regression](Regression.md).[solve](Regression.md#solve)

#### Defined in

[Regression.ts:86](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L86)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Inherited from

[Regression](Regression.md).[toString](Regression.md#tostring)

#### Defined in

[Regression.ts:108](https://github.com/totalpave/regression-js/blob/5b33716/src/Regression.ts#L108)

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

[regressions/Linear.ts:31](https://github.com/totalpave/regression-js/blob/5b33716/src/regressions/Linear.ts#L31)

___

### getType

▸ `Static` **getType**(): [`RegressionType`](../enums/RegressionType.md)

#### Returns

[`RegressionType`](../enums/RegressionType.md)

#### Defined in

[regressions/Linear.ts:27](https://github.com/totalpave/regression-js/blob/5b33716/src/regressions/Linear.ts#L27)
