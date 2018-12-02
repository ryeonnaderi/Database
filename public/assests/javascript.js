

    $("#signup").click(() => {
        window.location.pathname = "/signup.html";
    });
    $("#login").click(() => {
        window.location.pathname = "/login.html";
    });
   

    $("#button").on("click", function () { // waiting for submit security button
        console.log("entering if condition");
        if (security() === "true") {
            window.location.pathname = "/presentation.html";
        } else {
            alert("please provide a valid password");
        }
    })
    // list of available functions for the program

    // function Display(pictureName) {

    //     //  var image = document.createElement("img");
    //     // image.src="c:ryeon.jpg";
    //     // document.body.appendChild(image);


    //     var image = document.images[0];
    //     var showImage = new Image();
    //     showImage.onload = function () {
    //         image.src = this.src;

    //     }
    //     if (pictureName == "ryeon") {
    //         showImage.src = 'c:ryeon.jpg';

    //     } else if (pictureName == "mike") {
    //         showImage.src = 'https://www.sideshowtoy.com/wp-content/uploads/2017/11/dc-comics-justice-league-batman-statue-prime1-studio-feature-903246-1.jpg';
    //     } else {
    //         showImage.src = "C:blank.jpg"
    //     }

    //     // alert('you selected ' + pictureName);


    // }


    // function drawChart() {
    //     var data = new google.visualization.DataTable();

    //     data.addColumn('string', 'Name');
    //     data.addColumn('string', 'Manager');
    //     data.addColumn('string', 'ToolTip');

    //     // For each orgchart box, provide the name, manager, and tooltip to show.
    //     data.addRows([
    //         [{
    //                 v: 'My Family',
    //                 f: 'My Family<div style="color:red; font-style:italic"></div>'
    //             },
    //             '', ''
    //         ],

    //         [{
    //                 v: 'Ryeon Naderi',
    //                 f: 'Ryeon Naderi<div style="color:red; font-style:italic">brother</div>'
    //             },
    //             'My Family', 'brother'
    //         ],
    //         [{
    //                 v: 'Aurian Naderi',
    //                 f: 'Aurian Naderi<div style="color:red; font-style:italic">brother</div>'
    //             },
    //             'My Family', 'brother'
    //         ],
    //         [{
    //                 v: 'Kas Naderi',
    //                 f: 'Kas Naderi<div style="color:red; font-style:italic">dad</div>'
    //             },
    //             'Ryeon Naderi', 'dad'
    //         ],
    //         [{
    //                 v: 'Arezoo Akhavan',
    //                 f: 'Arezoo Akhavan<div style="color:red; font-style:italic">mom</div>'
    //             },
    //             'Ryeon Naderi', 'mom'
    //         ],
    //         [{
    //                 v: 'Kaveh Naderi',
    //                 f: 'Kaveh Naderi<div style="color:red; font-style:italic">uncle</div>'
    //             },
    //             'Ryeon Naderi', 'uncle'
    //         ],
    //         [{
    //                 v: 'Mohmad Akhavan',
    //                 f: 'Mohmad Akhavan<div style="color:red; font-style:italic">grandad</div>'
    //             },
    //             'Arezoo Akhavan', 'grandad'
    //         ],
    //         [{
    //                 v: 'Mehri',
    //                 f: 'Mehri<div style="color:red; font-style:italic">Grandma</div>'
    //             },
    //             'Arezoo Akhavan', 'Grandma'
    //         ],
    //         [{
    //                 v: 'Shahin',
    //                 f: 'Shahin<div style="color:red; font-style:italic">grandma</div>'
    //             },
    //             'Kaveh Naderi', 'grandma'
    //         ],

    //         [{
    //                 v: 'Aboleghasem',
    //                 f: 'Aboleghasem<div style="color:red; font-style:italic">grandad</div>'
    //             },
    //             'Kaveh Naderi', 'grandad'
    //         ],

    //         [{
    //                 v: 'Abolghasem',
    //                 f: 'Abolghasem<div style="color:red; font-style:italic">grandad</div>'
    //             },
    //             'Kas Naderi', 'grandad'
    //         ],

    //         [{
    //                 v: 'Mehry',
    //                 f: 'Mehry<div style="color:red; font-style:italic">grandma</div>'
    //             },
    //             'Kas Naderi', 'grandma'
    //         ],
    //         [{
    //                 v: 'Kobra',
    //                 f: 'Kobra<div style="color:red; font-style:italic">great grandma</div>'
    //             },
    //             'Abolghasem', 'Great Grandma'
    //         ],
    //         [{
    //                 v: 'Robab',
    //                 f: 'Robab<div style="color:red; font-style:italic">Great Grandma</div>'
    //             },
    //             'Mehry', 'Great Grandma'
    //         ],


    //     ]);

    //     // Create the chart.
    //     var chart = new google.visualization.OrgChart(document.getElementById("orgFrame"));

    //     // Draw the chart, setting the allowHtml option to true for the tooltips.
    //     chart.draw(data, {
    //         allowHtml: true
    //     });
    //     // make clickable
    //     google.visualization.events.addListener(chart, 'select', function () {
    //         var row = chart.getSelection()[0].row;
    //         // alert('you selected' + data.getValue(row, 0));
    //         Display(data.getValue(row, 0));
    //     });

    // }

    function security() {
        // return "true";
        // $("#button").on("click", function () {
        console.log("entering security");
        console.log(($("#pwd").val()));
        if ($("#pwd").val() === "Ryeon") {
            // alert("security is returning true");
            // console.log("returning true" + document.getElementById("#pwd"));
            return "true";


        } else {
            // alert("security is returning false");

            // console.log("returning false" + $("#pwd"));
            return "false";
        }
    };