function echo<T>(args: T[]): T[] {
    return args;
}

//Generic Type
function identity<T>(args: T): T {
    return args;
}

//Genetic Interface
interface GenericEcho{
    <T>(args: T): T 
}

window.onload = () => {
    console.log(echo<string>(["Hello World", " Alanzinho"]));

    //Generic Type
    let myIdentity: <T>(args: T) => T = identity;
    console.log(myIdentity<any>("Hello World "+12));

    //Generic Interface
    let myEcho: GenericEcho = identity;
    console.log(myEcho<string>(" Alanzinho"));
}