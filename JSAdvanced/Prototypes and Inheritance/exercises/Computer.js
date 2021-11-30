function result() {
    class Keyboard{
        constructor(manufacturer, responseTime){
            this.manufacturer = manufacturer;
            this.responseTime = responseTime;
        };
    };
    class Monitor{
        constructor(manufacturer, width, height){
            Object.assign(this, {
                manufacturer,
                width,
                height,
            });
        };
    };
    class Battery{
        constructor(manufacturer, expectedLife){
            this.manufacturer = manufacturer;
            this.expectedLife = expectedLife;
        };
    };
    class Computer{
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace){
            if (new.target === Computer) {
                throw new Error('Cannot instantiate directly ABS class.');
            }
            Object.assign(this, {
                manufacturer,
                processorSpeed,
                ram,
                hardDiskSpace,
            });
        };
    };
    class Laptop extends Computer{
        constructor(
            manufacturer, 
            processorSpeed, 
            ram, 
            hardDiskSpace, 
            weight, 
            color, 
            battery){
                super(manufacturer, processorSpeed, ram, hardDiskSpace);
                this.weight = weight;
                this.color = color;
                this.battery = battery
            };
            get battery() {
                return this._battery;
            };
    
            set battery(value) {
                if (!(value instanceof Battery)) {
                    throw new TypeError('Arguments must be of type Battery.');
                }
                this._battery = value;
            };
    };
    class Desktop extends Computer{
        constructor(
            manufacturer, 
            processorSpeed, 
            ram, 
            hardDiskSpace,
            keyboard,
            monitor,
        ){
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard;
            this.monitor = monitor;
        };
        get monitor() {
            return this._monitor;
        };

        set monitor(value) {
            if (!(value instanceof Monitor)) {
                throw new TypeError('Arguments must be of type Monitor.');
            }
            this._monitor = value;
        };
        get keyboard() {
            return this._keyboard;
        };

        set keyboard(value) {
            if (!(value instanceof Keyboard)) {
                throw new TypeError('Arguments must be of type Keyboard.');
            }
            this._keyboard = value;
        };
    };
    return {
        Battery,
        Keyboard,
        Monitor,
        Computer,
        Laptop,
        Desktop
    };
};

let classes =result();
let Computer = classes.Computer;
let Laptop = classes.Laptop;
let Desktop = classes.Desktop;
let Monitor = classes.Monitor;
let Battery = classes.Battery;
let Keyboard = classes.Keyboard;

let battery = new Battery('Energy', 3);
console.log(battery);
let laptop = new Laptop("Hewlett Packard", 2.4, 4, 0.5, 3.12, "Silver", battery);
console.log(laptop);
