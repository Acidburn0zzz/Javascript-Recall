
var nbMoutons = function(array) {
    var moutons = 0;
for(var i= 0; i < array.length; i++) {
    if (array[i] === true) {
        moutons++;
    }
}
        return(moutons);
}


var selectElementsStartingWithA = function(array) {
 function commencerAvecA(mots){
   return mots.charAt(0) == "a";
 }
 return array.filter(commencerAvecA);
};

var selectElementsStartingWithVowel = function(array) {
var vowel = ["a","e","i","o","u","y"];
function premierElem(nom){
 var firstLetter = nom.charAt(0);
 return vowel.indexOf(firstLetter)!==-1;

}
return array.filter(premierElem);
};


var removeNullElements = function(array) {
  //enlever les éléments d'un tableau
  function notNull(elements) {
    return elements !== null;
  }
  return array.filter(notNull);
};

var removeNullAndFalseElements = function(array) {
  function notNullOrFalse(elements) {
    return elements !== null && elements !== false;
  }
  return array.filter(notNullOrFalse);
};

var reverseWordsInArray = function(array) {
  function reverseChar(word) {
    return word.split('').reverse().join('');
  }
  return array.map(reverseChar);
};

var everyPossiblePair = function(array) {
  var res =[];//on cree un tableau dans lequel on va stocker le resultat
  var copyOfArray = array.slice().reverse(); //on stocke dans une variable une copie du tableau inversé (découpé+inversé)

  for (var student1 of array) { //pour l'entrée 0 du tableau qui est stocké dans la variable student1,
    copyOfArray.pop();//on copie l'entrée à la fin de la copie du tableau
    for (var student2 of copyOfArray) { //pour l'entrée 1 du tableau qui est stocké dans la variable student2
      res.push([student1, student2].sort()); //on ajoute le resultat dans le tableau res avec push
    }
  }
  return res.sort();
};

var allElementsExceptFirstThree = function(array) {
  //on fait une copie du tableau et à l'intérieur
  //on enlève tous les éléments supérieurs à l'indice 2 du tableau.

  return array.slice(3,array.length);
};

var addElementToBeginning = function(array, element) {

  array.unshift(element);
  return array;
};

var sortByLastLetter = function(array) {
 function isPalindrome(word){
   for (var i = 0; i < array.length; i++) {
     if (word.length > 2) {
       return true;
       var first = word.shift();
       var last = word.pop();
       if(first !== last) {
         return array.reduce(isPalindrome);
       }
     }
   }
 }
};

var getFirstHalf = function(string) {
  return string.slice(0,3);
};

var makeNegative = function(number) {
  return Math.abs(number) * -1;
};

var numberOfPalindromes = function(array) {
  //copie du tableau avec les lettres inversées
  //if mot tableau1 === mot tableau2, compteur = 1;

  return 'Write your method here';
};

var shortestWord = function(array) {

// faire un .length de chaque mot
//comparer le plus petit
// le retourner
return array.reduce(function(champion, challenger) {
  if (champion.length < challenger.length) {
    return champion;
  }
  else {
    return challenger;
  }
});

};

var longestWord = function(array) {
  return array.reduce(function(champion, challenger) {
    if (champion.length > challenger.length) {
      return champion;
    }
    else {
      return challenger;
    }
  });
};
var sumNumbers = function(array) {
  return array.reduce(function(champion, challenger) {
    return champion + challenger;
  });
};


var repeatElements = function(array) {
  return array.concat(array);
};

var stringToNumber = function(string) {
  return parseInt(string);
};

var calculateAverage = function(array) {
  return array.reduce(function(champion, challenger) {
    return champion + challenger;
  }) / array.length;

};

var getElementsUntilGreaterThanFive = function(array) {
  function checkNumber(elements) {
    return elements > 5;
};
return array.slice(0,array.findIndex(checkNumber));
};





var convertArrayToObject = function(array) {
  return 'Write your method here';
};

var getAllLetters = function(array) {
  return 'Write your method here';
};

var swapKeysAndValues = function(object) {
  return 'Write your method here';
};

var sumKeysAndValues = function(object) {
  return 'Write your method here';
};

var removeCapitals = function(string) {
  return 'Write your method here';
};

var roundUp = function(number) {
  return 'Write your method here';
};

var formatDateNicely = function(date) {
  return 'Write your method here';
}

var getDomainName = function(string) {
  return 'Write your method here';
};

var titleize = function(string) {
  return 'Write your method here';
};

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
};

var squareRoot = function(number) {
  return 'Write your method here';
};

var factorial = function(number) {
  return 'Write your method here';
};

var findAnagrams = function(string) {
  return 'Write your method here';
};

var convertToCelsius = function(number) {
  return 'Write your method here';
};

var letterPosition = function(array) {
  return 'Write your method here';
};
