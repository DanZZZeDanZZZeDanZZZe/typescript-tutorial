const isFething: boolean = true
const isLoading: boolean = false

const int: number = 42
const float: number = 4.2
const num: number = 3e10

const message: string = 'Hello typescript'

const numberArray: number[] = [1, 1, 2, 4, 5, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 4, 5, 8, 13]

const wiords: string[] = ['Hello', 'typescript']

//tuple 
const contact: [string, number] = ['Artem', 123233]

//Any
let variable: any = 42
variable = 'New string'
variable = []

//======
function sayMyName(name: string): void {
    console.log(name)
}
sayMyName('Art')
//never 
function throwError(message: string): never {
    throw new Error(message)
}

//Type 
type login = string

const login: login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

