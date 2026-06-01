

        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname, element) {

            // remove active class from all tab links
            for (let tablink of tablinks) {
                tablink.classList.remove("active-link");
            }

            // hide all tab contents
            for (let tabcontent of tabcontents) {
                tabcontent.classList.remove("active-tab");
            }

            // add active class to clicked tab
            element.classList.add("active-link");

            // show selected tab content
            document.getElementById(tabname).classList.add("active-tab");
        }

   
        var sidemenu = document.getElementById("sidemenu");

        function openmenu() {
            sidemenu.style.right = "0";
        }
        function closemenu() {
            closemenu.style.right = "-200px";
        }
   
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwy9CLMKcVIK-6T_J1dXXH1Jx-z6-LtGLjEUG6CPGolvTEID7rqRMd5BlDC6pabFR-VFA/exec'
        const form = document.forms['submit-to-google-sheet']

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => response.json())
                .then(response => console.log('Success!', response))
                .catch(error => console.error('Error!', error.message))
        })
   