$(readyNow);

//from express/ajax lecture

    //This is a GET request on the client side:
// function getThings(){
//     $.ajax({                            //use ajax to make a GET request
//         type: 'GET',
//         url: '/things'
//     }).then(function(response) {        // console log response
//         console.log('back from the server with:', response)
//         let el = $('#thingsOut');
//         el.empty();
//         for (i in response){            // display response on DOM
//             el.append(`<li>${response[i].name}</li>`);
//         }
//     }).catch(function(err){             //add a catch for errors
//         alert(err);
//     })
// } // end getThings

//     // This is a POST request on the client side:
// function addThing() {
//     let objectToSend = {
//         name: $('#inputName').val()
//     }

//     $.ajax({                            //use ajax to make a POST request
//         type: 'POST',
//         url: '/things',
//         data: objectToSend
//     }).then(function (response) {        // console log response
//         console.log('back from the server with:', response);
//         getThings();
//     }).catch(function (err) {             //add a catch for errors
//         alert(err);
//     })
// }// end addThing




//end express/ajax lecture
function readyNow() {
    $('#submitBtn').on('click', addEmployee);
    // $('#employee-list').on('click', '.deleteBtn', activateDelete);
    getEmployees();
}

// function activateSubmit() {
//     let firstName = $('#first-name-input').val();
//     let lastName = $('#last-name-input').val();
//     let id = $('#id-input').val();
//     let title = $('#title-input').val();
//     let salary = $('#salary-input').val();

//     if (id == '') {
//         alert('Employee ID number required.');
//     } else if (duplicateId(id)) {
//         alert('Employee ID already exists. Please enter a unique ID number')
//     } else {

//         let employee = {
//             firstName: firstName,
//             lastName: lastName,
//             id: id,
//             title: title,
//             salary: Number(salary).toFixed(2)
//         }

//         employees.push(employee);
//         listOutEmployees();

//         $('#first-name-input').val('');
//         $('#last-name-input').val('');
//         $('#id-input').val('');
//         $('#title-input').val('');
//         $('#salary-input').val('');

//     }
// }

function getEmployees() {
    $.ajax({                            //use ajax to make a GET request
        type: 'GET',
        url: '/employees'
    }).then(function (response) {        // console log response
        console.log('back from the server with:', response)
        let el = $('#employee-list');
        el.empty();
        for (i in response) {            // display response on DOM
            el.append(`<tr><td>` + response[i].firstName + `</td><td>` + response[i].lastName + `</td><td>` + response[i].id + `</td><td>` + response[i].title + `</td><td>$` + response[i].salary + `</td><td><button class="deleteBtn" data-id="` + response[i].id + `">Delete</button></td></tr>`);
        }
    }).catch(function (err) {             //add a catch for errors
        alert(err);
    })
} // end getEmployees

// This is a POST request on the client side:
function addEmployee() {
    let firstName = $('#first-name-input').val();
    let lastName = $('#last-name-input').val();
    let id = $('#id-input').val();
    let title = $('#title-input').val();
    let salary = $('#salary-input').val();
    
    let objectToSend = {
        firstName: firstName,
        lastName: lastName,
        id: id,
        title: title,
        salary: Number(salary).toFixed(2)
    }

    $.ajax({                            //use ajax to make a POST request
        type: 'POST',
        url: '/employees',
        data: objectToSend
    }).then(function (response) {        // console log response
        console.log('back from the server with:', response);
        getEmployees();
    }).catch(function (err) {             //add a catch for errors
        alert(err);
    })
}// end addThing

// function listOutEmployees() {
//     $('#employee-list').empty();
//     let totalMonthly = 0;

//     employees.forEach(function (employee) {
//         let $newRow = `<tr><td>` + employee.firstName + `</td><td>` + employee.lastName + `</td><td>` + employee.id + `</td><td>` + employee.title + `</td><td>$` + employee.salary + `</td><td><button class="deleteBtn" data-id="` + employee.id + `">Delete</button></td></tr>`;
//         $('#employee-list').append($newRow);
//         let monthly = employee.salary / 12;
//         totalMonthly += monthly;
//     })

//     $('#total-monthly').empty();
//     $('#total-monthly').append('Total Monthly: $' + totalMonthly.toFixed(2));

//     if (totalMonthly > 20000) {
//         $('#total-monthly').addClass('red');
//     } else {
//         $('#total-monthly').removeClass('red');
//     }
// }

// function activateDelete() {
//     let $id = $(this).data('id');
//     for (let i = 0; i < employees.length; i++) {
//         if ($id == employees[i].id) {
//             employees.splice(i, 1);
//         }
//     }
//     listOutEmployees();

// }

// function duplicateId(newId) {
//     for (i in employees) {
//         if (employees[i].id == newId) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }