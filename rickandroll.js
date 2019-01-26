/*
Rewrites all links so they all point to rick and roll.
*/
rickandroll = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

var anchors = document.getElementsByTagName('a');

for (i = 0; i < anchors.length; i++) {
    anchors[i].href = rickandroll
}
