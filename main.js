// $(document).ready(function() {
//     $('.act-images-container').magnificPopup({
//         delegate: 'a',
//         type: 'image'
//     });

// });
// $('.act-image-container').magnificPopup({
//     items: {
//       src: 'path-to-image-1.jpg'
//     },
//     type: 'image' // this is default type
// });
$(document).ready(function() {
    $('.image-link').magnificPopup({
        type:'image',
        gallery:{
            enabled:true
        }
    });
  });