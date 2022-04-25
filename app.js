    const container = $(document.body);
    $('#btnSubmit').attr("disabled", true);

    $('#textHere').keyup(function() {
        $('#btnSubmit').attr("disabled", false);
    })
  
    
    $('#btnSubmit').click(function(event) {
        event.preventDefault();
        let message = $('input').val();
        let div = $('<div></div>');
        let list = $('<ul></ul>');
        let item = $('<li></li>').text(message);
        // let h2 = $('<h2></h2>').text(message);
        // h2.hover(function() {
        //     h2.css({backgroundColor: 'gray', borderRadius: '2em'});
        // }, function() {
        //     h2.css({backgroundColor: 'white'});
        // });

        container.append(div);
        // div.append(h2);
        div.append(list);
        list.append(item);

        item.click(function() {
            const itemColor = giveRandomColor();
            item.css({color: itemColor});
        });
        item.dblclick(function() {
            item.remove();
        });
    });




    function giveRandomColor () {
        const RED = Math.floor(Math.random() * 256);
        const GREEN = Math.floor(Math.random() * 256);
        const BLUE = Math.floor(Math.random() * 256);
    
        const rgbString = `rgb(${RED}, ${GREEN}, ${BLUE})`
        return rgbString;
    }