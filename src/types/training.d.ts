let message: string = 'heyyy';
    const test = 10;

    const arrStr: Array<string> = ['andy', 'sandy'];

    interface person {
        name: string,
    }
    const arrObj: Array<person> = [{name: 'andy'}, {name: 'sandy'}];

    // Void Type when a function does not return anything
    const voidType = (message: string): void => {
        console.log(message)
    };

    voidType('hey');

    // Union Type we can have more than one type in a variable
    const unionType: string | boolean | undefined = false;
    
    // Alias type
    type Dog = 'dog';
    type Cat = 'cat';
    type Fish = 'Fish';
    type Bird = 'bird';

    type Pet = Dog | Cat | Fish | Bird;
    let pet: Pet = 'dog';

    // Interfaces
    interface Car {
        wheels: number,
        brand: string,
        color?: string,
        model: number,
    }

    interface Suv extends Car {
        turbo: boolean,
    }

    const bmw: Car = {
        wheels: 4,
        brand: 'bmw',
        model: 2023,
    }

    const kiaSuv: Suv = {
        wheels: 5,
        brand: 'kia',
        model: 2022,
        turbo: true,
    }

    // Enums allows us to define a list of const that belong to the same category
    // there are two types: numbers and strings
    // if enum is all numbers the first element may have an initial value otherwise
    // it will assign the value starting from 0;

    // type number
    enum Level {
        second = 2,
        third,
        fourth,
    }

    // type string
    enum typeOfRoom {
        Single = 'single',
        Doble = 'doble',
        Triple = 'triple',
    }

    interface Room {
        id: number,
        type: typeOfRoom,
        level: Level,
        pricePerNight: number,
    };

    const room: Room = {
        id: 3,
        type: typeOfRoom.Doble,
        level: Level.second,
        pricePerNight: 300,
    };

    // Tuples allow us to define the type of each element in an array at a specific index
    const strNumBool: [string, string, boolean, number] = ['hey', 'bye', true, 3];

    // Literal types allow us to create our own types based on a specific value
    const iceCreamFlavor = 'vanilla';
    type IceCreamFlavor = 'chocolate' | 'vanilla' | 'lemon';
    const myIceCream: IceCreamFlavor = iceCreamFlavor;
    const myName: 'Ferney' = 'Ferney';

    function testing<T>(value: T): T {
        console.log(value);
        return value;
    }
    const genericType = testing([3,6,7, null, false])