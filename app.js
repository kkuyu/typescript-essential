const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

const container = document.getElementById("root");
const content = document.createElement("div");

function getData(url) {
  ajax.open("GET", url, false);
  ajax.send();

  return JSON.parse(ajax.response);
}

function newsFeed() {
  const newsFeed = getData(NEWS_URL);
  const newsList = [];

  newsList.push("<ul>");

  for (let i = 0; i < 10; i++) {
    newsList.push(`<li>
      <a href="#${newsFeed[i].id}">${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
    </li>`);
  }

  newsList.push("</ul>");

  container.innerHTML = newsList.join("");
}

function newsDetail() {
  const id = window.location.hash.substring(1);

  const newsContent = getData(CONTENT_URL.replace("@id", id));

  container.innerHTML = `<div>
      <h1>${newsContent.title}</h1>
      <div>
        <a href="#">목록으로</a>
      </div>
    </div>`;
}

function router() {
  const routePath = window.location.hash;

  if (routePath === "") {
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener("hashchange", router);

router();
