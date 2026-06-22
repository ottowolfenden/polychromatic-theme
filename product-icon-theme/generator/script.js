import fs from "fs"
import productIconTheme from "../product-icon-theme.json" with {type: "json"};
import codiconMaterialSymbols from "./codicon-material-symbols.json" with {type: "json"};
import codiconVscIds from "./codicon-vsc-ids.json" with {type: "json"};

for (var item in codiconMaterialSymbols) {
    var icon = codiconMaterialSymbols[item]
    if (icon != "\\") {
        var toReplace = codiconVscIds[item];
        toReplace.forEach(id => productIconTheme.iconDefinitions[id] = { "fontCharacter": icon })
    }
}

fs.writeFileSync("../product-icon-theme.json", JSON.stringify(productIconTheme, null, 2));