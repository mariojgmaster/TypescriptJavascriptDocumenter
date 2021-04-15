"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vscode_1 = require("vscode");
class EvilGitMerge {
    constructor() {
        // private STARTCOMMENT = `/**`
        // private DESCRIPTION = `* @description           : `
        // private AUTHOR = `* @author                     : ${process.env['USERNAME']}`
        // private GROUP = `* @group                       : `
        // private LAST_MODIFIED_ON = `* @last modified on : `
        // private LAST_MODIFIED_BY = `* @last modified by : `
        // private MODIFICATION_LOG_TEXT = `* Modification Log`
        // private VERSION = `* - Version            : 1.0.0`
        // private Date = `* - Date                  : ${new Date()}`
        // private AUTHOR_LOG = `* - Author          : `
        // private MODIFICATION = `* - Modification    : `
        // private ENDCOMMENT = `**/`
        this.MYTEXT = () => {
            return (`/**
    * @description      : 
    * @author           : ${process.env['USERNAME'] || ''}
    * @group            : 
    * @created          : ${this.formataData(new Date(), 'date')} - ${this.formataData(new Date(), 'time')}
    * 
    * MODIFICATION LOG
    * - Version         : 1.0.0
    * - Date            : ${this.formataData(new Date(), 'date')}
    * - Author          : ${process.env['USERNAME'] || ''}
    * - Modification    : 
**/\n`);
        };
    }
    formataData(valorDateTime, type) {
        let retorno;
        if (type == 'time') {
            let auxHora, auxMinuto, auxSegundo;
            let hora, minuto, segundo;
            auxHora = valorDateTime.getHours();
            auxMinuto = valorDateTime.getMinutes();
            auxSegundo = valorDateTime.getSeconds();
            auxHora < 10 ? hora = `0${auxHora}` : hora = auxHora;
            auxMinuto < 10 ? minuto = `0${auxMinuto}` : minuto = auxMinuto;
            auxSegundo < 10 ? segundo = `0${auxSegundo}` : segundo = auxSegundo;
            retorno = `${hora}:${minuto}:${segundo}`;
        }
        else if (type == 'date') {
            let auxDia, auxMes;
            let dia, mes, ano;
            auxDia = valorDateTime.getDate();
            auxMes = valorDateTime.getMonth() + 1;
            auxDia < 10 ? dia = `0${auxDia}` : dia = auxDia;
            auxMes < 10 ? mes = `0${auxMes}` : mes = auxMes;
            ano = valorDateTime.getFullYear();
            retorno = `${dia}/${mes}/${ano}`;
        }
        return retorno;
    }
    // Mudar para "save"
    replace() {
        const editor = vscode_1.window.activeTextEditor;
        if (!editor)
            return;
        if (editor.document.languageId != 'javascript' &&
            editor.document.languageId != 'javascriptreact' &&
            editor.document.languageId != 'typescript' &&
            editor.document.languageId != 'typescriptreact') {
            return;
        }
        else {
            const text = editor.document.getText();
            // if (!text.length) return;
            // evitar que rode duas vezes
            const alreadyChanged_check1 = !!~text.indexOf('* @description      :');
            const alreadyChanged_check2 = !!~text.indexOf('* @author           :');
            const alreadyChanged_check3 = !!~text.indexOf('* @group            :');
            const alreadyChanged_check4 = !!~text.indexOf('* @created          :');
            const alreadyChanged_check5 = !!~text.indexOf('* MODIFICATION LOG');
            if (alreadyChanged_check1 && alreadyChanged_check2 && alreadyChanged_check3 && alreadyChanged_check4 && alreadyChanged_check5)
                return;
            editor.edit(this.calculateText(text));
        }
    }
    calculateText(text) {
        return (builder) => {
            builder.insert(new vscode_1.Position(0, 0), this.MYTEXT());
        };
    }
}
exports.default = EvilGitMerge;
//# sourceMappingURL=CodeDocumenter.js.map