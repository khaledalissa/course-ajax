(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;

        console.log('submitted');

        searchFor(searchedForTest);
    });
})();


function addImage(){

}

function searchFor(text){
    
    const unsplashRequest = new XMLHttpRequest();
    
    unsplashRequest.open('GET', 'https://api.unsplash.com/search/photos?page=1&query=${text}')
    
    unsplashRequest.onload = addImage;
    
    unsplashRequest = addImage;
    
    unsplashRequest.send();
}
