const prompt = require("prompt-sync")();
const parseArgs = require("minimist");

//console.log(args);
//node main.js Inaki
//console.log("Nombre", args._[0]);

//node main.js -n Inaki
//console.log("Nombre", nombre);

function ask() {
  let resp = prompt("¿Cómo estás? ");

  resp = resp.toLowerCase();

  switch (resp) {
    case "bien":
      console.log("¡Me alegro!");
      break;
    case "mal":
      console.log("¡Lo siento!");
      break;
  }
}

try {
  const args = parseArgs(process.argv.slice(2));
  const nombre = args.n;
  console.log(`Hola ${nombre ? nombre : ""}`);
  ask();
} catch (error) {
  console.error("ERROR:", error.message);
}
