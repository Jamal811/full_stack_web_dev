console.log("Lets write javascript");

async function main() {
  let a = await fetch("http://127.0.0.1:5500/CWH/Spotify-Clone%20(CWH)/songs/");
  let response = await a.text();
  console.log(response);
}

main();
