$(readyNow);

//from express/ajax lecture

    //This is a GET request on the client side:
function getThings(){
    $.ajax({                            //use ajax to make a GET request
        type: 'GET',
        url: '/things'
    }).then(function(response) {        // console log response
        console.log('back from the server with:', response)
        let el = $('#thingsOut');
        el.empty();
        for (i in response){            // display response on DOM
            el.append(`<li>${response[i].name}</li>`);
        }
    }).catch(function(err){             //add a catch for errors
        alert(err);
    })
} // end getThings

    // This is a POST request on the client side:
function addThing() {
    let objectToSend = {
        name: $('#inputName').val()
    }

    $.ajax({                            //use ajax to make a POST request
        type: 'POST',
        url: '/things',
        data: objectToSend
    }).then(function (response) {        // console log response
        console.log('back from the server with:', response);
        getThings();
    }).catch(function (err) {             //add a catch for errors
        alert(err);
    })
    $('#inputName').val('')
}// end addThing




//end express/ajax lecture
function readyNow() {
    $('#submitBtn').on('click', addThing);
    // $('#employee-list').on('click', '.deleteBtn', activateDelete);
    getThings();
}
