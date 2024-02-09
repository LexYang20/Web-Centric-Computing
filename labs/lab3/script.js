//Answer:                        
    //(a)to stop form automatically submit, handle data without refreshing.

    //(b)use += to add new information after former, so information on page keeps increasing without being replaced.

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    var country = document.getElementById('country').value;

    var output = document.getElementById('output');
    output.innerHTML += `<p>First Name: ${firstName}</p>
                             <p>Last Name: ${lastName}</p>
                             <p>Gender: ${gender}</p>
                             <p>Country: ${country}</p><hr>`;

});

