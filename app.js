const commercialDOM = document.getElementById("commercial");
const weddingDOM = document.getElementById("wedding");
const eventDOM = document.getElementById("event");
const festivalDOM = document.getElementById("festival");

let buttonsDOM = [];


// pictures fucntionality

class Pictures {
    async getPhotos() {
        try {
            const response = await fetch('appdata.json');
            const data = await response.json();

            let pictures = data.photography;
            pictures = pictures.map(item => {
                const {id} = item;
                const {url} = item;
                const {tag} = item;
                return { id, url, tag };
            })
            return pictures;
        } catch (error) {
            console.error('Error fetching photos:', error);
        }
    }
}

class PicturesUI {
    displayPictures(pictures) {

        let commercialRes = '';
        let weddingRes = '';
        let eventRes = '';
        let festivalRes = '';

        pictures.forEach(picture => {
            console.log(picture.tag);
            console.log(picture.id);
            console.log(picture.url);

            if (picture.tag === "event") {
                eventRes += `
                    <div class="gallery-item">
                        <img src="${picture.url}" alt="${picture.tag}">
                    </div>
                `;
                
            } else if (picture.tag === "commercial") {
                commercialRes += `
                    <div class="gallery-item">
                        <img src="${picture.url}" alt="${picture.tag}">
                    </div>
                `;
            } else if (picture.tag === "wedding") {
                weddingRes += `
                    <div class="gallery-item">
                        <img src="${picture.url}" alt="${picture.tag}">
                    </div>
                `;
            } else if (picture.tag === "festival") {
                festivalRes += `
                    <div class="gallery-item">
                        <img src="${picture.url}" alt="${picture.tag}">
                    </div>
                `;
                
            } else (
                console.log("No matching tag found for picture:", picture.tag)
            )
        });

        console.log(festivalRes)
        // const festivalDOM = document.getElementById('festival');
        // if (festivalDOM) {
        //     festivalDOM.innerHTML = festivalRes;
        // } else {
        //     console.log("Festival DOM not found");
        // }
        document.getElementById('festival').innerHTML = festivalRes;
        document.getElementById("event").innerHTML = eventRes;
        document.getElementById("commercial").innerHTML = commercialRes;
        document.getElementById("wedding").innerHTML = weddingRes;
        
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const picturesUI = new PicturesUI();
    const pictures = new Pictures();

    pictures.getPhotos().then(pictures => {
        picturesUI.displayPictures(pictures);
    }).catch(error => {
        console.error('Error displaying pictures:', error);
    });

})