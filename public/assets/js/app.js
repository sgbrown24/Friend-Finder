$(".submit").on("click", function(event){
    event.preventDefault()
    console.log("submited")
    var name = $("#nameInput").val()
    console.log(name)
    var image = $("#imageInput").val()
    var q1 = $("#Question1").val()
    var q2 = $("#Question2").val()
    var q3 = $("#Question3").val()
    var q4 = $("#Question4").val()
    var q5 = $("#Question5").val()
    var q6 = $("#Question6").val()
    var answers  = {
        name,
        image,
        q1,
        q2,
        q3,
        q4,
        q5,
        q6,
    }
    console.log(answers)
})