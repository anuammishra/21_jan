 var img_arr = 
    [
      'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&psig=AOvVaw2p1M0P0qkp4VHsSbAIl0KB&ust=1644081513716000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPC694fH5vUCFQAAAAAdAAAAABAD' ,
      'https://www.pexels.com/photo/string-lights-hanged-on-bed-frame-1329711/',
      'https://www.pexels.com/photo/white-sports-coupe-733745/' ,
      'https://images.unsplash.com/photo-1623063921261-5a9914c19548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjJ8fHJhbmRvbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60' ,

    ];



    var btn = document.getElementById("btn");
    btn.addEventListener("click", showImages);
 
   function showImages()
   {
 
      var gallery_container = document.getElementById("gallery_container");
    
     // when click on button it will clear all and then print. we can avoid repeated printing using this
        gallery_container.innerText=" ";
 
 
     for(var i=0; i<img_arr.length; i++)
     {
           var new_img = document.createElement("img"); 
 
           new_img.src = img_arr[i];
 
           gallery_container.appendChild(new_img);
 
          //  new_img.addEventListener("click", imageClicked)
 
     }
    
  }
  
