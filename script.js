function smoothScroll(event, sectionId) 
{
    event.preventDefault();
    document.getElementById(sectionId).scrollIntoView(
    {
        behavior: 'smooth'
     });
}
