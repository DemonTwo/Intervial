const selectElement = (element) => document.querySelector(element);

selectElement('.menu-icons').addEventListener( 'click',() => {
    selectElement('nav').classList.toggle('active');
    selectElement('.sub-menu').classList.toggle('show');
});