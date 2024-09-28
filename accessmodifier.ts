interface Point {
    x: number, 
    y: number
}

interface Vehicle {
    // currentLocation: Point;
    travelTo(point: Point): void;
}

class Taxi implements Vehicle {
    // color: string; // Varsayılan olarak public.
    // public currentLocation: Point; // Dışarıdan erişilebilir.
    // private color:string; // Arık sadece constructor içinden ulaşılacak.
    // private currentLocation: Point; // Arık sadece constructor içinden ulaşılacak.

    constructor (private location: Point, private color?: string) { // ?: opsiyonel
        // this.currentLocation = location;
        // this.color = color;
    }

    public travelTo(point: Point): void { // Ulaşılabilir.
        console.log(`taksi x: ${this.location.x} Y: ${this.location.y} dan taski x: ${point.x} y: ${point.y} konumuna gidiyor.`);
    }
}

let taxi_1: Taxi = new Taxi({x: 2, y: 5}, "Gray");
taxi_1.travelTo({ x: 1, y: 2 });