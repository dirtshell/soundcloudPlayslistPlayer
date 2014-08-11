SC.initialize({
  client_id: 'e8296683a9af3a9f80a1f035cd9f139b'
});

$(document).ready(function() {
  SC.get('/tracks/293', function(track) {
    SC.oEmbed(track.permalink_url, document.getElementById('tracks'));
  });
});
