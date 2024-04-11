import { toggleLoading } from "./loading.js";
import { delay, fetchData } from "./utils.js";
import { displayNewsList, displayNewsContent } from "./render.js";

export async function displayInitialPage() {
  toggleLoading(true);
  await delay(2000);
  const newsTitleList = await fetchData("/api/news/list");
  const firstNewsId = newsTitleList[0].id;
  const selectedNews = await fetchData(`/api/news/${firstNewsId}`);
  toggleLoading(false);
  displayNewsList(newsTitleList);
  displayNewsContent(selectedNews);
}