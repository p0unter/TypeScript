interface Point {
    x: number, 
    y: number
}

interface Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`taksi x: ${point.x} Y: ${point.y}`);
    }
}

class Bus implements Vehicle {
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`otobüs x: ${point.x} Y: ${point.y}`);
    }
}

let taxi_1: Taxi = new Taxi;
taxi_1.travelTo({ x: 1, y: 2 });

taxi_1.currentLocation = { x: 2, y: 5 };

let taxi_2: Taxi = new Taxi();
taxi_2.travelTo({ x: 2, y: 5 });
taxi_2.currentLocation = { x: 1, y: 9};

let bus_1: Bus = new Bus();


console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);