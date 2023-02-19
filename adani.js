require("dotenv").config();

const { CommentStream } = require("snoostorm");
const Snoowrap = require("snoowrap");

const r = new Snoowrap({
  userAgent: "adani-bot",
  clientId: process.env.REDDIT_APP_ID,
  clientSecret: process.env.REDDIT_APP_SECRET,
  username: process.env.REDDIT_USER,
  password: process.env.REDDIT_PASS,
});

const stream = new CommentStream(r, {
  subreddit: "IndianStockMarket",
  results: 25,
});

stream.on("item", (comment) => {
  if (randomTrueFalseGeneratorWithProbability(0.2)) {
    //   don't reply to the comment if the author is AutoModerator
    if (comment.author === "AutoModerator") {
      return;
    }

    //   reply to the comment with a random string from the array
    const reply = RandomStrArr[Math.floor(Math.random() * RandomStrArr.length)];
    comment.reply(reply);
  }
});

const RandomStrArr = [
  "Go All in on Adani Ports",
  "Go All in on Adani Enterprises",
  "Adani Enterprises is the next Reliance",
  "Hindenburg are attacking the Indian Stock Market, buy Adani Ports",
  "Adani Wilmar will go to the Moon",
];

const randomTrueFalseGeneratorWithProbability = (probability) => {
  return Math.random() < probability;
};
