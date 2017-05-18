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

        /* SEARCH BOX: Keep the placeholder hidden if someone has entered text and left the box */
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

        /* FORMS: Keep the label up top if someone enters text then leaves the box */
        var inputs = document.querySelectorAll(".input-group input, .input-group textarea");
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener("blur", function() {
                if (this.value == "") {
                    this.classList.remove("filled");
                } else {
                    this.classList.add("filled");
                }
            });
        }

        /* Show/Hide the side cart when the icon is clicked */
        document.getElementById("cart-icon").addEventListener("click", function() {
            document.getElementsByClassName("side-cart")[0].classList.toggle("show");
        });

        /* Show/Hide Filter Dropdowns */
        var filterBtns = document.querySelectorAll(".filter-container button");
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

        /* Checkout Accordions */
        var checkoutAccordions = document.querySelectorAll("#checkout-forms-container .form-container .title-bar");
        for (var i = 0; i < checkoutAccordions.length; i++) {
            checkoutAccordions[i].addEventListener("click", function() {
                this.parentNode.classList.toggle("active");
            });
        }

        /* Show Profile Metrics On Mobile */
        var profileStats = document.querySelectorAll(".profile-stats");
        for (var i = 0; i < profileStats.length; i++) {
            profileStats[i].addEventListener("click", function() {
                document.querySelectorAll(".profile-show-btn")[0].classList.toggle("open");
                document.querySelectorAll(".profile-metrics")[0].classList.toggle("open");
            });
        }

});