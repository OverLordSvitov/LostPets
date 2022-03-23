let date = new Date ("march 10 2023 19:00:00");

function counts() {
  let now = new Date();
  rap = date - now;
  console.log(rap);

  let days = Math.floor(rap / (1000 * 60 * 60 * 24)); 
  let hours = Math.floor((rap / 1000 / 60 / 60) % 24);
  let minutes = Math.floor((rap / 1000/ 60) % 60);
  let seconds = Math.floor((rap / 1000) % 60);
   
  if (rap < 0){
    document.getElementById('timer').innerText = 'Акция завершенна'
   
  }else{
  document.getElementById('d').innerText = days;
  document.getElementById('h').innerText = hours;
  document.getElementById('m').innerText = minutes;
  document.getElementById('s').innerText = seconds;
  }

}

counts()
setInterval(counts, 1000)


