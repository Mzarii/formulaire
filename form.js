function evl() {
  let tm = document.getElementById("tem").value;
  console.log(tm);
  if (tm <= 0) document.getElementById("msg").innerHTML += `glaciale`;
  else if (tm <= 15) document.getElementById("msg").innerHTML += `froid`;
  else if (tm <= 25) document.getElementById("msg").innerHTML += `beau temps`;
  else if (tm <= 35) document.getElementById("msg").innerHTML += `modéré`;
  else document.getElementById("msg").innerHTML += `chaud`;
}
