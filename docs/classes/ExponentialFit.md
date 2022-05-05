[@totalpave/regression](../README.md) / [Exports](../modules.md) / ExponentialFit

# Class: ExponentialFit

## Hierarchy

- [`FittingStrategy`](FittingStrategy.md)

  ↳ **`ExponentialFit`**

## Table of contents

### Constructors

- [constructor](ExponentialFit.md#constructor)

### Methods

- [\_fit](ExponentialFit.md#_fit)
- [fit](ExponentialFit.md#fit)

## Constructors

### constructor

• **new ExponentialFit**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IOptions`](../interfaces/IOptions.md) |

#### Inherited from

[FittingStrategy](FittingStrategy.md).[constructor](FittingStrategy.md#constructor)

#### Defined in

[fitting/FittingStrategy.ts:7](https://github.com/totalpave/regression-js/blob/de5670c/src/fitting/FittingStrategy.ts#L7)

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

[fitting/ExponentialFit.ts:6](https://github.com/totalpave/regression-js/blob/de5670c/src/fitting/ExponentialFit.ts#L6)

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

[fitting/FittingStrategy.ts:16](https://github.com/totalpave/regression-js/blob/de5670c/src/fitting/FittingStrategy.ts#L16)
