$(document).on('ajax:success', '#createTicket', function(event) {
    return location.reload();
});

$(document).on('ajax:error', '#createTicket', function(event) {
    var div, form, ul;
    form = $('#new_ticket .modal-body');
    div = $('<div id="createTicketErrors" class="alert alert-danger"></div>');
    ul = $('<ul></ul>');
    data = event.detail[0];
    console.log(data);
    data.messages.forEach(function(message, i) {
        var li;
        li = $('<li></li>').text(message);
        return ul.append(li);
    });
    if ($('#createTicketErrors')[0]) {
        return $('#createTicketErrors').html(ul);
    } else {
        div.append(ul);
        return form.prepend(div);
    }
});

console.log('読み込み');

