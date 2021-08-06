import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

//creating all elements
  const articleCard = document.createElement('div')
  const articleHeadline = document.createElement('div')
  const articleAuthor = document.createElement('div')
  const imgContainer = document.createElement('div')
  const pic = document.createElement('img')
  const byLine = document.createElement('span')

  //setting text content
  articleHeadline.textContent = article.headline
  pic.setAttribute('src', article.authorPhoto)
  pic.setAttribute('alt', `This is a picture of ${article.authorName}`)
  byLine.textContent = article.authorName

  //setting classes on elements
  articleCard.classList.add('card')
  articleHeadline.classList.add('headline')
  articleAuthor.classList.add('author')
  imgContainer.classList.add('img-container')

  //appending elements appropriately
  articleCard.appendChild(articleHeadline)
  articleCard.appendChild(articleAuthor)
  articleAuthor.appendChild(imgContainer)
  imgContainer.appendChild(pic)
  articleAuthor.appendChild(byLine)

  articleCard.addEventListener('click', e => {
    console.log(article.headline)
  })

  return articleCard
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  axios.get('http://localhost:5000/api/articles')
  .then(res => {
    console.log(res.data.articles)
    const articleCats = Object.values(res.data.articles)
    console.log(articleCats)
    console.log(articleCats)
    articleCats.forEach(articleCat => {
      articleCat.forEach(article =>{
        const newCard = Card(article)
        document.querySelector(selector).appendChild(newCard)
      })
    })
  })
  .catch(err => {
    console.error(err)
    alert(err)
  })
}

export { Card, cardAppender }
