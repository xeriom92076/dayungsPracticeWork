window.onload = function () {
  const teaBox1 = document.querySelector(".teaBox1")
  const teaBox2 = document.querySelector(".teaBox2")
  const teaBox3 = document.querySelector(".teaBox3")
  const mainArea = document.querySelector(".mainArea")
  const leafAbout1 = document.querySelector(".leaf_about1")
  const leafAbout2 = document.querySelector(".leaf_about2")
  const bannerH1 = document.querySelector(".banner-h1")

  bannerH1.classList.add('banner-h1-show');

  function scrollMove(){
    const scrollHeight = window.scrollY
    if (scrollHeight < mainArea.offsetTop ) {
      teaBox1.style.transform = "translateY(" + scrollHeight / 3 + "px)"
      teaBox2.style.transform = "translateY(" + scrollHeight / 2 + "px)"
      teaBox3.style.transform = "translateY(-" + scrollHeight / 4 + "px)"
    }
    const moveImg1 = (leafAbout1.offsetTop) + (leafAbout1.clientHeight);
    if (window.scrollY > moveImg1){
      leafAbout1.classList.add('leaf_show1');
    }else{
      leafAbout1.classList.remove('leaf_show1');
    }

    const moveImg2 = (leafAbout2.offsetTop) + (leafAbout2.clientHeight / 2);
    if (window.scrollY > moveImg2){
      leafAbout2.classList.add('leaf_show2');
    }else{
      leafAbout2.classList.remove('leaf_show2');
    }
  }
  window.addEventListener('scroll', scrollMove)


  //NAV
  const navShowBtn = document.querySelector('.navBtn')
  const navWrap = document.querySelector('nav')
  const navHidden = document.querySelector('.navHidden')
  function navArea(e){
    navWrap.classList.toggle('navHidden');
    navShowBtn.classList.toggle('navBtnCross');
    e.stopPropagation()
  }
  navShowBtn.addEventListener('click', navArea)
}