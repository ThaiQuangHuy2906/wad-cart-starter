import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// This test fails until you implement cartTotal. That is the point:
// run `npm test` first and see it red.
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay', price: 45000, qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 467400)
})

test('an empty cart returns 0 without VAT or shipping', () => {
  const items = []
  const options = { vatRate: 0.08, freeShipFrom: 500, shipFee: 30 }
  assert.equal(cartTotal(items, options), 0)
})

test('shipping is free at the exact subtotal threshold', () => {
  const items = [{ name: 'Notebook', price: 500, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 500, shipFee: 30 }
  assert.equal(cartTotal(items, options), 500)
})

test('shipping is charged below the subtotal threshold', () => {
  const items = [{ name: 'Notebook', price: 499, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 500, shipFee: 30 }
  assert.equal(cartTotal(items, options), 529)
})

test('a negative price throws RangeError', () => {
  const items = [{ name: 'Notebook', price: -1, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 500, shipFee: 30 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('zero quantity throws RangeError', () => {
  const items = [{ name: 'Notebook', price: 100, qty: 0 }]
  const options = { vatRate: 0, freeShipFrom: 500, shipFee: 30 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('a non-integer quantity throws RangeError', () => {
  const items = [{ name: 'Notebook', price: 100, qty: 1.5 }]
  const options = { vatRate: 0, freeShipFrom: 500, shipFee: 30 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

test('the final total rounds down below half a dong', () => {
  const items = [{ name: 'Notebook', price: 100.49, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 500, shipFee: 0 }
  assert.equal(cartTotal(items, options), 100)
})

test('the final total rounds up at half a dong and returns a number', () => {
  const items = [{ name: 'Notebook', price: 100.5, qty: 1 }]
  const options = { vatRate: 0, freeShipFrom: 500, shipFee: 0 }
  const result = cartTotal(items, options)
  assert.equal(typeof result, 'number')
  assert.equal(result, 101)
})
