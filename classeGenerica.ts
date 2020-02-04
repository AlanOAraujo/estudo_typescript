class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

// Generic Constraints
interface LengthInterface {
    length: number;
}

function loggingIdentity<T extends LengthInterface>(args:T): T {
    console.log(args.length)
    return args;
}

window.onload = () => {

    var myGenericNumber = new GenericNumber<number>();

    myGenericNumber.zeroValue = 4;

    myGenericNumber.add = (x,y) => { return x+y };

    console.log(myGenericNumber.zeroValue+" "+ myGenericNumber.add(3,5));

    let myLog = loggingIdentity(["Hello", "Halo", "Gears"]);

    console.log(myLog[2]);

}