window.onload = function(){
  const film = document.getElementById('film')
  const prev = document.querySelector('.prev')
  const next = document.querySelector('.next')


  const nextSlide = () => { // 보이지 않는 슬라이드 맨 뒤로 보내기
    let firstSlide = film.removeChild(film.firstElementChild);
    film.appendChild(firstSlide)
  }
  const prevSlide = () => { // 보이지 않는 슬라이드 앞으로 보내기
   let lastSlide = film.removeChild(film.lastElementChild);
   film.insertBefore(lastSlide, film.firstElementChild)
 }

  let timerId = setInterval(nextSlide, 3000)

  film.addEventListener('mouseenter', function(){
    clearInterval(timerId)
  })
  film.addEventListener('mouseleave', function(){
    timerId = setInterval(nextSlide, 3000)
  })
  prev.addEventListener('click', function(){
    clearInterval(timerId)
    prevSlide()
  })
  next.addEventListener('click', function(){
    clearInterval(timerId)
    nextSlide()
  })
}

// 스크롤시 슬라이드 효과주기