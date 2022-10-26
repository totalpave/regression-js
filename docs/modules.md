[@totalpave/regression](README.md) / Exports

# @totalpave/regression

## Table of contents

### Enumerations

- [RegressionType](enums/RegressionType.md)

### Classes

- [Exponential](classes/Exponential.md)
- [ExponentialFit](classes/ExponentialFit.md)
- [FittingStrategy](classes/FittingStrategy.md)
- [Linear](classes/Linear.md)
- [LinearFit](classes/LinearFit.md)
- [Logarithmic](classes/Logarithmic.md)
- [LogarithmicFit](classes/LogarithmicFit.md)
- [Polynomial](classes/Polynomial.md)
- [PolynomialFit](classes/PolynomialFit.md)
- [Power](classes/Power.md)
- [PowerFit](classes/PowerFit.md)
- [Regression](classes/Regression.md)
- [RegressionFactory](classes/RegressionFactory.md)

### Interfaces

- [IBestFitResult](interfaces/IBestFitResult.md)
- [IOptions](interfaces/IOptions.md)
- [IRangeOptions](interfaces/IRangeOptions.md)

### Functions

- [gaussianElimination](modules.md#gaussianelimination)
- [r2](modules.md#r2)

## Functions

### gaussianElimination

▸ **gaussianElimination**(`input`, `order`): `number`[]

Determine the solution of a system of linear equations A * x = b using
Gaussian elimination.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `number`[][] | A 2-d matrix of data in row-major form [ A \| b ] |
| `order` | `number` | How many degrees to solve for |

#### Returns

`number`[]

- Vector of normalized solution coefficients matrix (x)

#### Defined in

[utils/gaussianElimination.ts:10](https://github.com/totalpave/regression-js/blob/6c639d5/src/utils/gaussianElimination.ts#L10)

___

### r2

▸ **r2**(`regression`, `data`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `regression` | [`Regression`](classes/Regression.md) |
| `data` | `number`[][] |

#### Returns

`number`

#### Defined in

[utils/r2.ts:5](https://github.com/totalpave/regression-js/blob/6c639d5/src/utils/r2.ts#L5)
