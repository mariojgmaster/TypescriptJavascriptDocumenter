"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
class codeDocumenterController {
    constructor(codeDocumenter) {
        this._codeDocumenter = codeDocumenter;
    }
    activate() {
        vscode_1.workspace.onDidSaveTextDocument(this._onEvent, this);
    }
    _onEvent() {
        this._codeDocumenter.replace();
    }
}
exports.default = codeDocumenterController;
//# sourceMappingURL=CodeDocumenterController.js.map