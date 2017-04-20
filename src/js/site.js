document.addEventListener("DOMContentLoaded", function() {

        /* Mobile menu icon button */
        document.getElementById("mobile-menu-icon").addEventListener("click", function() {
            this.classList.toggle("open");
            document.getElementById("nav-icon").classList.toggle("open");
            document.getElementById("categories-bar").classList.toggle("open");
        });

        /* Mobile search icon button */
        document.getElementById("mobile-search-icon").addEventListener("click", function() {
            document.getElementsByTagName("header")[0].classList.toggle("search-open");
            document.getElementsByTagName("body")[0].classList.toggle("search-open");
            //document.getElementById("search").focus();
        });

        /* Mobile search cancel button */
        document.getElementById("mobile-search-cancel").addEventListener("click", function() {
            document.getElementsByTagName("header")[0].classList.toggle("search-open");
            document.getElementsByTagName("body")[0].classList.toggle("search-open");
        });

        /* Keep the placeholder hidden if someone has entered text and left the box */
        document.getElementById("search").addEventListener("blur", function() {
            var labelSpans = this.nextElementSibling.querySelectorAll("span");
            if (this.value == "") {
                for (var i = 0; i < labelSpans.length; ++i) {
                    labelSpans[i].classList.remove("hide");
                }
            } else {
                for (var i = 0; i < labelSpans.length; ++i) {
                    labelSpans[i].classList.add("hide");
                }
            }
        });

        /* Start searching when you start typing */
        window.addEventListener("keydown", function(event) {
            event = event || window.event;
            /* THIS IS WHERE WE DO A CHECK TO MAKE SURE THE USER ISN'T IN ANOTHER INPUT BOX */
            /* ALSO WILL PROBABLY ONLY WANT TO DO THIS ON CERTAIN KEYS */
            /* WILL ALSO NEED PLENTY OF TESTING TO MAKE SURE THE FIRST KEYSTROKE OR TWO AREN'T MISSED */
            if (document.activeElement.tagName != "INPUT" && document.activeElement.tagName != "TEXTAREA") {
                document.getElementById("search").focus();
            }
        });

        /* Show/Hide the side cart when the icon is clicked */
        document.getElementById("cart-icon").addEventListener("click", function() {
            document.getElementsByClassName("side-cart")[0].classList.toggle("show");
        });

        /* Show/Hide Filter Dropdowns */
        filterBtns = document.querySelectorAll(".filter-container button");
        for (var i = 0; i < filterBtns.length; i++) {
            filterBtns[i].addEventListener("click", function() {
                for (var j = 0; j < filterBtns.length; j++) {
                    if (filterBtns[j] != this) {
                        filterBtns[j].nextElementSibling.classList.remove("open");
                    }
                }
                this.nextElementSibling.classList.toggle("open");
            });
        }

});