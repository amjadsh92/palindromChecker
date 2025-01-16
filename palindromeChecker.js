const checkBox = document.getElementById("check-box");
const checkButton = document.getElementById("check-btn");
const inputWord = document.getElementById("text-input");

checkButton.addEventListener("click", () => result(inputWord.value));

const isPalindrome = (word) => {
  const regex = /[^a-zA-Z0-9]/g;
  word = word.toLowerCase();
  word = word.replace(regex, "");

  let max = word.length -1  ;

  for (let i = 0; i < Math.floor(max / 2 + 1); i++) {
    if (word[i] !== word[max - i]) {
      return false;
    }
  }

  return true;
};

const result = (word) => {
  
  

  if(word === ""){
    
    alert("Please input a value")
    return
  }

  

  const resultElement = document.getElementById("result")
  resultElement.style.display="block";
  
  const textResult = isPalindrome(word)
    ? `${word} is a Palindrome.`
    : `${word} is not a Palindrome.`;
  resultElement.textContent = textResult;
  checkBox.appendChild(resultElement);
};