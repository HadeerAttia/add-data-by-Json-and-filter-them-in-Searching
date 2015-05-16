$(function () {

    // json 4 the search and put the 
    var data = [
        {
            image: '"imgs/6.jpg"',
            hisName: 'category-1',
            para: 'ABOUT ROSHDY SHOPS'
        },
        {
            image: '"imgs/d2.jpg"',
            hisName: 'category-2',
            para: 'El Raml SHOPS'
        },
        {
            image: '"imgs/1.jpg"',
            hisName: 'category-1',
            para: 'AGAMY SHOPS'
        },
        {
            image: '"imgs/d1.jpg"',
            hisName: 'category-2',
            para: 'MIAMY SHOPS'
        },
        {
            image: '"imgs/3.jpg"',
            hisName: 'category-3',
            para: 'the best photos'
        },
        {
            image: '"imgs/2.jpg"',
            hisName: 'category-2',
            para: 'the best photos'
        },
        {
            image: '"imgs/1.jpg"',
            hisName: 'category-2',
            para: 'GREEN-PLAZA SHOPS'
        },
        
        {
            image: '"imgs/d4.jpg"',
            hisName: 'category-1',
            para: ' MONTAZA SHOPS'
        }

    ];

//the creation of the categiroussssssssssss 
    for (var x = 0; x < data.length; x++) {
        var divColMd4 = $('<div class="col-sm-6 col-md-4 col-xs-12 boxWithData">'); 
        var divThumbnail = $('<div class=" mix '+ data[x].hisName +' data-my-order="1" id="po">');  
        var imgFromJson = $('<a><img src=' + data[x].image + ' alt="..." height="200" width="300"></a>');
        var divCaption = $('<div class=" pos">');
        var h3HisNameJson = $('<a href="website-new.html"><b>View more</b></a>');
        var pParaJson = $('<p class="search4Name">' + data[x].para + '</p>');

        $(divCaption).append(pParaJson);
        $(divCaption).append(h3HisNameJson);
        $(divThumbnail).append(imgFromJson);
        $(divThumbnail).append(divCaption);
        $(divColMd4).append(divThumbnail);
        $(".createThePhoto").append(divColMd4);
    }
   
   
   $("#searchButton").click(function () {
        console.log("11111");
        var inputValue = $('#searchPlaceInput').val().toLowerCase();
        console.log(inputValue);
        var compare = $(".search4Name");
        var selectBigDiv = $(".boxWithData");
        for (var x = 0; x < data.length; x++) {
            var n = compare[x].innerText.toLowerCase().search(inputValue);
            if (n === -1) {
                selectBigDiv[x].style.display = 'none';
            } else {
                selectBigDiv[x].style.display = 'block';
            }
        }
    });
 });
