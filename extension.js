const vscode = require("vscode");

function activate(context) {
    const config = vscode.workspace.getConfiguration();
    config.update("custom-ui-style.electron", {
        "backgroundColor": "#00000000",
        "transparent": true
    }, vscode.ConfigurationTarget.Global);
    config.update("custom-ui-style.stylesheet", {
        ".monaco-editor, .monaco-editor .margin, .monaco-editor-background, .editor-container, .editor-instance, .split-view-view, .tabs-container, .title, .breadcrumbs-widget, .sidebar, .activitybar, .statusbar": "background-color: transparent !important;",
        ".monaco-workbench.vs-dark": "background-color: #000000cc !important;",
        ".monaco-workbench.vs": "background-color: #ffffffcc !important;"
    }, vscode.ConfigurationTarget.Global);
    config.update("workbench.colorTheme", "Polychromatic Theme Dark", vscode.ConfigurationTarget.Global);
    config.update("workbench.preferredDarkColorTheme", "Polychromatic Theme Dark", vscode.ConfigurationTarget.Global);
    config.update("workbench.preferredLightColorTheme", "Polychromatic Theme Light", vscode.ConfigurationTarget.Global);
    config.update("workbench.productIconTheme", "material-symbols", vscode.ConfigurationTarget.Global);
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
}