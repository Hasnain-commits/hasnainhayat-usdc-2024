/** 
 * RECOMMENDATION
 * 
 * To test your code, you should open "tester.html" in a web browser.
 * You can then use the "Developer Tools" to see the JavaScript console.
 * There, you will see the results unit test execution. You are welcome
 * to run the code any way you like, but this is similar to how we will
 * run your code submission.
 * 
 * The Developer Tools in Chrome are available under the "..." menu, 
 * futher hidden under the option "More Tools." In Firefox, they are 
 * under the hamburger (three horizontal lines), also hidden under "More Tools." 
 */

/**
 * Searches for matches in scanned text.
 * @param {string} searchTerm - The word or term we're searching for. 
 * @param {JSON} scannedTextObj - A JSON object representing the scanned text.
 * @returns {JSON} - Search results.
 * */ 
 function findSearchTermInBooks(searchTerm, scannedTextObj) {
    /** You will need to implement your search and 
     * return the appropriate object here. */

    var result = {
        "SearchTerm": searchTerm,
        "Results": []
    };

    // Check for null or undefined scannedTextObj or empty searchTerm.
    if (!scannedTextObj) {
        return result;
    }

    // Search for the searchTerm inside scannedTextObj.
    for (const bookObject of scannedTextObj) {
        // If content is present, search through the Content of the book.
        for (const bookContent of bookObject.Content) {
            // Check if Text string contains searchTerm.
            if (bookContent.Text.includes(searchTerm)) {
                // Insert the valid match found in Text to results.
                result.Results.push({
                    ISBN: bookObject.ISBN,
                    Page: bookContent.Page,
                    Line: bookContent.Line
                });
            }
        }
    }
    
    return result; 
}

/** Example input object. */
const twentyLeaguesIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see, and"
            } 
        ] 
    }
]
    
/** Example output object */
const twentyLeaguesOut = {
    "SearchTerm": "the",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        }
    ]
}

/** Example output JSON for test 3 */
const nullSearchTermOut = {
    "SearchTerm": null,
    "Results": []
}

/** Example output object for test 4 */
const nullScannedTextObjOut = {
    "SearchTerm": "the",
    "Results": []
}

/** Example input object for tests 5, 6, and 7 */
const manyBooksIn = [
    {
        "Title": "Twenty Thousand Leagues Under the Sea",
        "ISBN": "9780000528531",
        "Content": [
            {
                "Page": 31,
                "Line": 8,
                "Text": "now simply went on by her own momentum.  The dark-"
            },
            {
                "Page": 31,
                "Line": 9,
                "Text": "ness was then profound; and however good the Canadian\'s"
            },
            {
                "Page": 31,
                "Line": 10,
                "Text": "eyes were, I asked myself how he had managed to see"
            } 
        ] 
    },
    {
        "Title": "Bible",
        "ISBN": "9780385737951",
        "Content": [
            {
                "Page": 25,
                "Line": 7,
                "Text": "Worship the Lord your God, and his blessing will be on your food and water. I will take away sickness from among you."
            },
            {
                "Page": 197,
                "Line": 12,
                "Text": "My prayer is not that you take them out of the world but that you protect them from the evil one."
            },
            {
                "Page": 13,
                "Line": 19,
                "Text": "To fear the Lord is to hate evil; I hate pride or arrogance, evil behavior or perverse speech."
            }
        ] 
    },
    {
        "Title": "Of Mice and Men",
        "ISBN": "9780544336261",
        "Content": [
            {
                "Page": 123,
                "Line": 5,
                "Text": "A guy needs somebody―to be near him. A guy goes nuts if he ain't got nobody. Don't make no difference who the guy is, long's he's with you. I tell ya, I tell ya a guy gets too lonely an' he gets sick."
            },
            {
                "Page": 23,
                "Line": 44,
                "Text": "I can still tend the rabbits, George? and I didn't mean no harm, George."
            }
        ] 
    }
]
    
/** Example output object for test 5. */
const noSearchMatchOut = {
    "SearchTerm": "Hasnain",
    "Results": []
}

/** Example output object for test 6. */
const searchMatchOut = {
    "SearchTerm": "and",
    "Results": [
        {
            "ISBN": "9780000528531",
            "Page": 31,
            "Line": 9
        },
        {
            "ISBN": "9780385737951",
            "Page": 25,
            "Line": 7
        },
        {
            "ISBN": "9780544336261",
            "Page": 23,
            "Line": 44
        }
    ]
}

/** Example output object for test 7. */
const moreCaseMatchOut = {
    "SearchTerm": "Profound",
    "Results": []
}

/*
 _   _ _   _ ___ _____   _____ _____ ____ _____ ____  
| | | | \ | |_ _|_   _| |_   _| ____/ ___|_   _/ ___| 
| | | |  \| || |  | |     | | |  _| \___ \ | | \___ \ 
| |_| | |\  || |  | |     | | | |___ ___) || |  ___) |
 \___/|_| \_|___| |_|     |_| |_____|____/ |_| |____/ 
                                                      
 */

/* We have provided two unit tests. They're really just `if` statements that 
 * output to the console. We've provided two tests as examples, and 
 * they should pass with a correct implementation of `findSearchTermInBooks`. 
 * 
 * Please add your unit tests below.
 * */

/** We can check that, given a known input, we get a known output. */
const test1result = findSearchTermInBooks("the", twentyLeaguesIn);
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test1result)) {
    console.log("PASS: Test 1");
} else {
    console.log("FAIL: Test 1");
    console.log("Expected:", twentyLeaguesOut);
    console.log("Received:", test1result);
}

/** We could choose to check that we get the right number of results. */
const test2result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (test2result.Results.length == 1) {
    console.log("PASS: Test 2");
} else {
    console.log("FAIL: Test 2");
    console.log("Expected:", twentyLeaguesOut.Results.length);
    console.log("Received:", test2result.Results.length);
}

/** 
 * Test #3 - Null or undefined searchTerm
 * Test Description: This test will check if the function correctly handles null or undefined searchTerm.
*/
const test3result = findSearchTermInBooks(null, twentyLeaguesIn); 
if (JSON.stringify(nullSearchTermOut) === JSON.stringify(test3result)) {
    console.log("PASS: Test 3");
} else {
    console.log("FAIL: Test 3");
    console.log("Expected:", JSON.stringify(nullSearchTermOut));
    console.log("Received:", JSON.stringify(test3result));
}

/** 
 * Test #4 - Null or Undefined scannedTextObj
 * Test Description: This test will check if the function correctly handles null or undefined scannedTextObj.
*/
const test4result = findSearchTermInBooks("the", null); 
if (JSON.stringify(nullScannedTextObjOut) === JSON.stringify(test4result)) {
    console.log("PASS: Test 4");
} else {
    console.log("FAIL: Test 4");
    console.log("Expected:", JSON.stringify(nullScannedTextObjOut));
    console.log("Received:", JSON.stringify(test4result));
}

/**
 * Test #5 - Negative test: More than one book object but no matches
 * Test Description: This test will check if the function correctly handles more than one book object, but there are no matches.
*/
const test5result = findSearchTermInBooks("Hasnain", manyBooksIn); 
if (JSON.stringify(noSearchMatchOut) === JSON.stringify(test5result)) {
    console.log("PASS: Test 5");
} else {
    console.log("FAIL: Test 5");
    console.log("Expected:", JSON.stringify(noSearchMatchOut));
    console.log("Received:", JSON.stringify(test5result));
}

/** 
 * Test #6 - Positive test: More than one book object that has matches
 * Test Description: This test will check if the function correctly handles more than one book object that has matches.
*/
const test6result = findSearchTermInBooks("and", manyBooksIn); 
if (JSON.stringify(searchMatchOut) === JSON.stringify(test6result)) {
    console.log("PASS: Test 6");
} else {
    console.log("FAIL: Test 6");
    console.log("Expected:", JSON.stringify(searchMatchOut));
    console.log("Received:", JSON.stringify(test6result));
}

/** 
 * Test #7 - Case-sensitive test: More than one book object that has matches
 * Test Description: This test will check if the function correctly handles more than one book object that has matches.
*/
const test7result = findSearchTermInBooks("Profound", manyBooksIn); 
if (JSON.stringify(moreCaseMatchOut) === JSON.stringify(test7result)) {
    console.log("PASS: Test 7");
} else {
    console.log("FAIL: Test 7");
    console.log("Expected:", JSON.stringify(moreCaseMatchOut));
    console.log("Received:", JSON.stringify(test7result));
}

/**
 * Test #8 - Negative test: One book object but no matches
 * Test Description: This test will check if the function correctly handles one book object, but there are no matches.
*/
const test8result = findSearchTermInBooks("Hasnain", twentyLeaguesIn); 
if (JSON.stringify(noSearchMatchOut) === JSON.stringify(test8result)) {
    console.log("PASS: Test 8");
} else {
    console.log("FAIL: Test 8");
    console.log("Expected:", JSON.stringify(noSearchMatchOut));
    console.log("Received:", JSON.stringify(test8result));
}

/** 
 * Test #9 - Positive test: One book object that has matches
 * Test Description: This test will check if the function correctly handles one book object that has matches.
*/
const test9result = findSearchTermInBooks("the", twentyLeaguesIn); 
if (JSON.stringify(twentyLeaguesOut) === JSON.stringify(test9result)) {
    console.log("PASS: Test 9");
} else {
    console.log("FAIL: Test 9");
    console.log("Expected:", JSON.stringify(twentyLeaguesOut));
    console.log("Received:", JSON.stringify(test9result));
}

/** 
 * Test #10 - Case-sensitive test: One book object that has matches
 * Test Description: This test will check if the function correctly handles one book object that has matches.
*/
const test10result = findSearchTermInBooks("Profound", twentyLeaguesIn); 
if (JSON.stringify(moreCaseMatchOut) === JSON.stringify(test10result)) {
    console.log("PASS: Test 10");
} else {
    console.log("FAIL: Test 10");
    console.log("Expected:", JSON.stringify(moreCaseMatchOut));
    console.log("Received:", JSON.stringify(test10result));
}