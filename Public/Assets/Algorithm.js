$("#done").on("click", function(event) {
    event.preventDefault();

    validate();
});

var newFriend;

function validate() {

    // Check and loop the answers
    var newName = $("#name").val().trim();
    var newAge = $("#age").val().trim();
    var newLink = $("#link").val().trim();
    var newAnswers = [];
    for (var i = 0; i < 10; i++) {
            q = i + 1;
            var answer = $(".form-check-input[name=q" + q + "]:checked").val();
            newAnswers.push(answer);
    };

    if (!newName) {
            alert("Invalid Name");
    } else if (!newAge) {
            alert("Invalid Age");
    } else if (!newLink) {
            alert("Invalid Link");
    } else {
            // Creating an object to store the values
            newFriend = {
                    name: newName,
                    age: newAge,
                    link: newLink,
                    answers: newAnswers
            };
            match();
    } // else
}; // validate function

function match() {
    // Function to get the user match
    $.ajax({
            method: "GET",
            url: "http://localhost:3000/api/list"
    }).done(function (response) {
            var friend = Math.floor(Math.random() * response.length);
            $("#friendName").text(response[friend].name);
            $("#friendImg").html("<img src=" + response[friend].link + " style='width:466px; height:250px;'>");
    });
    $('#modal').modal('show');

    add(newFriend);
}; // match function

function add(newFriend) {
    // Adding the user to our Friend List Api
    data = JSON.stringify(newFriend);

    $.ajax({
            method: "POST",
            url: "http://localhost:3000/api/list",
            data: data,
            contentType: "application/json; charset=utf-8",
            dataType: "json"
    });
}; // add function