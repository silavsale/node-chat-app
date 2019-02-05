var socket = io();
const date = new Date();


socket.on('connect', function () {
    console.log('Connected to server ' + socket.id);

    // socket.emit('createEmail', {
    //     to: 'jane@example.com',
    //     text: 'Hey. This is Sergo.'
    // });

    // socket.emit('createMessage', {
    //     from: 'Paul',
    //     text: 'Whats up'
    // });

});

socket.on('disconnect', function () {
    console.log('Disconnected from server');
});

// socket.on('newEmail', function (email) {
//     console.log('New email', email);
// });

socket.on('newMessage', function (message) {
    console.log('New message', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text} - ${date}` );

    jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery("[name=message]").val()
    }, function () {

    });
});
