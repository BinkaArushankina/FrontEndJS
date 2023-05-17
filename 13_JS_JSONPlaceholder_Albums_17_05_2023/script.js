const url = 'jsonplaceholder.typicode.com/';

fetch(`${url}albums`) 
    .then(res => res.json())
    .then(albums => {
        const albumList = document.getElementById('albumList');

        albums.forEach(album => {
            const albumCard = document.createElement('div');
            albumCard.classList.add('albumCard');

            const title = document.createElement('h3');
            title.classList.add('title');
            title.textContent = album.title;


            const photoList = document.createElement('div');
            photoList.classList.add('photoList');

            fetch(`${url}/albums/${album.id}/photos`)  //daj poschalujsta photo konkretnogo alboma
                .then(res => res.json())
                .then(photos => {
                    photos.forEach(photo => { //polutschaem odnu fotku
                        const photoItem = document.createElement('div');
                        photoItem.classList.add('photoItem');

                        const a = document.createElement('a');
                        a.classList.add('a');//na sajte widim malenkuju fotku is css, a pri naschatii bolschuju is html
                    })
                })
        })
    })
