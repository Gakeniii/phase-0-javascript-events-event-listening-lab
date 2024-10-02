function addingEventListener() {
    const input = document.getElementById('button');
    input.addEventListener('click', function() {
        alert('I was clicked!');
    });
}
addingEventListener()

// CALLING THE FUNCTION NAME AS AN ARGUMENT INSTEAD OF THE FUNCTION ITSELF.
// function addEventListener(){
//     const input = document.getElementById('button');

//     function alertMe(){
//         alert('I have been clicked!')
//     }

//     input.addEventListener('click', alertMe)
// }
// addEventListener()