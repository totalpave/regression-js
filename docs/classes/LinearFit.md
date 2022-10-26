[@totalpave/regression](../README.md) / [Exports](../modules.md) / LinearFit

# Class: LinearFit

## Hierarchy

- [`FittingStrategy`](FittingStrategy.md)

  ↳ **`LinearFit`**

## Table of contents

### Constructors

- [constructor](LinearFit.md#constructor)

### Methods

- [\_fit](LinearFit.md#_fit)
- [fit](LinearFit.md#fit)

## Constructors

### constructor

• **new LinearFit**(`options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`IOptions`](../interfaces/IOptions.md) |

#### Inherited from

[FittingStrategy](FittingStrategy.md).[constructor](FittingStrategy.md#constructor)

#### Defined in

[fitting/FittingStrategy.ts:7](https://github.com/totalpave/regression-js/blob/6c639d5/src/fitting/FittingStrategy.ts#L7)

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

[fitting/LinearFit.ts:6](https://github.com/totalpave/regression-js/blob/6c639d5/src/fitting/LinearFit.ts#L6)

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

[fitting/FittingStrategy.ts:16](https://github.com/totalpave/regression-js/blob/6c639d5/src/fitting/FittingStrategy.ts#L16)
