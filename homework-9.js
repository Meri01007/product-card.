import { socialMediaComments } from "./commet.js";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filteredByFive = numbers.filter((number) => number > 4);
console.log(filteredByFive);

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

const socialMediaCommentsEmails = socialMediaComments.filter((mail) =>
  mail.email.includes(".com"),
);
console.log(socialMediaCommentsEmails);

const refreshedPostIDs = socialMediaComments.map((comments) => ({
  ...comments,
  postId: comments.id <= 5 ? 2 : 1
}));
console.log(refreshedPostIDs);

const commentNames = socialMediaComments.map((userInformation) => ({
  id: userInformation.id,
  name: userInformation.name,
}));
console.log(commentNames);

const validatedСomments = socialMediaComments.map((comment) => ({
  ...comment,
  isInvalid:  comment.body.length > 180 ? true : false
}));
console.log(validatedСomments);

const commentEmailsByReduce = socialMediaComments.reduce((acc, mails) => {
  acc.push(mails.email);
  return acc;
}, []);
console.log(commentEmailsByReduce);

const commentEmails = socialMediaComments.map((userMail) => userMail.email);
console.log(commentEmails);

const commentEmailsString = commentEmailsByReduce.toString();
console.log(commentEmailsString);

const commentEmailsByJoin = commentEmails.join(" - ");
console.log(commentEmailsByJoin);