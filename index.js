gsap.registerPlugin(ScrollTrigger);


function clampBuilder( minWidthPx, maxWidthPx, minFontSize, maxFontSize ) {
    const root = document.querySelector( "html" );
    const pixelsPerRem = Number( getComputedStyle( root ).fontSize.slice( 0,-2 ) );
  
    const minWidth = minWidthPx / pixelsPerRem;
    const maxWidth = maxWidthPx / pixelsPerRem;
  
    const slope = ( maxFontSize - minFontSize ) / ( maxWidth - minWidth );
    const yAxisIntersection = -minWidth * slope + minFontSize
  
    return `clamp( ${ minFontSize }rem, ${ yAxisIntersection }rem + ${ slope * 100 }vw, ${ maxFontSize }rem )`;
  }

  console.log(clampBuilder( 500, 1920, 3, 5));

//   let icon = document.querySelector(".icon");
  let layers = document.querySelectorAll("div[class *= 'layer']");
  let layertext = document.querySelectorAll("div[class *= 'layer'] p");
  layers = Array.from(layers);
  chosenLayer = layers[0].querySelector('.img > img');
  layertext = Array.from(layertext);
  console.log(chosenLayer);

// NUMBER 1 = Sliding Divs


    layers.forEach(layer => {
        ScrollTrigger.create({
            trigger: layer,
            start: "top top",
            pin: true,
            pinSpacing: false
    });
});


ScrollTrigger.create({
    trigger: layers[0],
    start: "top bottom",
    onEnter: () => {
        initPlot();
        console.log('Plot 1 Initialized');
    },
    onLeave: () => {
        console.log("Left the first section");
        chosenLayer.style.animation = "none";
    },
    once: true
});

ScrollTrigger.create({
    trigger: layers[2],
    start: "top bottom",
    onEnter: () => {
        plot2();
        console.log('Plot 2 Initialized');
    },
    once: true
});

ScrollTrigger.create({
    trigger: layers[3],
    start: "top bottom",
    onEnter: () => {
        initializeFirstPlot();
        console.log('Plot 3 Initialized');
    },
    once: true
});

ScrollTrigger.create({
    trigger: layers[4],
    start: "top bottom",
    onEnter: () => {
        initializeSecondPlot();
        initializeSlideshow();
        console.log('Plot 4 Initialized');
    },
    once: true
});

ScrollTrigger.create({
    trigger: layers[13],
    start: "top bottom",
    onLeave: () => {
        initializeSecondPlot();
        initializeSlideshow();
        console.log('Plot 13 Initialized');
    },
    once: true
});

plot5();


layertext.forEach(text => {
    // Break down into spans wrapped in divs
    let textSplit = text.textContent.split("");
    text.innerHTML = ""; // Clear the existing text content

    textSplit.forEach(letter => {
        let letterContainer = document.createElement("div"); // Create a div for each letter
        letterContainer.style.display = "inline-block"; // Ensure div behaves like an inline element

        if (letter === ' ') { // Check if the letter is actually a space
            letterContainer.style.width = "16px"; // Mimic word spacing by setting the width of the div
            // Adjust the width as needed to match your desired word spacing
        } else {
            let letterSpan = document.createElement("span"); // Create a span for each letter
            letterSpan.textContent = letter; // Set the letter as the span's content
            letterContainer.appendChild(letterSpan); // Add the span to the div
        }
        
        text.appendChild(letterContainer); // Add the div to the text element
    });

    // Animate each div
    gsap.to(text.children, {
        y: 20,
        ease: "none",
        repeat: -1,
        duration: 1,
        yoyo: true,
        stagger: 0.1
    });
});


document.querySelector('.image > img').addEventListener('click', function(event) {
    const rect = this.getBoundingClientRect();
    const x = event.clientX - rect.left; // x position within the element.
    const y = event.clientY - rect.top;  // y position within the element.

    const width = this.offsetWidth;
    const height = this.offsetHeight;

    let newSrc = '';

    if (x < width / 2 && y < height / 2) {
        // Top-left quadrant
        newSrc = 'first.png';
    } else if (x >= width / 2 && y < height / 2) {
        // Top-right quadrant
        newSrc = 'second.png';
    } else if (x < width / 2 && y >= height / 2) {
        // Bottom-left quadrant
        newSrc = 'third.png';
    } else if (x >= width / 2 && y >= height / 2) {
        // Bottom-right quadrant
        newSrc = 'fourth.png';
    }

    // Change the image source
    this.src = newSrc;
    gsap.from(this, { scale: 0, duration: 1 });
});

function startIframe() {
    // Assuming you want to navigate the iframe to 'cloud.html' upon clicking 'layer10'
    document.getElementById('myIframe').src = "cloud.html";
    gsap.fromTo('#myIframe', { opacity:0}, { opacity:1, duration: 1 });
}