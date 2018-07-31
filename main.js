<script>
function scrollTo(to, duration) {
    if (document.body.scrollTop == to)
      return;
    let diff = to - document.body.scrollTop;
    let scrollStep = Math.PI / (duration / 10);
    let count = 0, currPos;
    start = element.scrollTop;
    scrollInterval = setInterval(function(){
        if (document.body.scrollTop != to) {
            count = count + 1;
            currPos = start + diff * (0.5 - 0.5 * Math.cos(count * scrollStep));
            document.body.scrollTop = currPos;
        }
        else {
          clearInterval(scrollInterval)
        }
    },10);
}

function test(elID)
{
    let dest = document.getElementById(elID);
    scrollTo(dest.offsetTop, 500);
}
</script>