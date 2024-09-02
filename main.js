const axios = require("axios");
const cheerio = require("cheerio");
let url = "https://github.com/topics";
const request = require("request");
const getReposPageHtml = require("./reposPage");
request(url, cb);
// this print the html of the topics page.
function cb(err, response, html) {
  if (err) {
    console.log(err);
  } else if (response.statusCode == 404) {
    console.log("page not found");
  } else {
    getTopicLinks(html);
  }
}
function getTopicLinks(html) {
  let $ = cheerio.load(html);
  let linkElemArr = $(".no-underline.d-flex.flex-column.flex-justify-center");
  for (let i = 0; i < linkElemArr.length; i++) {
    let href = $(linkElemArr[i]).attr("href");
    let topic = href.split("/").pop();
    //console.log(href); //here we got the link of the topics.
    let fullLink = `https://github.com/${href}`;
    // console.log(fullLink);
    getReposPageHtml(fullLink, topic);
  }
}
