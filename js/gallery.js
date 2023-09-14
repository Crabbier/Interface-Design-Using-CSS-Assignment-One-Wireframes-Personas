document.addEventListener("DOMContentLoaded", function() {
    let watchGallery = document.getElementById("watchGallery");
    let watchLinks = watchGallery.querySelectorAll("a");
    for (var i=0; i < watchLinks.length; i++) {
        watchLinks[i].onclick = function() {
            let watchHref = this.getAttribute("href");
            let watchImage = document.getElementById("watchImage");
            watchImage.setAttribute("src", watchHref);
            let watchCaption = this.getAttribute("title");
            let watchCaptionParagraph = document.getElementById("watchCaption");
            watchCaptionParagraph.firstChild.nodeValue = watchCaption;
            return false;
        }
    }
});