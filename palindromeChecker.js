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

