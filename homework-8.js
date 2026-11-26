const userData = {
  name: "Meret",
  surname: "Pyhyyev",
  age: 30,
  city: "Gumdag",
  country: "Turkmenistan",
  job: "unemployed",
  language: "Russian",
  "e-mail": "bely0102@gmail.com",
};

const carDetailes = {
  make: "Toyota",
  model: "Camry",
  year: 2025,
  color: "white",
  transmission: "automatic",
};

carDetailes.owner = userData;

function checkSpeed(car) {
  if ("maxspeed" in car) console.log(car.maxspeed);
  else {
    car.maxspeed = 150;
  }
}

checkSpeed(carDetailes);

carDetailes.maxspeed = 200;

function checkValueObject(obj, key) {
  if (key in obj) {
    console.log(obj[key]);
  }
}

const products = [
  "Увлажняющий мусс",
  "Увлажняющая маска",
  "Гель для умывания",
  "Подарочный набор №1",
  "Подарочный набор №5",
];

const movies = [
  {
    title: "Прослушка",
    rate: 9.3,
    country: "США",
    year: 1999,
    genre: "Криминал, Триллер, Драма",
  },
  {
    title: "Мятеж",
    rate: 0.0,
    country: "Великобритания",
    year: 2026,
    genre: "Криминал, Триллер, Боевик",
  },
  {
    title: "Молодой Вашингтон",
    rate: 7.5,
    country: "США",
    year: 2026,
    genre: "Биография, История",
  },
];

const luckyStrike = {
  title: "Последний рубеж",
  rate: 5.9,
  country: "США",
  year: 2026,
  genre: "Военный, История, Драма, Боевик",
};

movies.push(luckyStrike);

const cartoons = [
  {
    title: "Валли",
    rate: 8.4,
    country: "США",
    year: 2008,
    genre: "Приключения, Семейный, Фантастика",
  },
  {
    title: "Рататуй",
    rate: 8.1,
    country: "США",
    year: 2007,
    genre: "Комедия, Приключения, Семейный, Фэнтези, Драма",
  },
  {
    title: "Ральф",
    rate: 7.7,
    country: "США",
    year: 2012,
    genre: "Комедия, Детские, Приключения, Семейный, Фэнтези",
  },
];

const allmovies = [...cartoons, ...movies];

const checkMovieYear = allmovies.map((movie) => {
  return {
    isRare: movie.year > 2000,
  };
});