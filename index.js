const axios = require("axios");
const cheerio = require("cheerio");
const url = "https://flickfocus.com/movies/it-ends-with-us";
// async function getMovieName() {
//   try {
//     const response = await axios.get(url);
//     const $ = cheerio.load(response.data);
//     const name = $(".text-xl.lg\\:text-3xl.text-gray-800.dark\\:text-gray-200")
//       .text()
//       .trim();
//     console.log(name);

//     const year = $(".lg\\:hidden.mr-3").text().trim();
//     console.log("Year:", year);
//   } catch (error) {
//     console.error(error);
//   }
// }
// getMovieName();

async function getTopics() {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const topic = $(".f3.lh-condensed.text-center.Link--primary.mb-0.mt-1")
      .text()
      .trim();
    console.log(topic);
  } catch (error) {
    console.error(error);
  }
}
getTopics();
