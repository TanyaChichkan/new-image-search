import { refs } from "./elements";
import "../css/style.css";

const apiKey = "18624204-8f07c9501328e2a8f9ff8c349";


export default {
  _query: "cat",
  page: 1,
  perPage: 12,

  async fetchImages() {
    let url = `https://pixabay.com/api?image_type=photo&orientation=horizontal&q=${this._query}&page=${this.page}&per_page=12&key=${apiKey}`;


    try {
      this.response = await fetch(url);
      this.data = await this.response.json();
      return this.data.hits;
      
    } catch(error) {
      throw displayError(error);
    }
    
  },

  setPage() {
    return (this.page += 1);
  },

  get query() {
    return this._query;
  },

  set query(newQuery) {
    this._query = newQuery;
  },
};

function displayError(error) {
  const heading = document.createElement("h2");
  heading.textContent = error;
  refs.body.prepend(error);
}
