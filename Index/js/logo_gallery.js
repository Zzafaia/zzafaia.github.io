var theLogoGallery = {
  obj: {
    visibleGallery: $('#logoGallery'),
    hiddenGallery: $('#hiddenGallery'),
    images: []
  },
  getImages: function() {
    var imgArr = this.obj.images;
    this.obj.hiddenGallery.find('.gallery-logo').each(function(i, o) {
      imgArr.push($(o).data('src'));
    })
  },
  assignImages: function(arr) {
    var gallery = this.obj.visibleGallery;
    var imageArr = this.obj.images;
    var firstSix;
    $('.builder-logo').each(function(i, o) {
      $(o).attr('src', arr[i]);
      if (i === 5) {
        // Splice Array
        var firstSix = arr.splice(0, 6);
        arr = $.merge(arr, firstSix);
        // Make Gallery visibleGallery
        gallery.animate({
          opacity: 1
        }, 1000);
      }
    });
  },
  swapImages: function(arr) {
    if (arr.length > 6) {
      var revCount = 0;
      setInterval(function() {
        var $target = $('.builder-logo[data-index="' + revCount + '"]');
        $target.fadeOut("slow", function() {
          $target.attr("src", arr[0]);
          $target.fadeIn();
          var first = arr.shift();
          arr.push(first);
          revCount = (revCount === 5) ? 0 : revCount + 1;
        });
      }, 2000)
    }
  },
  galleryInit: function() {
    this.getImages();
    this.assignImages(this.obj.images);
    this.swapImages(this.obj.images);
  }
}

$(document).ready(function() {
  theLogoGallery.galleryInit();
});