require("isomorphic-unfetch");
const { promises: fs } = require("fs");
const path = require("path");

async function main() {
    const readmeTemplate = (
        await fs.readFile(path.join(process.cwd(), "./README.template.md"))
    ).toString("utf-8");
    
const starwars_quote = await (
    await fetch("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")).json()

const readme = readmeTemplate
        .replace("{office_quote}", starwars_quote.data.content)
       

await fs.writeFile("README.md", readme);
}
main();

