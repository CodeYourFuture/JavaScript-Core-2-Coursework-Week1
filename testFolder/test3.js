var firstName = {A: 'Alpha', B: 'Beta', C: 'Cache'}
var surname = {A: 'Analogue', B: 'Bomb', C: 'Catalyst'}

function aliasGen(firname, sname){    
      var hackerName;
      var firstFirstName = firname.charAt(0).toUpperCase();
      var firstSurname = sname.charAt(0).toUpperCase();
      if (firstFirstName === firstFirstName.toLowerCase() || firstSurname === firstSurname.toLowerCase()) {
        return "Your name must start with a letter from A - Z."
      } else {
        return hackerName = `${firstName[firstFirstName]} ${surname[firstSurname]}`
      }    
    }


console.log(aliasGen("Alex", "Bex"))