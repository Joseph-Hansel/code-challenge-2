function hostEvent(){

    let eventName = document.getElementById("event-name");
    let hostName = document.getElementById("host-name")
    let eventDate = document.getElementById("event-date")
    let hostSubmitButton = document.getElementById("host-submit-button")

    // (Event) Click submit button.
    hostSubmitButton.addEventListener("click", function(){
        hostSubmitResponse()
    })

    function hostSubmitResponse(eventName, hostName, eventDate){
        function confirm(){
            prompt(`Hi ${hostName},enter T (for true) if the following details `)
        }
    }
}

hostEvent();