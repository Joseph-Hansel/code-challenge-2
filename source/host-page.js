function hostEvent(){

    let eventName = document.getElementById("event-name");
    eName = eventName.value;
    let hostName = document.getElementById("host-name");
    hName = hostName.value;
    let eventDate = document.getElementById("event-date");
    eDate = eventDate.value;
    let hostSubmitButton = document.getElementById("host-submit-button")

    // (Event) Click submit button.
    hostSubmitButton.addEventListener("click", function(){
        hostSubmitResponse()
    })

    function hostSubmitResponse(eventName, hostName, eventDate){
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

                    <p><h3>You can access and edit your event's guest list in the <a href="./lists.html" style="text-decoration: none; color: #1B769D;">lists page</a>.</h3></p>

                    <p style="text-align: center">...</p>

                    <p>To initiate a different event, click this <a href="./host.html" style="text-decoration: none; color : #1B769D;">INITIATE link</a>.</p>`

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
        let additionButtons = document.getElementById("addition-form")
        // additionButtons.innerHTML = 
        //     `<div>


        //         <button type="button">Add guests to list one.</button>


        //     </div>

        //     <div>


        //         <button type="button" style="display: block;">Add guests to list two.</button>


        //     </div>

        //     <div>


        //         <button type="button" style="display: none;">Add guests</button>


        //     </div>`
    }
}
hostEvent();