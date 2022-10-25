[@totalpave/regression](../README.md) / [Exports](../modules.md) / PolynomialFit

# Class: PolynomialFit

## Hierarchy

- [`FittingStrategy`](FittingStrategy.md)

  ↳ **`PolynomialFit`**

## Table of contents

### Constructors

- [constructor](PolynomialFit.md#constructor)

### Methods

- [\_fit](PolynomialFit.md#_fit)
- [fit](PolynomialFit.md#fit)

## Constructors

### constructor

• **new PolynomialFit**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IOptions`](../interfaces/IOptions.md) |

#### Inherited from

[FittingStrategy](FittingStrategy.md).[constructor](FittingStrategy.md#constructor)

#### Defined in

[fitting/FittingStrategy.ts:7](https://github.com/totalpave/regression-js/blob/5b33716/src/fitting/FittingStrategy.ts#L7)

## Methods

### \_fit

▸ `Protected` **_fit**(`data`, `options`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number`[][] |
| `options` | [`IOptions`](../interfaces/IOptions.md) |

#### Returns

`number`[]

#### Overrides

[FittingStrategy](FittingStrategy.md).[_fit](FittingStrategy.md#_fit)

#### Defined in

[fitting/PolynomialFit.ts:7](https://github.com/totalpave/regression-js/blob/5b33716/src/fitting/PolynomialFit.ts#L7)

___

### fit

▸ **fit**(`data`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number`[][] |

#### Returns

`number`[]

#### Inherited from

[FittingStrategy](FittingStrategy.md).[fit](FittingStrategy.md#fit)

#### Defined in

[fitting/FittingStrategy.ts:16](https://github.com/totalpave/regression-js/blob/5b33716/src/fitting/FittingStrategy.ts#L16)
