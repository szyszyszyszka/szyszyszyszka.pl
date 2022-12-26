function setDisplaedTime(writeTo)
{
  let current_date = new Date();
  
  let hours = current_date.getHours();
  if(hours < 10)
  {
    hours = hours.toString();
    hours = `0${hours}`;
  }else hours = hours.toString();

  let minutes = current_date.getMinutes();
  if(minutes < 10)
  {
    minutes = minutes.toString();
    minutes = `0${minutes}`;
  }else minutes = minutes.toString();

  let seconds = current_date.getSeconds();
  if(seconds < 10)
  {
    seconds = seconds.toString();
    seconds = `0${seconds}`;
  }else seconds = seconds.toString();

  writeTo.innerHTML = `${hours}:${minutes}:${seconds}`;
}

$(document).ready(function()
{
  let timeDisplay = document.getElementById("current_time");
  let main_container = document.querySelector("main");
  let footer_container = document.querySelector("footer");
  let picture = document.getElementById("profile_picture");
  setTimeout(function()
  {
    setInterval(setDisplaedTime, 1000, timeDisplay);
    $(timeDisplay).css("visibility","visible");
  },100);
  setTimeout(function()
  {
    $(picture).css("opacity","1");
  },2000);
  setTimeout(function()
  {
    $(main_container).css("visibility","visible");
    $(footer_container).css("visibility","visible");
  },3000);
});