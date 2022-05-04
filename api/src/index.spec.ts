// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { evalPostExpression } from './index'
expect.extend(matchers);

it("Simple reverse polish addition", function () {

  const parameter = '1 1 +'

  const expectedResult = '2'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Regular Infix addition", function () {

  const parameter = '1 + 1'

  const expectedResult = 'ParseError'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Simple reverse polish substraction", function () {

  const parameter = '1 1 -'

  const expectedResult = '0'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Simple reverse polish multiplication", function () {

  const parameter = '1 2 *'

  const expectedResult = '2'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Simple reverse polish division", function () {

  const parameter = '1 2 /'

  const expectedResult = '0.5'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Simple reverse polish additions with NEGATE", function () {

  const parameter = '1 2 NEGATE +'

  const expectedResult = '-1'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Simple reverse polish substraction with NEGATE", function () {

  const parameter = '1 2 NEGATE -'

  const expectedResult = '3'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Simple reverse polish multiplication with NEGATE", function () {

  const parameter = '1 NEGATE 2 *'

  const expectedResult = '-2'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Simple reverse polish division with NEGATE", function () {

  const parameter = '1 NEGATE 2 /'

  const expectedResult = '-0.5'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Complexe reverse polish addition", function () {

  const parameter = '10 1 + 5 +'

  const expectedResult = '16'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Complexe reverse polish substraction", function () {

  const parameter = '10 1 - 5 -'

  const expectedResult = '4'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Complexe reverse polish multiplication", function () {

  const parameter = '10 1 * 5 *'

  const expectedResult = '50'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Complexe reverse polish division", function () {

  const parameter = '10 2 / 5 /'

  const expectedResult = '1'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Multiple reverse polish operations", function () {

  const parameter = '1 1 + 2 *'

  const expectedResult = '4'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Multiple reverse polish addition", function () {

  const parameter = '10 1 +'

  const expectedResult = '11'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Reverse polish addition with float", function () {

  const parameter = '1.5 2 +'

  const expectedResult = '3.5'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Division by 0", function () {

  const parameter = '2 0 /'

  const expectedResult = 'ParseError'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})

it("Complex reverse polish expression", function () {

  const parameter = '1 2 + 3 / 4 *'

  const expectedResult = '4'

  expect(evalPostExpression(parameter)).toEqual(expectedResult)
})