const checkBox = document.getElementById("check-box")
const checkButton = document.getElementById("check-btn")
const inputWord = document.getElementById("text-input")


checkButton.addEventListener("click",() => result(inputWord.value))



const isPalindrome = (word) => 

    {
         const regex = /\s/g;
         word = word.toLowerCase()
         word = word.replace(regex,"")       

         let max = word.length -1

        for(let i = 0; i < Math.floor(max / 2); i++){
            if (word[i] !== word[max -i]){
                return false
            }
        }

        return true


    }



const result = (word) =>{
    debugger;
    const resultElement = document.createElement("p")
    console.log(resultElement)

    const textResult =  isPalindrome(word) ? `${word} is a Palindrome.` : `${word} is not a Palindrome.`


    resultElement.textContent = textResult;

    checkBox.appendChild(resultElement)

    return resultElement




}