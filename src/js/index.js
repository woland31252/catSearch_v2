import { fetchBrreds, fetchCatByBreed } from "./cat-api.js";
import SlimSelect from 'slim-select';
import 'slim-select/dist/slimselect.css';

const select = document.querySelector('breed-select');
const loader = document.querySelector('loader');
const error = document.querySelector("error");
const catinfo = document.querySelector("cat-info");

fetchBrreds().then(data => {
    // console.log(data);
    data.reduce((markup, element) => { return { text: element.name, value: element.id } + markup }, [])
    
})
.then(onSelect)

function onSelect(markup) {
console.log(markup);
  new SlimSelect({
    select: select,
    data: markup,
    settings: {
      placeholderText: 'Select any breed',
      selected: true,
    },
  });
}