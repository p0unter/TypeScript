interface Point {
    x: number, 
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    constructor (location: Point, color?: string) { // ?: opsiyonel
        this.currentLocation = location;
        this.color = color;
    }

    color: string;
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi x: ${point.x} Y: ${point.y}`);
    }
}

let taxi_1: Taxi = new Taxi({x: 2, y: 5}, "Gray");
taxi_1.travelTo({ x: 1, y: 2 });
console.log(taxi_1.currentLocation);

let taxi_2 = new Taxi({x: 1, y: 2}); // Color opsiyonel oldu.

// constructor (location?: Point, color?: string) { // ?: opsiyonel
//     this.currentLocation = location;
//     this.color = color;
// }

// let taxi_3 = new Taxi(); // Parametre göndermeye gerek yok artık...
