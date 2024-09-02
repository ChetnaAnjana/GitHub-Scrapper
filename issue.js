const axios = require("axios");
const cheerio = require("cheerio");
const request = require("request");
function getIssuesPageHtml(url, topic, repoName) {
  request(url, cb);
  function cb(err, response, html) {
    if (err) {
      console.log(err);
    } else if (response.statusCode == 404) {
      console.log("page not found");
    } else {
      //getReposLink(html)
      //console.log(html);
      getIssues(html);
    }
  }
  function getIssues(html) {
    let $ = cheerio.load(html);
    let issuesElemArr = $(
      ".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title"
    );
    console.log(issuesElemArr.length);
    let arr = [];
    for (let i = 0; i < issuesElemArr.length; i++) {
      let link = $(issuesElemArr[i]).attr("href");
      console.log(link);
      arr.push(link);
    }
    //console.log(topic, "     ", arr);
  }
}
module.exports = getIssuesPageHtml;
