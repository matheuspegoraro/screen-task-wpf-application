$(function () {
    let refreshInterval = 500;

    let timer = setInterval(function () {
        let ImagePreview = document.getElementById('imgPrev');
        ImagePreview.src = 'ScreenTask.jpg?rand=' + Math.random();
    }, refreshInterval);
});