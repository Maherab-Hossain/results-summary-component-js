$(function () {
    
    // jQUERY CODE



    // Modal**

    let continuebtn = $(`.continue`);

    continuebtn.click(function() {
        $(`.modal`).slideDown(280);
        $(`.home`).delay(200).fadeIn(280);
    })

    function crossbtn() {
        $(`.modal`).slideUp(360);
        $(`.home`).fadeout(100);
    }

   $(`.cross`).click(crossbtn);
   $(`.modal`).click(crossbtn);

    // Modal**



    // Password**


    let eyebtn = $(`.eye`);

    eyebtn.click(function() {
        let typebtn = $(`.pass`).attr(`type`)
        // console.log(typebtn)

        if (typebtn == `password`) {
            $(`.pass`).attr(`type`, "text")
            
            eyebtn.html(`<i class="bi bi-eye-fill"></i>`)
        } else {
            $(`.pass`).attr(`type`, "password")
            eyebtn.html(`<i class="bi bi-eye-slash-fill"></i>`)
            
        }

    })



    // Password**



})