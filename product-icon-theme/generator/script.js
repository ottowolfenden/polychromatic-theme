import fs from "fs"
import productIconTheme from "../product-icon-theme.json" with {type: "json"};
import codiconMaterialSymbols from "./codicon-material-symbols.json" with {type: "json"};
import codiconVscIds from "./codicon-vsc-ids.json" with {type: "json"};

for (var item in codiconMaterialSymbols) {
    var iconHex = codiconMaterialSymbols[item]
    var toReplace = (codiconVscIds[item] ?? []).concat(item);
    if (toReplace) {
        toReplace.forEach(id => {
            var original = JSON.stringify(productIconTheme.iconDefinitions[id]);
            productIconTheme.iconDefinitions[id] = iconHex == "\\" ? {} : { "fontCharacter": iconHex };
            if (JSON.stringify(productIconTheme.iconDefinitions[id]) != original)
                console.log(`${iconHex} -> ${id}`);
        })
    }
}

fs.writeFileSync("../product-icon-theme.json", JSON.stringify(productIconTheme, null, 2));