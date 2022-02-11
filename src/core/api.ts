import { NewsFeed, NewsDetail } from "../types";
import { NEWS_URL, CONTENT_URL } from "../config";

function applyApiMixins(targetClass: any, baseClasses: any[]): void {
  baseClasses.forEach((baseClass) => {
    Object.getOwnPropertyNames(baseClass.prototype).forEach((name) => {
      const descriptor = Object.getOwnPropertyDescriptor(baseClass.prototype, name);
      if (descriptor) {
        Object.defineProperty(targetClass.prototype, name, descriptor);
      }
    });
  });
}

export class Api {
  getRequestWithXhr<AjaxResponse>(url: string, cb: (data: AjaxResponse) => void): void {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.addEventListener("load", () => {
      cb(JSON.parse(xhr.response) as AjaxResponse);
    });
    xhr.send();
  }

  getRequestWithPromise<AjaxResponse>(url: string, cb: (data: AjaxResponse) => void): void {
    fetch(url)
      .then((response) => response.json())
      .then(cb)
      .catch(() => {
        console.error("데이터를 불로오지 못했습니다.");
      });
  }

  async getRequest<AjaxResponse>(url: string): Promise<AjaxResponse> {
    const response = await fetch(url);
    return (await response.json()) as AjaxResponse;
  }
}

class NewsFeedApi {
  getDataWithXhr(cb: (data: NewsFeed[]) => void): void {
    return this.getRequestWithXhr<NewsFeed[]>(NEWS_URL, cb);
  }

  getDataWithPromise(cb: (data: NewsFeed[]) => void): void {
    return this.getRequestWithPromise<NewsFeed[]>(NEWS_URL, cb);
  }

  async getData(): Promise<NewsFeed[]> {
    return this.getRequest<NewsFeed[]>(NEWS_URL);
  }
}

class NewsDetailApi {
  getDataWithXhr(id: string, cb: (data: NewsDetail) => void): void {
    return this.getRequestWithXhr<NewsDetail>(CONTENT_URL.replace("@id", id), cb);
  }

  getDataWithPromise(id: string, cb: (data: NewsDetail) => void): void {
    return this.getRequestWithPromise<NewsDetail>(CONTENT_URL.replace("@id", id), cb);
  }

  async getData(id: string): Promise<NewsDetail> {
    return this.getRequest<NewsDetail>(CONTENT_URL.replace("@id", id));
  }
}

interface NewsFeedApi extends Api {}
interface NewsDetailApi extends Api {}

applyApiMixins(NewsFeedApi, [Api]);
applyApiMixins(NewsDetailApi, [Api]);

export { NewsFeedApi, NewsDetailApi };
