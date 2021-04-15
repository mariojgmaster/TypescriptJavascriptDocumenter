"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deactivate = exports.activate = void 0;
const vscode = require("vscode");
const CodeDocumenter_1 = require("./util/CodeDocumenter");
const CodeDocumenterController_1 = require("./util/CodeDocumenterController");
function activate(context) {
    const codeDocumenter = new CodeDocumenter_1.default();
    const codeDocumenterController = new CodeDocumenterController_1.default(codeDocumenter);
    codeDocumenterController.activate();
    console.log('Type Script Documenter is now active!');
    vscode.window.showInformationMessage('"TypeScriptDocumenter" is now availiable. It will be activated when you modify the file.');
}
exports.activate = activate;
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension.js.map