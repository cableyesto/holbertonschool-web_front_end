function createElement(data) {
    let newParagraph = document.createElement("p");
    newParagraph.appendChild(document.createTextNode(data));
    document.body.appendChild(newParagraph);
}

function queryWikipedia(callback) {
    const wikiURL = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', wikiURL);

    xhr.onerror = function() {
        console.error("Request failed");
    };

    xhr.onload = function() {
        if (xhr.status != 200) {
            console.error(`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            let responseObj = xhr.response;

            let pages = responseObj.query.pages;
            let pageId = Object.keys(pages)[0];
            let extract = pages[pageId].extract;

            // Use the callback
            callback(extract);
        }
    };

    xhr.send();
}

queryWikipedia(createElement);