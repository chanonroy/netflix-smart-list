console.log("Netflix Smart List")

// Scroll to Bottom
window.scrollTo(0,document.body.scrollHeight);

var titles

function scrapeTitles() {
  var list = []
  document.querySelectorAll('.title-card a[aria-label]').forEach(
      function(item) {
          try {
              list.push({
                  name: item.getAttribute('aria-label'),
                  link: ("https://www.netflix.com" + item.getAttribute("href").split("?")[0]).replace('watch', 'title')
              })
          } catch (err) {
              console.error("ERROR: Ignored err", err, item)
          }
      })
  return (JSON.stringify(list));
}

setTimeout(() => {
  titles = scrapeTitles()
  console.log(titles)
}, 1000)