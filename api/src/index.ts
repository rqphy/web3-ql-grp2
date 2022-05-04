export function evalPostExpression(expression: string): string
{
    const operatorsList = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => a / b
    }

    const formatedExpression = expression.split(' ')

    const stack = []

    for (const character of formatedExpression)
    {
        // if it's a value, push it onto the stack
        if (/\d/.test( character ))
        {
            stack.push( character )
        }

        // else if it's an operator
        else if (character in operatorsList)
        {

            const b = +stack.pop()
            const a = +stack.pop()

            const value = operatorsList[character](a, b)
            stack.push(value)

        }

        else if(character == 'NEGATE')
        {
            stack[stack.length - 1] *= -1
        }

        // else NEGATE thing
    }

    if (stack.length > 1 || stack[0] == 'Infinity')
    {
        return 'ParseError'
    }

    return stack[0].toString()
}