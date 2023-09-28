// 6. Vowel Counter
// We want to count the number of vowels in a person's name. Given a name as input, the program should iterate
// through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should be
// counted?


function countVowel(name){
    let count = 0;
    for (let i = 0; i < name.length; i++) {
        if (name[i] === 'a' || name[i] === 'e' || name[i] === 'i' || name[i] === 'o' || name[i] === 'u') {
            count++;
        }
    }
    return count;
}    
let result = countVowel("hasan");

console.log("Total Vowel present in Name is : "+result);