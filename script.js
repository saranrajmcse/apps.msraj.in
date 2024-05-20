document.addEventListener('DOMContentLoaded', function() {
    const imageInput = document.getElementById('imageInput');
    const imageContainer = document.getElementById('imageContainer');
    const shareButton = document.getElementById('shareButton');
  
    imageInput.addEventListener('change', function() {
      const file = this.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
          const img = document.createElement('img');
          img.src = e.target.result;
          imageContainer.innerHTML = '';
          imageContainer.appendChild(img);
          shareButton.style.display = 'block'; // Display share button
          shareButton.addEventListener('click', function() {
            if (navigator.share) {
              navigator.share({
                title: 'Shared Image',
                files: [file],
                text: 'Check out this image!'
              })
              .then(() => console.log('Share successful'))
              .catch((error) => console.log('Error sharing:', error));
            } else {
              console.log('Web Share API not supported.');
            }
          });
        };
        reader.readAsDataURL(file);
      }
    });
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const imageContainer = document.getElementById('imageContainer');
  
    // Check if the Web Share Target API is supported
    if ('shareTarget' in navigator) {
      navigator.shareTarget
        .addEventListener('file', async (event) => {
          const files = await event.files();
          const file = files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
              const img = document.createElement('img');
              img.src = e.target.result;
              imageContainer.innerHTML = '';
              imageContainer.appendChild(img);
            };
            reader.readAsDataURL(file);
          }
        });
    }
  });
  