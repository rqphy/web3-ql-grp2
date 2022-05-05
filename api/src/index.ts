export const evalPostExpression = (expression: string): string =>
{

    const formatedExpression = expression.split(' ')

    let stack = []

    for (const character of formatedExpression)
    {
        if (/\d/.test(character))
        {
            stack.push(character)
        }

        else if (character in operatorsList)
        {
            computeStack(stack, character)
        }

        else if (character == 'NEGATE')
        {
            stack = negateLastValue(stack)
        }
    }

    return generateResponse(stack)
}

const generateResponse = (stack: number[]): string =>
{
    if (stack.length > 1 || stack[0] == Infinity)
    {
        return 'ParseError'
    }

    return stack[0].toString()
}

const computeStack = (stack: number[], operator: string): number[] =>
{
    const b = +stack.pop()
    const a = +stack.pop()

    const value = operatorsList[operator](a, b)
    stack.push(value)

    return stack
}

const negateLastValue = (stack: number[]): number[] =>
{
    stack[stack.length - 1] *= -1
    return stack
}

const operatorsList = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b
}

exports.evalPostExpression = evalPostExpression
exports.generateResponse = generateResponse