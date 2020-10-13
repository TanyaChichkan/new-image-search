import apiService from "../js/apiService";
import markupTempl from "../templates/markup.hbs";
import { refs } from "../js/elements";
import debounce from "lodash.debounce";
import modal from './modal';
import "@babel/polyfill";

console.log(refs);

// const loadMore = document.createElement("button");
// loadMore.classList.add("btn-loading");
// loadMore.textContent = "Load more";

function RenderItems(data) {
  const items = markupTempl(data);
  refs.list.insertAdjacentHTML("beforeend", items);
  if (refs.list.children) {
    // refs.body.insertAdjacentElement("beforeend", refs.btnLoad);
    refs.btnLoad.classList.add("is-open");
  } else {
    refs.btnLoad.classList.remove("is-open");
  }
}

refs.input.addEventListener(
  "input",
  debounce((event) => {
    event.preventDefault;
    apiService.query = event.target.value;
    renderApi();
    refs.input.value = "";
    refs.list.innerHTML = "";
  }, 500));

function renderApi() {
  apiService.fetchImages().then((data) => {
    console.log(data);
    RenderItems(data);
  });
}

const startheight = document.documentElement.offsetHeight;
console.log(startheight);

refs.btnLoad.addEventListener("click", () => {
  apiService.setPage();
  renderApi();
 
  setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.offsetHeight - 1200,
      behavior: "smooth"
    });
  }, 500);
  
  console.dir(document.documentElement);
});






