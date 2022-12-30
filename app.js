const sharebuttons = document.querySelectorAll('.tile-share-button')
console.log(sharebuttons)
async function copyText(e) {
    //prevent button going to site
    e.preventDefault()
    const link= this.getAttribute('link')
    console.log(link)
    try{
         await navigator .clipboard.writeText(link)
         alert("copied the text: " + link)
    } catch(err){
    console.error(err)
    }
}

sharebuttons.forEach(shareButton => shareButton.addEventListener('click', copyText))