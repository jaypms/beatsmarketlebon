const fs = require("fs")
const path = require("path")

const uiDir = path.resolve(__dirname, "../src/components/ui")
const indexFile = path.join(uiDir, "index.ts")

fs.readdir(uiDir, (err, files) => {
  if (err) {
    console.error("Erreur lecture dossier UI :", err)
    return
  }

  const tsxFiles = files.filter(
    (f) => f.endsWith(".tsx") && !f.startsWith("index")
  )

  const exports = tsxFiles
    .map((file) => {
      const name = path.basename(file, ".tsx")
      if (name.toLowerCase() === "card") {
        return `export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "./${name}"`
      }
      if (name.toLowerCase() === "dropdownmenu") {
        return `export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from "./${name}"`
      }
      return `export { ${name.charAt(0).toUpperCase() + name.slice(1)} } from "./${name}"`
    })
    .join("\n")

  const content = `// AUTO-GENERATED INDEX FILE\n\n${exports}\n`

  fs.writeFile(indexFile, content, (err) => {
    if (err) console.error("Erreur écriture index.ts :", err)
    else console.log("index.ts généré avec succès !")
  })
})
