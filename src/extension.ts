import * as vscode from 'vscode';
import CodeDocumenter from './util/CodeDocumenter';
import CodeDocumenterController from './util/CodeDocumenterController';

export function activate(context: vscode.ExtensionContext) {
	const codeDocumenter = new CodeDocumenter()
	const codeDocumenterController = new CodeDocumenterController(codeDocumenter)
	codeDocumenterController.activate()
	
	console.log('Type Script Documenter is now active!');
	vscode.window.showInformationMessage('"TypeScriptDocumenter" is now availiable. It will be activated when you modify the file.');
}

export function deactivate() {}
