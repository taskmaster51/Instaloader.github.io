document.getElementById("kaiForm").onsubmit = async function(e){
  e.preventDefault();
  let url = document.getElementById("url").value;
  let resBox = document.getElementById("result");

  resBox.innerHTML = "⏳ Fetching media...";

  let res = await fetch("fetch.php",{
    method:"POST",
    headers:{'Content-Type':'application/x-www-form-urlencoded'},
    body:"url="+encodeURIComponent(url)
  });

  let data = await res.json();

  if(data.status){
    resBox.innerHTML = `<a class="download-btn" href="${data.link}" target="_blank">Download Now</a>`;
  }else{
    resBox.innerHTML = "❌ Failed to fetch media";
  }
}
