
const gallery_num = 3;
const img_count = [10,9,9,9,9,9,9,9,9,9];
const events_name = ["CPCB","Teacher's Day","Visits"]

// Function to create the grid with cards
function createGrid() {
    var gridSection = document.getElementById('gridSection');
  
    for (var i = 0; i < 1; i++) {
        var gridRow = document.createElement('div');
        gridRow.className = 'Grid';

  
        for (var j = 0; j < gallery_num; j++) {
            var id =  j + 1;

            var card = document.createElement('div');
            card.className = 'Card';

            // card.id = 'card-' + id;
            // card.onclick = function() {openGallery(id);};
            card.setAttribute('onClick', 'openGallery(' + id + ')');
            card.setAttribute('id', 'card-' + id);
  
            var cardThumb = document.createElement('div');
            cardThumb.className = 'Card-thumb';
  
            for (var k = 0; k < 3; k++) {
                var cardShadow = document.createElement('div');
                cardShadow.className = 'Card-shadow';
                cardThumb.appendChild(cardShadow);
            }
  
            var cardImage = document.createElement('div');
            cardImage.className = 'Card-image';
            cardImage.style.backgroundImage = 'url(src/asset/highlights/0' + id + '.JPG)';
            cardThumb.appendChild(cardImage);
  
            var cardTitle = document.createElement('div');
            cardTitle.className = 'Card-title';
            cardTitle.innerHTML = '<span>'+events_name[j]+'</span>';
            card.appendChild(cardTitle);
  
            var cardExplore = document.createElement('div');
            cardExplore.className = 'Card-explore';
            cardExplore.innerHTML = '<span>Explore More Pictures</span>';
            card.appendChild(cardExplore);
  
            var cardButton = document.createElement('button');
            cardButton.className = 'Card-button view more';
            cardButton.innerHTML = 'View More';
            card.appendChild(cardButton);
  
            card.appendChild(cardThumb);
            gridRow.appendChild(card);
        }
  
        gridSection.appendChild(gridRow);
    }
  }
  
  // Call the function to create the grid
  createGrid();
  

// script.js

// Function to create the gallery sections
function createGallerySections() {
    var mainContainer = document.getElementById('gallerysubsection');

    for (var i = 1; i <= gallery_num; i++) {
        var gallerySection = document.createElement('section');
        gallerySection.className = 'Gallery';
        gallerySection.id = 'gallery-' + i;

        // Gallery header
        var galleryHeader = document.createElement('div');
        galleryHeader.className = 'Gallery-header';

        var closeLink = document.createElement('a');
        closeLink.className = 'Gallery-close';
        closeLink.setAttribute('onclick', 'closeAll()');
        closeLink.innerText = '×';

        galleryHeader.appendChild(closeLink);
        gallerySection.appendChild(galleryHeader);

        // Gallery images
        var primaryImage = document.createElement('div');
        primaryImage.className = 'Gallery-image-primary';
        gallerySection.appendChild(primaryImage);
        // Gallery image (primary)
        var galleryImagePrimary = document.createElement('div');
        galleryImagePrimary.className = 'Gallery-image--primary';
        galleryImagePrimary.style.backgroundImage = 'url(src/asset/highlights/0' + i + '.JPG)';
        primaryImage.appendChild(galleryImagePrimary);
        // Gallery description
        var description = document.createElement('div');
        description.className = 'Gallery-discription';
        description.textContent = 'Description';
        primaryImage.appendChild(description);
        
        // Repeat for 9 additional images
        var galleryImageSet = document.createElement('div');
        galleryImageSet.className = 'Gallery-images';

        for (var k = 1; k <= img_count[i-1]; k++) {
            var galleryImage = document.createElement('div');                
            galleryImage.className = 'Gallery-image';
            galleryImageSet.appendChild(galleryImage);
        } 

        gallerySection.appendChild(galleryImageSet);
        

        mainContainer.appendChild(gallerySection);
    }
}
createGallerySections();


function openGallery(id) {
    closeAll();
    const gallery = document.getElementById('gallery-'+id);
    const card = document.getElementById('card-'+id);
    
    
    gallery.classList.add('Gallery--active');
    card.classList.add('Card--active');

  }
  
  function closeAll() {
    const galleryActv = document.querySelector('.Gallery--active');
    const cardActv = document.querySelector('.Card--active');
    if (galleryActv) {
      galleryActv.classList.remove('Gallery--active');
    }
    if (cardActv) {
      cardActv.classList.remove('Card--active');
    }
}
  
  