import fs from "fs";
import productIconTheme from "../product-icon-theme.json" with { type: "json" };
import codiconMaterialSymbols from "./codicon-material-symbols.json" with { type: "json" };
import codiconVscIds from "./codicon-vsc-ids.json" with { type: "json" };

Object.entries(codiconMaterialSymbols).forEach(([name, hex]) => {
    let toReplace = (codiconVscIds[name] ?? []).concat(name);
    if (!toReplace) return;
    toReplace.forEach(id => {
        const original = JSON.stringify(productIconTheme.iconDefinitions[id]);
        const fontId = hex?.substring(0, 4) == "fill" ? "fill" : "normal";
        if (fontId == "fill") hex = hex.replace("fill", "");
        productIconTheme.iconDefinitions[id] =
            hex == "\\" || hex === null ? {} : { fontCharacter: hex, fontId };
        if (JSON.stringify(productIconTheme.iconDefinitions[id]) != original && hex)
            console.log(`${hex} (${fontId}) -> ${id}`);
    });
});

fs.writeFileSync("../product-icon-theme.json", JSON.stringify(productIconTheme, null, 2));
