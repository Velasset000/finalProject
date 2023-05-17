const boxes = [
    {
        name: ''
    },
    {
        name: ''
    },
    {
        name: ''
    },
    {
        name: ''
    },
    {
        name: ''
    },
    {
        name: ''
    },
    {
        name: ''
    },
    {
        name: ''
    },
    {
        name: ''
    },
    {
        name: ''
    },
    {
        name: ''
    },
    {
        name: ''
    },
    {
        name: ''
    },
    {
        name: ''
    },
    {
        name: ''
    },
    {
        name: ''
    },
];
let fullBox = ""
boxes.forEach(function(box){
    let boxResult = box.name;
    let normal = $('#notClicked');
    if (boxResult === '') {
        let emptyBox = "<div id='notClicked'></div>"
        fullBox += emptyBox;
    }

});
$('#appendBox').append(fullBox);

$(document).ready(function(){
    $('#appendBox').on('click', '#notClicked',function(){
        $(this).toggleClass('clicked')
    })
})
