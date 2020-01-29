window.onload = () => {

    try {
        console.log("Hello World")
    } catch (error) {
        console.error(error.message)
    }

    function myCheck(myVar:any) {
        if (myVar == "") throw new Error("Empty");
        if (myVar > 100) throw new Error("Too High");
        if (myVar < 10) throw new Error("Too low");
    }

    try {
        myCheck(50);
        console.log("OK")
    } catch (error) {
        console.error(error.message)
    } finally {
        var varContent: string = "Finalizando"
        console.warn(varContent);
    }

}