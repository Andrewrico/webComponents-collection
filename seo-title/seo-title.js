/*
https://github.com/Andrewrico/webComponents-collection/tree/master/seo-title
https://andrewrico.com/
# Released under MIT License
Copyright (c) 2020 Andrew Rico.
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNEC
*/

const SEOTitleCSS = `:host {display: block;color:red;}`;
const SEOTitleHTML = `<h1><slot></slot></h1>`;
const SEOTitleTemplate = document.createElement("template");
SEOTitleTemplate.innerHTML = `<style>`.concat(SEOTitleCSS, `</style>`).concat(SEOTitleHTML);

customElements.define('seo-title',
    class extends HTMLElement {

        constructor() {
            super();

            const shadowRoot = this.attachShadow({
                mode: "open"
            });

            this.textContent = this.getAttribute('text');

            shadowRoot.appendChild(SEOTitleTemplate.content.cloneNode(!0));
            return this;

        }
    }
);