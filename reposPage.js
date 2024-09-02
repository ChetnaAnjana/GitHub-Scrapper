const axios = require("axios");
const cheerio = require("cheerio");
const request = require("request");
const getIssuesPageHtml = require("./issue");
function getReposPageHtml(url, topic) {
  request(url, cb);
  function cb(err, response, html) {
    if (err) {
      console.log(err);
    } else if (response.statusCode == 404) {
      console.log("page not found");
    } else {
      getReposLink(html);
      //console.log(html);
    }
  }
  function getReposLink(html) {
    let $ = cheerio.load(html);
    let headingsArr = $(".f3.color-fg-muted.text-normal.lh-condensed");
    console.log(topic);
    console.log("----------------------");
    for (let i = 0; i < 8; i++) {
      let twoAnchors = $(headingsArr[i]).find("a");
      let link = $(twoAnchors[1]).attr("href");
      // console.log(link);
      let fullLink = `https://github.com${link}/issues`;
      let repoName = href.split("/").pop();
      //console.log(fullLink);
      getIssuesPageHtml(fullLink, topic, repoName);
    }
  }
}
module.exports = getReposPageHtml;
