import { window, workspace } from "vscode"
import CodeDocumenter from "./CodeDocumenter"

export default class codeDocumenterController {
    private _codeDocumenter: CodeDocumenter

    constructor(codeDocumenter: CodeDocumenter) {
        this._codeDocumenter = codeDocumenter
    }

    public activate() {
        workspace.onDidSaveTextDocument(this._onEvent, this)
    }

    private _onEvent() {
        this._codeDocumenter.replace()
    }
}