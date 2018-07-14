// Array for project images
let projectImg = ["assets/images/destinator.png", "assets/images/dauntless-splash.png", "assets/images/rupee-collector.png", "assets/images/gif4u.png", "assets/images/train-schedule.png", "assets/images/trivia-game.png", "assets/images/word-guess.png"];
let largeImg = true;
$('#portfolio-pic').on('click', function () {
    if (largeImg === true) {
        $('#portfolio-pic').animate({width: "15%"}, 1000);
        // movePic();
        addMainContent();
        largeImg = false;
    } else {
        $('#portfolio-pic').animate({width: "40%"}, 1000);
        $('.main-content').remove();
        largeImg = true;
    }
})

function movePic() {
    let elem = $('#portfolio-pic');
    let pos = 0;
    let intervalId = setInterval(frame, 5);

    function frame() {
        if (pos == 50) {
            clearInterval(intervalId);
        } else {
            pos++;
            elem.style.top = pos + 'px';
        }
    }
}

function addMainContent() {
    // Create a div for main content
    let div = $('<div>');
    // Create a div for buttons
    let btnDiv = $('<div>');
    // Create a div for other content
    let contDiv = $('<div>');
    // Create a button for each tab
    let aboutBtn = $('<div>').addClass('btn').attr('id', 'aboutBtn').text('About');
    let projectBtn = $('<div>').addClass('btn').attr('id', 'projectBtn').text('Project');
    let contactBtn = $('<div>').addClass('btn').attr('id', 'contactBtn').text('Contact')

    // Give classes to the divs
    div.addClass('main-content col-sm-12');
    btnDiv.addClass('btnDiv');
    contDiv.addClass('content');

    let p = $("<p>");
    p.text("This is a test, please work");
    contDiv.append(p);

    btnDiv.append(aboutBtn, projectBtn, contactBtn);
    div.append(btnDiv, contDiv);
    $('.page-container').append(div);
    aboutContent();
}

function aboutContent() {
    $('.content').html("<p>My name is Calvin. I am currently enrolled in a coding bootcamp for web development at UCSD extension. I am looking to become a full stack developer.</p><p>Other things that I am interested in are games, food and sports. I mainly play PC games, as of lately, the games I've been mainly playing are CS:GO, Overwatch, PubG, LoL and Monster Hunter World. A few sports that I play most frequent are basketball, baseball and badminton.</p><p>When it comes to food, I love eating, anything from food stalls to fine dining and everything in between. Hoping to be able to travel the world to tase everything.</p>");
}

function projectContent() {
    // Create div for carousel
    let carouselDiv = $('<div>').addClass('carousel slide').attr('data-ride', 'carousel').attr('id', 'carouselControls');
    let innerDiv = $('<div>').addClass('carousel-inner');

    // For each project image, create div and add to carousel
    for (i = 0; i < projectImg.length; i++) {
        let itemDiv = $('<div>').addClass('carousel-item');
        let img = $('<img>').addClass('d-block w-100');
        img.attr("src", projectImg[i]);
        itemDiv.append(img);

        if (projectImg[i] === projectImg[0]) {
            itemDiv.addClass('active');
        }
        // Add each item to the inner div
        innerDiv.append(itemDiv);
    }

    // Add controls to carousel
    // Prev control
    let a;
    $(a).html('<a class="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="sr-only">Previous</span></a>');
    // Next Control
    let b;
    $(b).html('<a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span><span class="sr-only">Next</span></a>');

    // Append inner div to carousel div
    // Append controls
    carouselDiv.append(innerDiv, a, b);
    $('.content').append(carouselDiv);
}

function contactContent() {

}

// On click event for when about, project and contact button are clicked.
$(document).on('click', '.btn', function() {
    let btnId = $(this).attr('id');

    if (btnId === "aboutBtn") {
        aboutContent();
    }

    if (btnId === "projectBtn") {
        $('.content').html('');
        projectContent();
    }

    if (btnId === "contactBtn") {
        $('.content').html('');
    }
})