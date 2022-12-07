function icecream(){
    fetch('https://patisserie-rabih-server.onrender.com/icecream')
  .then(response => response.json())
  .then(json => {
        var extract = document.getElementById('icecream')
        for (let index = 0; index < json.length; index++) {
            var br = document.createElement('br')
            var mainDiv = document.createElement('div')
            mainDiv.className="row"
            var firstDiv = document.createElement('div')
            if (screen.width>750){
                firstDiv.className="col-lg-6 order-1 order-lg-2"
            }
            else {
                firstDiv.className="col-lg-6 order-2 order-lg-1"
            }
            firstDiv.setAttribute("data-aos", "fade-right")
            firstDiv.setAttribute("data-aos-delay", "100")
            var img = document.createElement('img')
            img.src = json[index].path
            img.className="img-fluid image"
            img.alt = ""
            firstDiv.appendChild(img)
            mainDiv.appendChild(firstDiv)
            var secondDiv = document.createElement('div')
            if (screen.width>750)
            {
                secondDiv.className="col-lg-6 order-2 order-lg-1"
            }
            else
            {
                secondDiv.className="col-lg-6 order-1 order-lg-2"
            }
            secondDiv.setAttribute("data-aos", "fade-left")
            secondDiv.setAttribute("data-aos-delay", "100")
            secondDiv.style="margin-left: 0.3cm;"
            firstDiv.style="margin-left: 0.3cm;"
            var h1=document.createElement('h1')
            h1.style="font-style: bold!important;"
            h1.innerHTML = json[index].name
            secondDiv.appendChild(h1)
            mainDiv.appendChild(secondDiv)
            var pricesDiv = document.createElement('div')
            var text = document.createElement('p')
            text.innerHTML = "Price:"
            pricesDiv.className = "col-lg-6 order-3 order-lg-3"
            pricesDiv.style="margin-left: 0.3cm;"
            pricesDiv.appendChild(text)
            var prices = document.createElement('p')
            prices.innerHTML = json[index].price
            prices.appendChild(br)
            pricesDiv.appendChild(prices)
            mainDiv.appendChild(pricesDiv)
            mainDiv.appendChild(br)
            extract.appendChild(mainDiv)
            extract.appendChild(br)   
          }
  })
}
icecream()
function cheesecakes(){
    fetch('https://patisserie-rabih-server.onrender.com/cheesecakes')
  .then(response => response.json())
  .then(json => {
        var extract = document.getElementById('cheesecake')
        for (let index = 0; index < json.length; index++) {
            var br = document.createElement('br')
            var mainDiv = document.createElement('div')
            mainDiv.className="row"
            var firstDiv = document.createElement('div')
            if (screen.width>750){
                firstDiv.className="col-lg-6 order-1 order-lg-2"
            }
            else {
                firstDiv.className="col-lg-6 order-2 order-lg-1"
            }
            firstDiv.setAttribute("data-aos", "fade-right")
            firstDiv.setAttribute("data-aos-delay", "100")
            var img = document.createElement('img')
            img.src = json[index].path
            img.className="img-fluid image"
            img.alt = ""
            firstDiv.appendChild(img)
            mainDiv.appendChild(firstDiv)
            var secondDiv = document.createElement('div')
            if (screen.width>750)
            {
                secondDiv.className="col-lg-6 order-2 order-lg-1"
            }
            else
            {
                secondDiv.className="col-lg-6 order-1 order-lg-2"
            }
            secondDiv.setAttribute("data-aos", "fade-left")
            secondDiv.setAttribute("data-aos-delay", "100")
            secondDiv.style="margin-left: 0.3cm;"
            firstDiv.style="margin-left: 0.3cm;"
            var h1=document.createElement('h1')
            h1.style="font-style: bold!important;"
            h1.innerHTML = json[index].name
            secondDiv.appendChild(h1)
            mainDiv.appendChild(secondDiv)
            var pricesDiv = document.createElement('div')
            var text = document.createElement('p')
            text.innerHTML = "Price:"
            pricesDiv.className = "col-lg-6 order-3 order-lg-3"
            pricesDiv.style="margin-left: 0.3cm;"
            pricesDiv.appendChild(text)
            var prices = document.createElement('p')
            prices.innerHTML = json[index].price
            prices.appendChild(br)
            pricesDiv.appendChild(prices)
            mainDiv.appendChild(pricesDiv)
            mainDiv.appendChild(br)
            extract.appendChild(mainDiv)
            
            extract.appendChild(br)   
          }
  })
}
cheesecakes()
function crepe(){
    fetch('https://patisserie-rabih-server.onrender.com/crepe')
  .then(response => response.json())
  .then(json => {
        var extract = document.getElementById('crepe')
        for (let index = 0; index < json.length; index++) {
            var br = document.createElement('br')
            var mainDiv = document.createElement('div')
            mainDiv.className="row"
            var firstDiv = document.createElement('div')
            if (screen.width>750){
                firstDiv.className="col-lg-6 order-1 order-lg-2"
            }
            else {
                firstDiv.className="col-lg-6 order-2 order-lg-1"
            }
            firstDiv.setAttribute("data-aos", "fade-right")
            firstDiv.setAttribute("data-aos-delay", "100")
            var img = document.createElement('img')
            img.src = json[index].path
            img.className="img-fluid image"
            img.alt = ""
            firstDiv.appendChild(img)
            mainDiv.appendChild(firstDiv)
            var secondDiv = document.createElement('div')
            if (screen.width>750)
            {
                secondDiv.className="col-lg-6 order-2 order-lg-1"
            }
            else
            {
                secondDiv.className="col-lg-6 order-1 order-lg-2"
            }
            secondDiv.setAttribute("data-aos", "fade-left")
            secondDiv.setAttribute("data-aos-delay", "100")
            secondDiv.style="margin-left: 0.3cm;"
            firstDiv.style="margin-left: 0.3cm;"
            var h1=document.createElement('h1')
            h1.style="font-style: bold!important;"
            h1.innerHTML = json[index].name
            secondDiv.appendChild(h1)
            mainDiv.appendChild(secondDiv)
            var pricesDiv = document.createElement('div')
            var text = document.createElement('p')
            text.innerHTML = "Price:"
            pricesDiv.className = "col-lg-6 order-3 order-lg-3"
            pricesDiv.style="margin-left: 0.3cm;"
            pricesDiv.appendChild(text)
            var prices = document.createElement('p')
            if (json[index].name == "Suchi Crêpe")
            {
                text.innerHTML = "Prices:"
                prices.innerHTML = json[index].price
                prices.appendChild(br)
                prices.innerHTML+= json[index].threePrice
                prices.appendChild(br)
                prices.innerHTML += json[index].sevenPrice
            }
            else 
            {
                prices.innerHTML = json[index].price
            }
            prices.appendChild(br)
            pricesDiv.appendChild(prices)
            mainDiv.appendChild(pricesDiv)
            mainDiv.appendChild(br)
            extract.appendChild(mainDiv)
            extract.appendChild(br)   
          }
  })
}
crepe()
function milkshake(){
    fetch('https://patisserie-rabih-server.onrender.com/milkshake')
  .then(response => response.json())
  .then(json => {
        var extract = document.getElementById('milkshake')
        for (let index = 0; index < json.length; index++) {
            var br = document.createElement('br')
            var mainDiv = document.createElement('div')
            mainDiv.className="row"
            var firstDiv = document.createElement('div')
            if (screen.width>750){
                firstDiv.className="col-lg-6 order-1 order-lg-2"
            }
            else {
                firstDiv.className="col-lg-6 order-2 order-lg-1"
            }
            
            firstDiv.setAttribute("data-aos", "fade-right")
            firstDiv.setAttribute("data-aos-delay", "100")
            var img = document.createElement('img')
            img.src = json[index].path
            img.className="img-fluid image"
            img.alt = ""
            firstDiv.appendChild(img)
            mainDiv.appendChild(firstDiv)
            var secondDiv = document.createElement('div')
            if (screen.width>750)
            {
                secondDiv.className="col-lg-6 order-2 order-lg-1"
            }
            else
            {
                secondDiv.className="col-lg-6 order-1 order-lg-2"
            }
            secondDiv.setAttribute("data-aos", "fade-left")
            secondDiv.setAttribute("data-aos-delay", "100")
            secondDiv.style="margin-left: 0.3cm;"
            firstDiv.style="margin-left: 0.3cm;"
            var h1=document.createElement('h1')
            h1.style="font-style: bold!important;"
            h1.innerHTML = json[index].name
            secondDiv.appendChild(h1)
            mainDiv.appendChild(secondDiv)
            var pricesDiv = document.createElement('div')
            var text = document.createElement('p')
            text.innerHTML = "Price:"
            pricesDiv.className = "col-lg-6 order-3 order-lg-3"
            pricesDiv.style="margin-left: 0.3cm;"
            pricesDiv.appendChild(text)
            var prices = document.createElement('p')
            prices.innerHTML = "Small: " + json[index].small
            prices.appendChild(br)
            prices.innerHTML += "Medium: " + json[index].medium
            prices.appendChild(br)
            prices.innerHTML += "Large: " + json[index].large
            prices.appendChild(br)
            prices.innerHTML += "Extra Large: " + json[index].extra
            prices.appendChild(br)
            pricesDiv.appendChild(prices)
            mainDiv.appendChild(pricesDiv)
            mainDiv.appendChild(br)
            extract.appendChild(mainDiv)
            
            extract.appendChild(br)   
          }
  })
}
milkshake()
function cakes(){
    fetch('https://patisserie-rabih-server.onrender.com/cakes')
  .then(response => response.json())
  .then(json => {
        var extract = document.getElementById('cake')
        for (let index = 0; index < json.length; index++) {
            var br = document.createElement('br')
            var mainDiv = document.createElement('div')
            mainDiv.className="row"
            var firstDiv = document.createElement('div')
            if (screen.width>750){
                firstDiv.className="col-lg-6 order-1 order-lg-2"
            }
            else {
                firstDiv.className="col-lg-6 order-2 order-lg-1"
            }
            firstDiv.setAttribute("data-aos", "fade-right")
            firstDiv.setAttribute("data-aos-delay", "100")
            var img = document.createElement('img')
            img.src = "assets/cakes/" + json[index].path
            img.className="img-fluid image"
            img.alt = ""
            firstDiv.appendChild(img)
            mainDiv.appendChild(firstDiv)
            var secondDiv = document.createElement('div')
            if (screen.width>750)
            {
                secondDiv.className="col-lg-6 order-2 order-lg-1"
            }
            else
            {
                secondDiv.className="col-lg-6 order-1 order-lg-2"
            }
            secondDiv.setAttribute("data-aos", "fade-left")
            secondDiv.setAttribute("data-aos-delay", "100")
            secondDiv.style="margin-left: 0.3cm;"
            firstDiv.style="margin-left: 0.3cm;"
            var h1=document.createElement('h1')
            h1.style="font-style: bold!important;"
            h1.innerHTML = json[index].name
            secondDiv.appendChild(h1)
            mainDiv.appendChild(secondDiv)
            var pricesDiv = document.createElement('div')
            var text = document.createElement('p')
            text.innerHTML = json[index].price
            pricesDiv.className = "col-lg-6 order-3 order-lg-3"
            pricesDiv.style="margin-left: 0.3cm;"
            text.style = "padding-top: 10px"
            pricesDiv.appendChild(text)
            mainDiv.appendChild(pricesDiv)
            mainDiv.appendChild(br)
            extract.appendChild(mainDiv)
            
            extract.appendChild(br)   
          }
  })
}
cakes()
function mousse(){
    fetch('https://patisserie-rabih-server.onrender.com/mousse')
  .then(response => response.json())
  .then(json => {
        var extract = document.getElementById('mousse')
        for (let index = 0; index < json.length; index++) {
            var br = document.createElement('br')
            var mainDiv = document.createElement('div')
            mainDiv.className="row"
            var firstDiv = document.createElement('div')
            if (screen.width>750){
                firstDiv.className="col-lg-6 order-1 order-lg-2"
            }
            else {
                firstDiv.className="col-lg-6 order-2 order-lg-1"
            }
            firstDiv.setAttribute("data-aos", "fade-right")
            firstDiv.setAttribute("data-aos-delay", "100")
            var img = document.createElement('img')
            img.src = "assets/mousseCakes/" + json[index].path
            img.className="img-fluid image"
            img.alt = ""
            firstDiv.appendChild(img)
            mainDiv.appendChild(firstDiv)
            var secondDiv = document.createElement('div')
            if (screen.width>750)
            {
                secondDiv.className="col-lg-6 order-2 order-lg-1"
            }
            else
            {
                secondDiv.className="col-lg-6 order-1 order-lg-2"
            }
            secondDiv.setAttribute("data-aos", "fade-left")
            secondDiv.setAttribute("data-aos-delay", "100")
            secondDiv.style="margin-left: 0.3cm;"
            firstDiv.style="margin-left: 0.3cm;"
            var h1=document.createElement('h1')
            h1.style="font-style: bold!important;"
            h1.innerHTML = json[index].name
            secondDiv.appendChild(h1)
            mainDiv.appendChild(secondDiv)
            var pricesDiv = document.createElement('div')
            var text = document.createElement('p')
            text.innerHTML = "Price:"
            pricesDiv.className = "col-lg-6 order-3 order-lg-3"
            pricesDiv.style="margin-left: 0.3cm;"
            pricesDiv.appendChild(text)
            var prices = document.createElement('p')
            prices.innerHTML = json[index].price
            prices.appendChild(br)
            pricesDiv.appendChild(prices)
            mainDiv.appendChild(pricesDiv)
            mainDiv.appendChild(br)
            extract.appendChild(mainDiv)
            
            extract.appendChild(br)   
          }
  })
}
mousse()
function brownies(){
    fetch('https://patisserie-rabih-server.onrender.com/brownies')
  .then(response => response.json())
  .then(json => {
        var extract = document.getElementById('brownie')
        for (let index = 0; index < json.length; index++) {
            var br = document.createElement('br')
            var mainDiv = document.createElement('div')
            mainDiv.className="row"
            var firstDiv = document.createElement('div')
            if (screen.width>750){
                firstDiv.className="col-lg-6 order-1 order-lg-2"
            }
            else {
                firstDiv.className="col-lg-6 order-2 order-lg-1"
            }
            firstDiv.setAttribute("data-aos", "fade-right")
            firstDiv.setAttribute("data-aos-delay", "100")
            var img = document.createElement('img')
            img.src = "assets/brownies/" + json[index].path
            img.className="img-fluid image"
            img.alt = ""
            firstDiv.appendChild(img)
            mainDiv.appendChild(firstDiv)
            var secondDiv = document.createElement('div')
            if (screen.width>750)
            {
                secondDiv.className="col-lg-6 order-2 order-lg-1"
            }
            else
            {
                secondDiv.className="col-lg-6 order-1 order-lg-2"
            }
            secondDiv.setAttribute("data-aos", "fade-left")
            secondDiv.setAttribute("data-aos-delay", "100")
            secondDiv.style="margin-left: 0.3cm;"
            firstDiv.style="margin-left: 0.3cm;"
            var h1=document.createElement('h1')
            h1.style="font-style: bold!important;"
            h1.innerHTML = json[index].name
            secondDiv.appendChild(h1)
            mainDiv.appendChild(secondDiv)
            var pricesDiv = document.createElement('div')
            var text = document.createElement('p')
            text.innerHTML = "Price:"
            pricesDiv.className = "col-lg-6 order-3 order-lg-3"
            pricesDiv.style="margin-left: 0.3cm;"
            pricesDiv.appendChild(text)
            var prices = document.createElement('p')
            prices.innerHTML = json[index].price
            prices.appendChild(br)
            pricesDiv.appendChild(prices)
            mainDiv.appendChild(pricesDiv)
            mainDiv.appendChild(br)
            extract.appendChild(mainDiv)
            extract.appendChild(br)   
          }
  })
}
brownies()
function specials(){
    fetch('https://patisserie-rabih-server.onrender.com/special')
  .then(response => response.json())
  .then(json => {
        var extract = document.getElementById('special')
        for (let index = 0; index < json.length; index++) {
            var br = document.createElement('br')
            var mainDiv = document.createElement('div')
            mainDiv.className="row"
            var firstDiv = document.createElement('div')
            if (screen.width>750){
                firstDiv.className="col-lg-6 order-1 order-lg-2"
            }
            else {
                firstDiv.className="col-lg-6 order-2 order-lg-1"
            }
            
            firstDiv.setAttribute("data-aos", "fade-right")
            firstDiv.setAttribute("data-aos-delay", "100")
            var img = document.createElement('img')
            img.src = "assets/specials/" + json[index].path
            img.className="img-fluid image"
            img.alt = ""
            firstDiv.appendChild(img)
            mainDiv.appendChild(firstDiv)
            var secondDiv = document.createElement('div')
            if (screen.width>750)
            {
                secondDiv.className="col-lg-6 order-2 order-lg-1"
            }
            else
            {
                secondDiv.className="col-lg-6 order-1 order-lg-2"
            }
            secondDiv.setAttribute("data-aos", "fade-left")
            secondDiv.setAttribute("data-aos-delay", "100")
            secondDiv.style="margin-left: 0.3cm;"
            firstDiv.style="margin-left: 0.3cm;"
            var h1=document.createElement('h1')
            h1.style="font-style: bold!important;"
            h1.innerHTML = json[index].name
            secondDiv.appendChild(h1)
            mainDiv.appendChild(secondDiv)
            var pricesDiv = document.createElement('div')
            var text = document.createElement('p')
            if (json[index].path == "Cookies Special.jpg")
            {               
                text.innerHTML = "Price:"
                pricesDiv.className = "col-lg-6 order-3 order-lg-3"
                pricesDiv.style="margin-left: 0.3cm;"
                pricesDiv.appendChild(text)
                var prices = document.createElement('p')
                prices.innerHTML = json[index].price
                prices.appendChild(br)
                pricesDiv.appendChild(prices)
            }
            else{
                pricesDiv.className = "col-lg-6 order-3 order-lg-3"
                pricesDiv.style="margin-left: 0.3cm;"
                text.innerHTML = json[index].price
                text.style = "padding-top: 10px"
                pricesDiv.appendChild(text)
            }

            
            
            mainDiv.appendChild(pricesDiv)
            mainDiv.appendChild(br)
            extract.appendChild(mainDiv)          
            extract.appendChild(br)   
          }
  })
}
specials()
function ramadan(){
    fetch('https://patisserie-rabih-server.onrender.com/ramadan')
  .then(response => response.json())
  .then(json => {
        var extract = document.getElementById('ramadan')
        for (let index = 0; index < json.length; index++) {
            var br = document.createElement('br')
            var mainDiv = document.createElement('div')
            mainDiv.className="row"
            var firstDiv = document.createElement('div')
            if (screen.width>750){
                firstDiv.className="col-lg-6 order-1 order-lg-2"
            }
            else {
                firstDiv.className="col-lg-6 order-2 order-lg-1"
            }
            
            firstDiv.setAttribute("data-aos", "fade-right")
            firstDiv.setAttribute("data-aos-delay", "100")
            var img = document.createElement('img')
            img.src = "assets/ramadan/" + json[index].path
            img.className="img-fluid image"
            img.alt = ""
            firstDiv.appendChild(img)
            mainDiv.appendChild(firstDiv)
            var secondDiv = document.createElement('div')
            if (screen.width>750)
            {
                secondDiv.className="col-lg-6 order-2 order-lg-1"
            }
            else
            {
                secondDiv.className="col-lg-6 order-1 order-lg-2"
            }
            secondDiv.setAttribute("data-aos", "fade-left")
            secondDiv.setAttribute("data-aos-delay", "100")
            secondDiv.style="margin-left: 0.3cm;"
            firstDiv.style="margin-left: 0.3cm;"
            var h1=document.createElement('h1')
            h1.style="font-style: bold!important;"
            h1.innerHTML = json[index].name
            secondDiv.appendChild(h1)
            mainDiv.appendChild(secondDiv)
            var pricesDiv = document.createElement('div')
            var text = document.createElement('p')
            if (json[index].name == "Kachta Tarte" || json[index].name == "Kachta Roll with Icecream" )
            {               
                text.innerHTML = "Price:"
                pricesDiv.className = "col-lg-6 order-3 order-lg-3"
                pricesDiv.style="margin-left: 0.3cm;"
                pricesDiv.appendChild(text)
                var prices = document.createElement('p')
                prices.innerHTML = json[index].price
                prices.appendChild(br)
                var onePiece = document.createElement('p')
                onePiece.innerHTML = json[index].onePiece
                prices.appendChild(onePiece)
                prices.appendChild(br)
                pricesDiv.appendChild(prices)
                
            }
            else{
                text.innerHTML = "Price:"
                pricesDiv.className = "col-lg-6 order-3 order-lg-3"
                pricesDiv.style="margin-left: 0.3cm;"
                pricesDiv.appendChild(text)
                var prices = document.createElement('p')
                prices.innerHTML = json[index].price
                prices.appendChild(br)
                pricesDiv.appendChild(prices)
            }
            mainDiv.appendChild(pricesDiv)
            mainDiv.appendChild(br)
            extract.appendChild(mainDiv)          
            extract.appendChild(br)   
          }
  })
}
ramadan()