class Vehicle{
   constructor(a, b, c){
    this.make = a,
    this.model = b,
    this.year = c

    }
    honk(){
        return "Beep"
    }
    toString(){
        return `This vehicle is a ${this.make} ${this.model} from ${this.year}`
    }
}

class Car extends Vehicle{
    constructor(a, b, c){
        super(a, b, c)
        this.numWheels = 4
    }
}


class Motorcycle extends Vehicle{
    constructor(a, b, c){
        super(a, b, c)
        this.numwheels = 2
    }
    revEngine(){
        return 'VROOM!!!'
    }
}

class Garage{
    constructor(a){
        this.capacity = a
        this.vehicles = []
    }

    add(val){
        if(!(val instanceof Vehicle)) return 'Only vehicles can be stored here'
        if(this.vehicles.length === this.capacity) return "Sorry, we're full"
        else{this.vehicles.push(val); return 'vehicle added'}
    }
    
}