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

// taxi_1 => 41 abc 41
// taxi_1.currentLocation() =>
// taxi_1.travelTo() => 

// taxi_2 => 51 abd 22
// taxi_2.currentLocation() =>
// taxi_2.travelTo() => 