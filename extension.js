const vscode = require("vscode");
module.exports = {
    activate: () =>
        Object.entries({
            "workbench.colorTheme": "polychromatic-dark-colour-theme",
            "workbench.preferredDarkColorTheme": "polychromatic-dark-colour-theme",
            "workbench.preferredLightColorTheme": "polychromatic-light-colour-theme",
            "workbench.iconTheme": "polychromatic-file-icon-theme",
            "workbench.productIconTheme": "polychromatic-product-icon-theme"
        }).forEach(([key, val]) =>
            vscode.workspace.getConfiguration().update(key, val, vscode.ConfigurationTarget.Global)
        )
};
