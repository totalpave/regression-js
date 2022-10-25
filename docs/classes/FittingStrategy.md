[@totalpave/regression](../README.md) / [Exports](../modules.md) / FittingStrategy

# Class: FittingStrategy

## Hierarchy

- **`FittingStrategy`**

  ↳ [`ExponentialFit`](ExponentialFit.md)

  ↳ [`LinearFit`](LinearFit.md)

  ↳ [`LogarithmicFit`](LogarithmicFit.md)

  ↳ [`PolynomialFit`](PolynomialFit.md)

  ↳ [`PowerFit`](PowerFit.md)

## Table of contents

### Constructors

- [constructor](FittingStrategy.md#constructor)

### Methods

- [\_fit](FittingStrategy.md#_fit)
- [fit](FittingStrategy.md#fit)

## Constructors

### constructor

• **new FittingStrategy**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IOptions`](../interfaces/IOptions.md) |

#### Defined in

[fitting/FittingStrategy.ts:7](https://github.com/totalpave/regression-js/blob/5b33716/src/fitting/FittingStrategy.ts#L7)

## Methods

### \_fit

▸ `Protected` `Abstract` **_fit**(`data`, `options`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number`[][] |
| `options` | [`IOptions`](../interfaces/IOptions.md) |

#### Returns

`number`[]

#### Defined in

[fitting/FittingStrategy.ts:14](https://github.com/totalpave/regression-js/blob/5b33716/src/fitting/FittingStrategy.ts#L14)

___

### fit

▸ **fit**(`data`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number`[][] |

#### Returns

`number`[]

#### Defined in

[fitting/FittingStrategy.ts:16](https://github.com/totalpave/regression-js/blob/5b33716/src/fitting/FittingStrategy.ts#L16)
