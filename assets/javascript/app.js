let largeImg = true;

$('#portfolio-pic').on('click', function () {
    if (largeImg === true) {
        $('#portfolio-pic').animate({ height: "20%", width: "20%", top: "+=40%"}, 1000);
        // movePic();
        addMainContent();
        largeImg = false;
    } else {
        $('#portfolio-pic').animate({height: "60%", width: "60%", bottom: "+=40%"}, 1000);
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
    let div = $('<div>');
    let projectBtn = $('<button>').addClass('btn').text('Project');
    let contactBtn = $('<button>').addClass('btn').text('Contact')

    div.addClass('main-content');

    let p = $("<p>");
    p.text("This is a test, please work");

    div.append(projectBtn, contactBtn);
    div.append(p);
    $('.page-container').append(div);
}