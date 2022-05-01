// const capitalizeFirstLetter = ([ first, ...rest ], locale = navigator.language) =>
//   first.toLocaleUpperCase(locale) + rest.join('')

function htmlToElement(html) {
  const template = document.createElement('template')
  html = html.trim()
  template.innerHTML = html
  return template.content.firstChild
}

function initPopover(baseURL) {
  const basePath = baseURL.replace(window.location.origin, "")
  document.addEventListener("DOMContentLoaded", () => {
    fetchData.then(({ content }) => {

    let testElements = [...document.getElementsByClassName('internal-link')];
    testElements.forEach(link => {
      console.log("DB", link)
      const linkText = link.textContent
      let popoverElement //FIXME

      // console.log("DB2 ", link.getElementsByClassName('broken'))
      if (link.classList.contains('broken')) {
        popoverElement = `<div class="popmeta">
        <h2>Placeholder</h2>
        <p>This link is a placeholder for ${linkText}.
        It will (probably) be added in the future</p>
        </div>`
      } else {
          // FIXME ??
          const destination = content[link.dataset.src.replace(basePath, "")]
          popoverElement = `<div class="popmeta">
          <h2>${linkText}</h2>
          <p>${removeMarkdown(destination.content).split(" ", 20).join(" ")}...</p>
          <p class="meta">${new Date(destination.lastmodified).toLocaleDateString()}</p>
          </div>`        
      } 
      const el = htmlToElement(popoverElement)
      link.appendChild(el)
      link.addEventListener("mouseover", () => {
        el.classList.add("visible")
      })
      link.addEventListener("mouseout", () => {
        el.classList.remove("visible")
      })      
    })
    })
  })
}
