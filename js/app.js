const nav_links = document.querySelectorAll(".nav__item-link");
const sub_links = document.querySelectorAll(".sub_link");

function collapse_nav(head, toggler, sidenav) {
    const header = document.getElementById(head);
    const nav_toggler = document.getElementById(toggler);
    const nav = document.getElementById(sidenav);

    nav_toggler.addEventListener("click", function() {
        this.classList.toggle("fa-times");
        nav.classList.toggle("collapse");
        header.classList.toggle("collapse-header");
    });
}

collapse_nav("header", "nav-toggler", "nav");

nav_links.forEach((link) => {
    link.addEventListener("click", function() {
        nav_links.forEach((l) => {
            if (l.classList.contains("active")) {
                l.classList.remove("active");
            }
        });

        this.classList.toggle("active");
        const sub_menu = this.nextElementSibling;
        if (sub_menu) {
            sub_menu.classList.toggle("d-none");
        }
    });
});

sub_links.forEach((link) => {
    link.addEventListener("click", () => {
        sub_links.forEach((l) => l.classList.remove("active-sub-link"));
        link.classList.toggle("active-sub-link");
    });
});



// let tabHeader = document.getElementsByClassName("tab-header")[0];
// let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
// let tabBody = document.getElementsByClassName("tab-body")[0];

// let tabsPane = tabHeader.getElementsByTagName("div");

// for (let i = 0; i < tabsPane.length; i++) {
//     tabsPane[i].addEventListener("click", function() {
//         tabHeader.getElementsByClassName("active_1")[0].classList.remove("active_1");
//         tabsPane[i].classList.add("active_1")
//         tabBody.getElementsByClassName("active_1")[0].classList.remove("active_1");
//         tabBody.getElementsByTagName("div")[i].classList.add("active_1");

//         tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
//     })
// }

// (function() {

//     document.addEventListener('DOMContentLoaded', function(event) {

//         var list = document.querySelectorAll('.make-snippet');

//         [].forEach.call(list, function(el) {
//             var snippet = el.innerHTML.replace(/</g, '&lt;');
//             snippet = snippet.replace(/ /g, '&nbsp;');
//             var code = '<pre class="language-markup"><code>' + snippet + '</pre></code>';
//             el.insertAdjacentHTML('afterend', code);
//         });

//         // if your page has prism.js you get syntax highlighting
//         // if (window.Prism) {
//         //     Prism.highlightAll(false);
//         // }

//     });

// })();