const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubleNumbers = numbers.filter((number) => number > 4);
console.log(doubleNumbers);



const movies = [
  "Прослушка",
  "Мятеж",
  "Молодой Вашингтон",
  "Последний рубеж",
  "Валли",
];
const nameMovie = movies.includes("Валли");
console.log(nameMovie);



const reverseArray = (numbers, movies) => {
  numbers.reverse();
  movies.reverse();
};
reverseArray(numbers, movies);
console.log(numbers, movies);



import { socialMediaComments } from "./commet.js";
const socialMediaCommentsEmails = socialMediaComments.filter(mail => mail.email.includes('.com'));
console.log(socialMediaCommentsEmails);



const postIDs = socialMediaComments.filter (nameid => nameid.id <= 5 ? true : nameid.postId ===2,
  nameid => nameid.id > 5 ? true : nameid.postId ===1
 );
console.log(postIDs);



const onlyIdAndNames = socialMediaComments.map(userInformation => ({
  id: userInformation.id,
  name: userInformation.name}));
console.log(onlyIdAndNames);





const newKey = socialMediaComments.map(key => ({...key, islnvalid: '77'}));
console.log(newKey);


const bodyLenght = newKey.filter((comment) => { 
  if (comment.body.length > 180) {
    return true;
  }
    else {
      return false
    }
  });
console.log(bodyLenght);



const reduceArray = socialMediaComments.reduce((acc, mails) => {
  acc.push(mails.email);
  return acc;
}, []);
console.log(reduceArray);

const mapArray = socialMediaComments.map(userMail => userMail.email);
console.log(mapArray);



const stringreduceArray = reduceArray.toString();
console.log(stringreduceArray);

const joinMapArray = mapArray.join(' - ');
console.log(joinMapArray);