$(document).ready(function() {
    $('.founder').click(function() {
        var founderName = $(this).data('founder');

        // Reset all bios and images
        $('.founder-bio').hide();
        $('.founder').removeClass('active');

        // Show the selected bio and highlight image
        $('#' + founderName + '-bio').show();
        $(this).addClass('active');
    });
});
