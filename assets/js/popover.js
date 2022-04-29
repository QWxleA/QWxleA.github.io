const capitalizeFirstLetter = ([ first, ...rest ], locale = navigator.language) =>
  first.toLocaleUpperCase(locale) + rest.join('')

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



      const empties = [...document.getElementsByClassName("internal-link broken")]
      empties.filter(link => link.dataset.src).forEach(link => {
        console.log("DB 1", link)
        
        // const linkDest = content[link.dataset.src.replace(basePath, "")]
        const linkDest = link.getAttribute('data-src').replace("/page/", "");
        console.log("DB", linkDest)
        if (linkDest) {
          const placeholder = `<div class="popmeta">
          <h2>Placeholder</h2>
          <p>This link is a placeholder for ${capitalizeFirstLetter(linkDest)}.
          It will (probably) be added in the future</p>
          </div>`
          const el = htmlToElement(placeholder)
          link.appendChild(el)
          link.addEventListener("mouseover", () => {
            el.classList.add("visible")
          })
          link.addEventListener("mouseout", () => {
            el.classList.remove("visible")
          })
        }
      })

      const links = [...document.getElementsByClassName("internal-link")]
      links
        .filter(li => li.dataset.src)
        .forEach(li => {
          const linkDest = content[li.dataset.src.replace(basePath, "")]
          if (linkDest) {
          const popoverElement = `<div class="popmeta">
                                  <h2>${linkDest.title}</h2>
                                  <p>${removeMarkdown(linkDest.content).split(" ", 20).join(" ")}...</p>
                                  <p class="meta">${new Date(linkDest.lastmodified).toLocaleDateString()}</p>
                                  </div>`
            const el = htmlToElement(popoverElement)
            li.appendChild(el)
            li.addEventListener("mouseover", () => {
              el.classList.add("visible")
            })
            li.addEventListener("mouseout", () => {
              el.classList.remove("visible")
            })
          }
        })
    })
  })
}
