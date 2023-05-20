

//let result = disName;
$(document).ready(function(){
    $("#myButton").click(function(){
       let dispName = $('#displayName').val();
       let comm = $('#userComment').val();
       let hidComm = $('#editComment').val()
       let commLength = $(comm).length
       
       //if ($(comm).length === 0){
         //  alert('Please enter Display Name and Comment')
       //}
       // else {
        //let comment =  $('#appendComment').append('<div class="userComment">' +'<img id="icon" src="images/icon.png">'+ '<div class="displayNameId">' + dispName + '</div>'+ ' ' + '<div id="displayNameId">' + comm + '</div>' +'<button id= "editButton" class = "button" >Edit' +'<button id= "deleteButton" class = "button">Delete');

        let newComment = $('<div class="userComment"></div>')
        
        newComment.append('<img id="icon" src="images/icon.png">');
        newComment.append('<div id="displayNameId">' + dispName + '</div>');
        newComment.append('<div id="comment">' + comm + '</div>');

        //delete button
        let deleteButton = $('<button class= "deleteButton" class = "button">Delete</button>')
            $(document).on('click', '.deleteButton', function(){
                $(this).parent().next('div').remove()
                $(this).parent().remove()
                
            })
        newComment.append(deleteButton); 
        
        //edit button
        let editButton = $('<button class= "editButton" class = "button" >Edit</div>')
            $(document).on('click', '.editButton', function(){
                
                $(this).parent().next('div').css({'display': 'block'}),
                $(this).parent().next('div').find('.editComment').css({'display': 'block'}),
                $(this).parent().next('div').find('.myHiddenButton').css({'display': 'block'})

               // hiddenText.css({
                //    'display': 'block'
               // }),
               // editSubmit.css({
               //     'display': 'block'
               // })
               // $('#hiddenSection').css({
               //     'display': 'block'
               // })
            })
            newComment.append(editButton)

 

        let editSubmit = $('<button type="button" class="myHiddenButton" style="display: none;font-size: 20px ;height:35px; background-color: white; border: none; color: #8DD8D5;">Submit</button>')
        let commentChanger =  $('.editComment').val() 
        console.log(commentChanger)
        console.log(commentChanger)
            $(document).on('click', '.myHiddenButton', function(){
                
               
                commentChanger = $(this).parents().prev().find('#comment').text() ,
                //newComment.append('<div id="comment">' + $('.editComment').val() + '</div>')
    
                $(this).parent().find('.editComment').css({'display': 'none'}),
                $(this).parent().find('.myHiddenButton').css({'display': 'none'})
                
             //   hiddenText.css({
             //       'display': 'none'
             //   }),
             //   editSubmit.css({
             //       'display': 'none'
             //   }),
             //   $('#hiddenSection').css({
             //       'display': 'none'
             //   })
                
               // commentChanger.text(hidComm)
            })
            
        
        let hiddenText = $('<input type="text" class="editComment" placeholder="Edit Comment" style= "display: none; font-size: 20px ;height:35px; width: 750px; color: #CACBC8"></input>')
        let editCommentVar = $('<div id="hiddenSection"></div>')
        editCommentVar.append(hiddenText)
        editCommentVar.append(editSubmit)
        $('#appendComment').append(newComment)
        $('#appendComment').append(editCommentVar)
        

        newComment.find('.editComment').css({
            'background-color': '#ADADAD',
            'margin-top': '100px',
            'float': 'left'
        })
        newComment.find('.myHiddenButton').css({
            'background-color': '#ADADAD',
            'padding-top': '25px',
            'margin-top': '100px',
            'float': 'right'
        })


        newComment.find('img').css({
            'width': '100px',
            'float': 'left'
        })
        newComment.find('#displayNameId').css({
            'float': 'left',
            'font-size': '25px'
        })
        newComment.find('#comment').css({
            'max-width': '1000px',
            'height': '100px',
            'font-size': '30px',
            'font-weight': 'bold',
            'position': 'absolute',
            //'left': '195px',
            'margin-left': '98px',
            'padding-top': '25px',
            'z-index': '0',
            'word-wrap': 'break-word'
        })
        newComment.find('.deleteButton').css({
            'color': '#8DD8D5',
            'border': 'none',
            'font-size': '15px',
            'background-color': '#E6E6E6',
            'float': 'right',
            'margin-top': '36px',
            'margin-right': '20px',
        })
        newComment.find('.editButton').css({
            'color': '#8DD8D5',
            'border': 'none',
            'font-size': '15px',
            'background-color': '#E6E6E6',
            'float': 'right',
            'margin-top': '36px',
        })
        editCommentVar.find('#editComment').css({
            'width': '800px',
            'float': 'left',
            'background-color': '#E6E6E6',
            'margin-left': '90px',
            'height': '25px'
        })
        editCommentVar.find('#myHiddenButton').css({
            'width': '90px',
            'float': 'right',
            'margin-right': '90px',
            'background-color': '#E6E6E6'
        })
        editCommentVar.find('#hiddenSection').css({
            'height': '30px',
            'width': '1650px',
            'padding': '10px',
            'background-color': '#E6E6E6'
        })
        //let editButton = $(editButtonPlace)


        })
       // }
    });


//console.log(result);
//console.log(dispName);
//+'<img scr="images/icon.png'>