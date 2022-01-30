const ajax = new XMLHttpRequest();
const NEWS_URL = "https://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "https://api.hnpwa.com/v0/item/@id.json";

const store = {
  currentPage: 1,
};

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

  for (let i = (store.currentPage - 1) * 10; i < store.currentPage * 10; i++) {
    console.log(i);
    newsList.push(`<li>
      <a href="#/show/${newsFeed[i].id}">${newsFeed[i].title}(${newsFeed[i].comments_count})</a>
    </li>`);
  }

  newsList.push("</ul>");

  newsList.push(`<div>
    <a href="#/page/${store.currentPage > 1 ? store.currentPage - 1 : 1}">이전 페이지</a>
    <a href="#/page/${store.currentPage < newsFeed.length / 10 ? store.currentPage + 1 : newsFeed.length / 10}">다음 페이지</a>
  </div>`);

  container.innerHTML = newsList.join("");
}

function newsDetail() {
  const id = window.location.hash.substring(7);

  const newsContent = getData(CONTENT_URL.replace("@id", id));

  container.innerHTML = `<div>
      <h1>${newsContent.title}</h1>
      <div>
        <a href="#/page/${store.currentPage}">목록으로</a>
      </div>
    </div>`;
}

function router() {
  const routePath = window.location.hash;

  if (routePath === "") {
    newsFeed();
  } else if (routePath.indexOf("#/page/") >= 0) {
    store.currentPage = Number(routePath.substring(7));
    newsFeed();
  } else {
    newsDetail();
  }
}

window.addEventListener("hashchange", router);

router();
