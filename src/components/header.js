const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //


  //creating HTML elements
  const header = document.createElement('div')
  const theDate = document.createElement('span')
  const theTitle = document.createElement('h1')
  const theTemp = document.createElement('span')

  //setting text content
  theDate.textContent = date
  theTitle.textContent = title
  theTemp.textContent = temp

  //setting classes
  header.classList.add('header')
  theDate.classList.add('date')
  theTemp.classList.add('temp')

  //appending elements to appropriately
  header.appendChild(theDate)
  header.appendChild(theTitle)
  header.appendChild(theTemp)

  //finally, returning the markup
  return header

}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

 //selecting where to append to 
  let appendingArea = document.querySelector(selector)

  //getting current date
  let today = new Date().toLocaleDateString()

  //running function to build header
  let markup = Header('The Axios Post', today, '75° F')

  //appending header to DOM
  appendingArea.appendChild(markup)

}

export { Header, headerAppender }

//TESTING
// console.log(new Date().toLocaleDateString())
// headerAppender('.header-container')