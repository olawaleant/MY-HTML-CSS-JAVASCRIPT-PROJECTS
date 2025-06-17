// Select the next and previous arrow buttons
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

// Select the main slider, slider list, thumbnail container, and all thumbnails
let slider = document.querySelector('.slider')
let sliderList = slider.querySelector('.slider .list')
let thumbnail = document.querySelector('.slider .thumbnail')
let thumbnailItems = thumbnail.querySelectorAll('.item')

// Move the first thumbnail item to the end (for circular effect)
thumbnail.appendChild(thumbnailItems[0])

// Event listener for the next button
nextBtn.onclick = function() {
    moveSlider('next')
}

// Event listener for the previous button
prevBtn.onclick = function() {
    moveSlider('prev')
}

// Function to handle moving the slider
function moveSlider(direction) {
    // Get current slider and thumbnail items
    let sliderItems = sliderList.querySelectorAll('.item')
    let thumbnailItems = document.querySelectorAll('.thumbnail .item')
    
    if(direction === 'next'){
        // Move first item to the end for both slider and thumbnail
        sliderList.appendChild(sliderItems[0])
        thumbnail.appendChild(thumbnailItems[0])
        // Add 'next' class to trigger animation
        slider.classList.add('next')
    } else {
        // Move last item to the beginning for both slider and thumbnail
        sliderList.prepend(sliderItems[sliderItems.length - 1])
        thumbnail.prepend(thumbnailItems[thumbnailItems.length - 1])
        // Add 'prev' class to trigger animation
        slider.classList.add('prev')
    }

    // Listen for the end of the animation and remove the animation class
    slider.addEventListener('animationend', function() {
        if(direction === 'next'){
            slider.classList.remove('next')
        } else {
            slider.classList.remove('prev')
        }
    }, {once: true}) // This makes sure the event listener runs only once per click
}
