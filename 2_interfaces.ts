interface Rect {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 30
    },
    color: 'red'
}

const rect2: Rect = {
    id: '1234',
    size: {
        width: 20,
        height: 5
    },
    color: 'red'
}

rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}

// ==================================

interface RectWithAtea extends Rect {
    getArea: () => number
}

const rect5: RectWithAtea = {
    id: '123',
    size: {
        width: 20,
        height: 20
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
}

// ===================================

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

//==========================
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    bordeRadius: '5px'
}