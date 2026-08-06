const vscode = require("vscode");
module.exports = {
    activate: () =>
        Object.entries({
            "workbench.colorTheme": "Polychromatic Theme Dark",
            "workbench.preferredDarkColorTheme": "Polychromatic Theme Dark",
            "workbench.preferredLightColorTheme": "Polychromatic Theme Light",
            "workbench.productIconTheme": "Material Symbols"
        }).forEach(([key, val]) =>
            vscode.workspace.getConfiguration().update(key, val, vscode.ConfigurationTarget.Global)
        )
};
