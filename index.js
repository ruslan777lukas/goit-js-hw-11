import{S as u,a as d,i as c}from"./assets/vendor-CdFkFrfs.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function m(o){const{largeImageURL:r,webformatURL:n,tags:a,likes:e,views:t,comments:i,downloads:p}=o;return`<li class="photo-card">
  <a class="gallery-link" href="${r}">
    <img
      class="gallery-image"
      src="${n}"
      alt="${a}"
    />
  </a>
  <div class="info">
        <p>Likes: <span class="likes">${e}</span></p>
        <p>Views: <span class="views">${t}</span></p>
        <p>Comments: <span class="comments">${i}</span></p>
        <p>Downloads: <span class="downloads">${p}</span></p>
      </div>
</li>`}new u(".gallery a",{captionsData:"alt",captionDelay:250});function f(){s.gallery.classList.add("hidden"),s.loader.classList.remove("hidden")}function l(){s.loader.classList.add("hidden"),s.gallery.classList.remove("hidden")}function g(o){return l(),o.map(m).join("")}const s={form:document.querySelector(".search-form"),input:document.querySelector("#input"),button:document.querySelector("button-search"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader-box")};new u(".gallery a",{captionsData:"alt",captionDelay:250});function h(o){const r="https://pixabay.com/api/",a={key:"49126238-069e1a94ee3ccc35c34a34de0",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"};return d.get(r,{params:a}).then(({data:e})=>{if(e.hits.length===0)c.info({title:"No Results",message:"No images found for your search.",position:"topRight"});else{s.input.value="";const t=g(e.hits);s.gallery.innerHTML=t,l()}}).catch(e=>{l(),c.error({title:"Error",message:"❌ Error fetching images. Please try again!",position:"topRight"})})}s.form.addEventListener("submit",o=>{o.preventDefault();const r=o.target.elements.input.value.trim();if(f(),!r){c.error({title:"Error",message:"Please enter a search query.",position:"topRight"}),l();return}h(r)});
//# sourceMappingURL=index.js.map
