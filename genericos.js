function echo(args) {
    return args;
}
//Generic Type
function identity(args) {
    return args;
}
window.onload = function () {
    console.log(echo(["Hello World", " Alanzinho"]));
    var myIdentity = identity;
    console.log(myIdentity("Hello World " + 12));
    var myEcho = identity;
    console.log(myEcho(" Alanzinho"));
};
