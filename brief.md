# IA#1 — cartTotal Implementation Brief

## Objective

Implement `cartTotal(items, options)` according to the specification in `README.md`.

## Allowed files

- `src/cart.js` — implement the function.
- `test/cart.test.js` — add automated tests.

Do not modify unrelated files.

## Technology and constraints

- Plain JavaScript using ES Modules.
- Node.js 22 or newer.
- No external dependencies.
- Preserve the named export `cartTotal(items, options)`.
- Follow the rules in `AGENTS.md`.

## Input

`items` is an array of objects containing:

- `name`: product name.
- `price`: product unit price.
- `qty`: product quantity.

`options` contains:

- `vatRate`: VAT rate.
- `freeShipFrom`: minimum subtotal for free shipping.
- `shipFee`: shipping fee below the threshold.

## Required behaviour

1. Calculate `subtotal` as the sum of `price * qty`.
2. Calculate VAT as `subtotal * vatRate`.
3. Shipping is zero when `subtotal >= freeShipFrom`; otherwise use `shipFee`.
4. Return `subtotal + VAT + shipping`, rounded to the nearest whole đồng using a numeric result.
5. An empty cart returns `0`, with no VAT or shipping.
6. A negative price throws `RangeError`.
7. A quantity that is not a positive integer throws `RangeError`.

## Worked example

```js
cartTotal(
  [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 }
  ],
  {
    vatRate: 0.08,
    freeShipFrom: 500000,
    shipFee: 30000
  }
)
```

Expected result: `467400` (number).

## Required tests

Test the following independently:

- The worked example returns `467400`.
- The empty cart returns `0`.
- Free shipping applies at the exact threshold.
- Shipping is charged below the threshold.
- Negative price throws `RangeError`.
- Zero quantity throws `RangeError`.
- Non-integer quantity throws `RangeError`.
- The final result is a rounded number.

## Definition of Done

- `npm test` passes.
- `npm run lint` passes.
- No external dependencies are added.
- No unrelated files are modified.
- Every change can be explained and reviewed.

## Implementation workflow

1. Inspect `README.md`, `AGENTS.md` and the existing code.
2. Propose a short implementation plan.
3. Implement only the approved changes.
4. Review the diff.
5. Validate the result with tests and lint.
