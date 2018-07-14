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
    // Create a button for each tab
    let aboutBtn = $('<button>').addClass('btn').attr('id', 'aboutBtn').text('About');
    let projectBtn = $('<button>').addClass('btn').attr('id', 'projectBtn').text('Project');
    let contactBtn = $('<button>').addClass('btn').attr('id', 'contactBtn').text('Contact')

    // Give classes to the divs
    div.addClass('main-content col-sm-12');
    btnDiv.addClass('btnDiv');

    let p = $("<p>");
    p.text("This is a test, please work");

    btnDiv.append(aboutBtn, projectBtn, contactBtn);
    div.append(btnDiv, p);
    $('.page-container').append(div);
}