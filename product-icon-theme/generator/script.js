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
            var fill = iconHex.substring(0, 4) == "fill";
            iconHex = iconHex.replace("fill", "")
            productIconTheme.iconDefinitions[id] =
                iconHex == "\\"
                    ? {}
                    : {
                        "fontCharacter": iconHex,
                        "fontId": fill ? "fill" : "normal"
                    };
            if (JSON.stringify(productIconTheme.iconDefinitions[id]) != original)
                console.log(`${iconHex} ${fill ? "(fill)" : "(normal)"} -> ${id}`);
        })
    }
}

fs.writeFileSync("../product-icon-theme.json", JSON.stringify(productIconTheme, null, 2));