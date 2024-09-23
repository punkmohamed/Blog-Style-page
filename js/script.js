
// backToTopButton logic

//accessing the button we want to implment the function
const backToTopButton = document.getElementById('up');


//makeing the button appearing on when he scrolls
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};

//adding the event to scroll to the top 
backToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
