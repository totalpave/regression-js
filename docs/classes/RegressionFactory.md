[@totalpave/regression](../README.md) / [Exports](../modules.md) / RegressionFactory

# Class: RegressionFactory

## Table of contents

### Constructors

- [constructor](RegressionFactory.md#constructor)

### Methods

- [bestFit](RegressionFactory.md#bestfit)
- [create](RegressionFactory.md#create)
- [load](RegressionFactory.md#load)

## Constructors

### constructor

• **new RegressionFactory**()

#### Defined in

[RegressionFactory.ts:21](https://github.com/totalpave/regression-js/blob/de5670c/src/RegressionFactory.ts#L21)

## Methods

### bestFit

▸ **bestFit**<`T`\>(`type`, `data`, `options?`): [`IBestFitResult`](../interfaces/IBestFitResult.md)<`T`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Regression`](Regression.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`RegressionType`](../enums/RegressionType.md) |
| `data` | `number`[][] |
| `options?` | [`IOptions`](../interfaces/IOptions.md) |

#### Returns

[`IBestFitResult`](../interfaces/IBestFitResult.md)<`T`\>

#### Defined in

[RegressionFactory.ts:48](https://github.com/totalpave/regression-js/blob/de5670c/src/RegressionFactory.ts#L48)

___

### create

▸ **create**<`T`\>(`type`, `coefficients`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Regression`](Regression.md)<`T`\> = [`Regression`](Regression.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`RegressionType`](../enums/RegressionType.md) |
| `coefficients` | `number`[] |
| `options?` | [`IOptions`](../interfaces/IOptions.md) |

#### Returns

`T`

#### Defined in

[RegressionFactory.ts:23](https://github.com/totalpave/regression-js/blob/de5670c/src/RegressionFactory.ts#L23)

___

### load

▸ **load**<`T`\>(`serialized`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Regression`](Regression.md)<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `serialized` | `string` |

#### Returns

`T`

#### Defined in

[RegressionFactory.ts:82](https://github.com/totalpave/regression-js/blob/de5670c/src/RegressionFactory.ts#L82)
