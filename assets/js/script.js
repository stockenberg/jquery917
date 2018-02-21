
json = [];

$(document).ready(function () {


    $.getJSON('assets/json/data.json')
        .done(function (result) {
            // console.log(result);
            console.log(result);
            createListItems(result);

        });

    function createListItems(result){
        $.each(result, function (index, student){

            //listItem = document.createElement('li');
           // headline = document.createElement('h5');
            var company = 'Keine Firma';
            if(student.companies.length > 0){
                console.log('test');
                company = student.companies[student.companies.length-1].name;
            }

            $('#accordion').append("<div class=\"card\">\n" +
                "            <div class=\"card-header\" id=\"headingOne\">\n" +
                "                <h5 class=\"mb-0\">\n" +
                "                    <button class=\"btn btn-link\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n" +
                "                        ToggleInfo\n" +
                "                    </button>\n" +
                "                    " + student.firstname + " " + student.lastname + " - " + student.campuses[student.campuses.length-1].name + " - " + student.products[student.products.length-1].pivot.course_code + " - Fachbereich - " + student.products[student.products.length-1].name + "  - " + company  + "\n" +
                "                </h5>\n" +
                "            </div>\n" +
                "\n" +
                "            <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n" +
                "                <div class=\"card-body\">\n" +
                "                   Zusätzliche Informationen\n" +
                "                </div>\n" +
                "            </div>\n" +
                "        </div>");


        })
    }

});