
$(document).ready(function () {
    $('p').click(function () { //when click on p "element" this function gets called
        $(this).hide();
        console.log('you just clicked on p', this);
        //alert("1 item dissappeared")
        $('b').click(function () {
            alert("whatever")
            console.log('you just clicked on b');

            $('#second').click(function () {
                alert("clicked on p id");
                console.log('you just clicked on p', this);

            });
        });
    })
});