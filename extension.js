const vscode = require('vscode');

function activate(context) {
    const config = vscode.workspace.getConfiguration();
    const colors = {
        "editor.background": "#00000000",
        "editorGutter.background": "#00000000",
        "minimap.background": "#00000000",
        "editorGroupHeader.tabsBackground": "#00000000",
        "editorGroupHeader.noTabsBackground": "#00000000",
        "tab.activeBackground": "#00000000",
        "tab.inactiveBackground": "#00000000",
        "tab.unfocusedActiveBackground": "#00000000",
        "tab.unfocusedInactiveBackground": "#00000000",
        "breadcrumb.background": "#00000000",
        "sideBar.background": "#00000000"
    };
    config.update('workbench.colorCustomizations', colors, vscode.ConfigurationTarget.Global);
    const electronSettings = {
        "backgroundColor": "#00000000",
        "transparent": true
    };
    config.update('custom-ui-style.electron', electronSettings, vscode.ConfigurationTarget.Global);
    const stylesheetSettings = {
        ".monaco-editor, .monaco-editor .margin, .monaco-editor-background, .editor-container, .editor-instance, .split-view-view, .tabs-container, .title, .breadcrumbs-widget, .sidebar, .activitybar, .statusbar": "background-color: transparent !important;",
        ".monaco-workbench.vs-dark": "background-color: #000000d9 !important;",
        ".monaco-workbench.vs": "background-color: #ffffffd9 !important;"
    };
    config.update('custom-ui-style.stylesheet', stylesheetSettings, vscode.ConfigurationTarget.Global);
    console.log('Transparency engine configurations forced successfully.');
}

function deactivate() { }

module.exports = {
    activate,
    deactivate
}