jQuery(document).ready(function () {

  jQuery("#nanogallery").nanogallery2({
      
      items: [
          { src: './images/gallery-01.jpg', srct: './images/gallery-01.jpg'},
          { src: './images/gallery-02.jpg', srct: './images/gallery-02.jpg'},
          { src: './images/gallery-04.jpg', srct: './images/gallery-04.jpg'},
          { src: './images/gallery-07.jpg', srct: './images/gallery-07.jpg'},
          { src: './images/gallery-08.jpg', srct: './images/gallery-08.jpg'},
          { src: './images/gallery-09.jpg', srct: './images/gallery-09.jpg'},
          { src: './images/gallery-10.jpg', srct: './images/gallery-10.jpg'},
          { src: './images/gallery-11.jpg', srct: './images/gallery-11.jpg'},
          { src: './images/gallery-12.jpg', srct: './images/gallery-12.jpg'},
          { src: './images/gallery-15.jpg', srct: './images/gallery-15.jpg'},
          { src: './images/gallery-16.jpg', srct: './images/gallery-16.jpg'},
          { src: './images/gallery-18.jpg', srct: './images/gallery-18.jpg'},
          { src: './images/gallery-20.jpg', srct: './images/gallery-20.jpg'},
          { src: './images/gallery-21.jpg', srct: './images/gallery-21.jpg'},
          { src: './images/gallery-22.jpg', srct: './images/gallery-22.jpg'},
          { src: './images/gallery-23.jpg', srct: './images/gallery-23.jpg'},
          { src: './images/gallery-24.jpg', srct: './images/gallery-24.jpg'},
          { src: './images/gallery-25.jpg', srct: './images/gallery-25.jpg'},
          { src: './images/gallery-26.jpg', srct: './images/gallery-26.jpg'},
          { src: './images/gallery-27.jpg', srct: './images/gallery-27.jpg'},
          { src: './images/gallery-28.jpg', srct: './images/gallery-28.jpg'},
          { src: './images/gallery-29.jpg', srct: './images/gallery-29.jpg'},
          { src: './images/gallery-30.jpg', srct: './images/gallery-30.jpg'},
          { src: './images/gallery-31.jpg', srct: './images/gallery-31.jpg'},
          { src: './images/gallery-32.jpg', srct: './images/gallery-32.jpg'},
          { src: './images/gallery-33.jpg', srct: './images/gallery-33.jpg'},
          { src: './images/gallery-34.jpg', srct: './images/gallery-34.jpg'},
          { src: './images/gallery-42.jpg', srct: './images/gallery-42.jpg'},
          { src: './images/gallery-43.jpg', srct: './images/gallery-43.jpg'},
          { src: './images/gallery-50.jpg', srct: './images/gallery-50.jpg'},
          { src: './images/gallery-55.jpg', srct: './images/gallery-55.jpg'},
          { src: './images/gallery-60.jpg', srct: './images/gallery-60.jpg'},
          { src: './images/gallery-63.jpg', srct: './images/gallery-63.jpg'},
          { src: './images/gallery-64.jpg', srct: './images/gallery-64.jpg'},
          { src: './images/gallery-65.jpg', srct: './images/gallery-65.jpg'},
          { src: './images/gallery-75.jpg', srct: './images/gallery-75.jpg'},
          { src: './images/gallery-76.jpg', srct: './images/gallery-76.jpg'},
          { src: './images/gallery-77.jpg', srct: './images/gallery-77.jpg'},
          { src: './images/gallery-78.jpg', srct: './images/gallery-78.jpg'},
          { src: './images/gallery-79.jpg', srct: './images/gallery-79.jpg'},
          { src: './images/gallery-80.jpg', srct: './images/gallery-80.jpg'},
          { src: './images/gallery-81.jpg', srct: './images/gallery-81.jpg'},
          { src: './images/gallery-82.jpg', srct: './images/gallery-82.jpg'},
          { src: './images/gallery-83.jpg', srct: './images/gallery-83.jpg'},
          { src: './images/gallery-84.jpg', srct: './images/gallery-84.jpg'},
        ],
     
      // GALLERY AND THUMBNAIL LAYOUT
      galleryMosaic : [                       // default layout
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 1, c: 3, r: 2 },
        { w: 1, h: 2, c: 4, r: 1 },
        { w: 2, h: 1, c: 5, r: 1 },
        { w: 2, h: 2, c: 5, r: 2 },
        { w: 1, h: 1, c: 4, r: 3 },
        { w: 2, h: 1, c: 2, r: 3 },
        { w: 1, h: 2, c: 1, r: 3 },
        { w: 1, h: 1, c: 2, r: 4 },
        { w: 2, h: 1, c: 3, r: 4 },
        { w: 1, h: 1, c: 5, r: 4 },
        { w: 1, h: 1, c: 6, r: 4 }
      ],
      galleryMosaicXS : [                     // layout for XS width
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 1, c: 3, r: 2 },
        { w: 1, h: 2, c: 1, r: 3 },
        { w: 2, h: 1, c: 2, r: 3 },
        { w: 1, h: 1, c: 2, r: 4 },
        { w: 1, h: 1, c: 3, r: 4 }
      ],
      galleryMosaicSM : [                     // layout for SM width
        { w: 2, h: 2, c: 1, r: 1 },
        { w: 1, h: 1, c: 3, r: 1 },
        { w: 1, h: 1, c: 3, r: 2 },
        { w: 1, h: 2, c: 1, r: 3 },
        { w: 2, h: 1, c: 2, r: 3 },
        { w: 1, h: 1, c: 2, r: 4 },
        { w: 1, h: 1, c: 3, r: 4 }
      ],
      galleryMaxRows: 1,
      galleryDisplayMode: 'rows',
      gallerySorting: 'random',
      thumbnailDisplayOrder: 'random',

      thumbnailHeight: '180', thumbnailWidth: '220',
      thumbnailAlignment: 'scaled',
      thumbnailGutterWidth: 0, thumbnailGutterHeight: 0,
      thumbnailBorderHorizontal: 0, thumbnailBorderVertical: 0,

      thumbnailToolbarImage: null,
      thumbnailToolbarAlbum: null,
      thumbnailLabel: { display: false },

      // DISPLAY ANIMATION
      // for gallery
      galleryDisplayTransitionDuration: 1500,
      // for thumbnails
      thumbnailDisplayTransition: 'imageSlideUp',
      thumbnailDisplayTransitionDuration: 1200,
      thumbnailDisplayTransitionEasing: 'easeInOutQuint',
      thumbnailDisplayInterval: 60,

      // THUMBNAIL HOVER ANIMATION
      thumbnailBuildInit2: 'image_scale_1.15',
      thumbnailHoverEffect2: 'thumbnail_scale_1.00_1.05_300|image_scale_1.15_1.00',
      touchAnimation: true,
      touchAutoOpenDelay: 500,

      // LIGHTBOX
      viewerToolbar: { display: false },
      viewerTools:    {
        topLeft:   'label',
        topRight:  'shareButton, rotateLeft, rotateRight, fullscreenButton, closeButton'
      },

      // GALLERY THEME
      galleryTheme : { 
        thumbnail: { background: '#111' },
      },
                
      // DEEP LINKING
      locationHash: true
    });
});