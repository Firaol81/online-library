document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    let currentPage = 0;

    const prevPageButton = document.querySelector("#prev-page");
    const nextPageButton = document.querySelector("#next-page");

    // Function to initialize the book
    const initializeBook = () => {
        pages[currentPage].classList.remove("hidden");
        showCurrentPage();

        // Event listeners for navigation
        prevPageButton.addEventListener("click", showPreviousPage);
        nextPageButton.addEventListener("click", showNextPage);
    };

    const showCurrentPage = () => {
        pages.forEach((page, index) => {
            if (index === currentPage) {
                page.classList.remove("hidden");
            } else {
                page.classList.add("hidden");
            }
        });
    };

    const showPreviousPage = () => {
        if (currentPage > 0) {
            currentPage--;
            showCurrentPage();
        }
    };

    const showNextPage = () => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            showCurrentPage();
        }
    };

    // Initialize the book
    initializeBook();
});
