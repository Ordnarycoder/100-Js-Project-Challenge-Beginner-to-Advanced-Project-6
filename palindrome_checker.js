const readline = require('readline');

function reverse_word() {
    let letter = [];  
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Please enter a word: ", (word) => {
        word = word.toLowerCase(); 
        let i = word.length - 1;  

        while (i >= 0) {  
            letter.push(word[i]);  
            i = i - 1;  
        }

        const reversed_word = letter.join("");
        if (word === reversed_word) {
            console.log("It's a palindrome word");
        } else {
            console.log("It's not a palindrome word");
        }
        rl.close();
    });
}

reverse_word();
