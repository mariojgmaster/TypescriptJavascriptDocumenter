"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
class EvilGitMergeController {
    constructor(evilGitMerge) {
        this._evilGitMerge = evilGitMerge;
    }
    activate() {
        vscode_1.window.onDidChangeTextEditorSelection(this._onEvent, this);
    }
    _onEvent() {
        this._evilGitMerge.replace();
    }
}
exports.default = EvilGitMergeController;
//# sourceMappingURL=EvilGitMergeController.js.map