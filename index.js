function hostEvent(){

    let eventName = document.getElementById("event-name");
    let hostName = document.getElementById("host-name");
    let eventDate = document.getElementById("event-date");
    let hostSubmitButton = document.getElementById("host-submit-button")

    hostSubmitButton.addEventListener("click", function(){
        let eName = eventName.value.trim();
        let hName = hostName.value.trim();
        let eDate = eventDate.value.trim();

        if (!eName || !hName || !eDate) {
            alert("Please fill in all fields.");
            return;
        }
        hostSubmitResponse(eName, hName, eDate)
    });

    function hostSubmitResponse(eName, hName, eDate){
        function confirm(){
            let answer = prompt(`Hi ${hName}, enter T (for true) if the following details are correct. Otherwise, enter F (for false).
                Name of Event: ${eName}
                Your name: ${hName}`);
            if (answer == "T" || answer == "F"){
                if (answer == "F"){
                    alert(`Fill in the form once more.`)
                }
                if (answer == "T"){
                    let hiddenForm = document.getElementById("hide");
                    hiddenForm.innerHTML = `<form action="" id="host-form">
                    <h2>Your details have been successfully received.</h2>

                    <p style="text-align: center">...</p>

                    <p><a href="#list-section" style="text-decoration: none; color : #1B769D;">View</a> the list.</p>`

                    updateLists();
                }
            }else {
                alert(`Please enter a valid value.`)
                confirm();
            }
        }
        confirm();
    }

    function updateLists(){
        let listTitle = document.getElementById("list-title")
        listTitle.innerText = `${hName}'s ${eName}`
    }
}

document.addEventListener('DOMContentLoaded', () => {
    hostEvent();
    const guestForm = document.getElementById('guest-form');
    const guestNameInput = document.getElementById('guest-name');
    const guestCategorySelect = document.getElementById('guest-category');
    const guestList = document.getElementById('guestList');
guestForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = guestNameInput.value.trim();
    const category = guestCategorySelect.value;

    if (!name || !category) return;

    const li = document.createElement('li');
    li.textContent = `${name} (${category.charAt(0).toUpperCase() + category.slice(1)})`;

    // Optional: Add a remove button for each guest
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.type = 'button';
    removeBtn.addEventListener('click', () => {
        guestList.removeChild(li);
    });

    li.appendChild(removeBtn);
    guestList.appendChild(li);

    guestForm.reset();
    guestCategorySelect.selectedIndex = 0;
    
    //clear the input field
    guestNameInput.value = '';

    //clear all guests
    clearListButton = document.getElementById('clear-list');
    clearListButton.addEventListener('click', () => {
        guestList.innerHTML = '';
    });

    const rsvpButton = document.createElement('rsvp-button');
    rsvpButton.textContent = 'attending';
    rsvpButton.className = 'edit-guest';
    rsvpButton.addEventListener('click', () => {
        if (rsvpButton.textContent === 'attending') {
            rsvpButton.textContent = 'not attending';
            rsvpButton.className = 'not-attending';
        } else {
            rsvpButton.textContent = 'attending';
            rsvpButton.className = 'edit-guest';
        }
    });
});})