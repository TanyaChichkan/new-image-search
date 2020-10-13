import * as basicLightbox from "basiclightbox";
import { refs } from "../js/elements";

refs.list.addEventListener("click", (e) => {
  if (e.target.nodeName === "IMG") {
    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600" style="position:relative">
        <button class="close-icon" style="position:absolute; top:20px; right:20px; width:40px; height:40px; border-radius: 50%">X</button>`);

    instance.show();

    const icon = document.querySelector('.close-icon');
    icon.addEventListener('click', e => {
      instance.close();
    })
  }
});

 