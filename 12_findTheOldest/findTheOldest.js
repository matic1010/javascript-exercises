const findTheOldest = function(people) {
  return people.reduce((oldest, current) => {
    const oldestAge = getAge(oldest)
    const currentAge = getAge(current)
    return oldestAge > currentAge ? oldest : current
  })
};

const getAge = function(person) {
  if(!person.yearOfDeath) {
    return new Date().getFullYear() - person.yearOfBirth;
  } else {
    return person.yearOfDeath - person.yearOfBirth;
  }
}



// Do not edit below this line
module.exports = findTheOldest;
