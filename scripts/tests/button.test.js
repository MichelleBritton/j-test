/**
 * @jest-environment jsdom
 */

// Import the buttonClick function from our source file
const buttonClick = require("../button");

// beforeEach is a Jest directive.  This is something that runs before each test is run
// Set up a mock DOM in beforeEAch
// We don't need to put the entire HTML here, just hte bit we want to test, in this case the paragraph
// beforeEach(() => {
//     document.body.innerHTML = "<p id='par'></p>";
// });

// Checking the content of our mock DOM paragraph to see that is has the text that we expect
// describe("DOM tests", () => {
//     test("Expects content to change", () => {
//         buttonClick();
//         expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
//     });
// });


// Load  the entire HTML page and attach it to the mock DOM
// fs is a Node module which is a file system handling module built into Node that allows us to open , read and write files
beforeEach(() => {
    // read the contents of our HTML file and store it in a variable
    let fs = require("fs")
    let fileContents = fs.readFileSync("mocking.html", "utf-8");

    // Attach it to the DOM, by opening the document, write file contents and then close it
    document.open();
    document.write(fileContents);
    document.close();
});

describe("DOM tests", () => {
    test("Expects content to change", () => {
        buttonClick();
        expect(document.getElementById("par").innerHTML).toEqual("You Clicked");
    });

    //This test gets all of the h1 tags and stores them in a special kind of array.  if the h1 exists, then the length of the array will be 1, if two h1 tags
    //exist the length would be two etc
    test("h1 should exist", () => {
        expect(document.getElementsByTagName("h1").length).toBe(1);
    });
});



// beforeAll(() => {
//     document.body.innerHTML = "<p id='par'></p>";
// });

// describe("DOM tests", () => {
//     test("Expects content to change", () => {
//         buttonClick();
//         expect(document.getElementById("par")
//             .innerHTML).toEqual("You Clicked");
//     });
// });