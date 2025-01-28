function salvarProgresso() {
    const progresso = {
        codigo1: editor1.getValue(),
        codigo2ForEach: editor2ForEach.getValue(),
        codigo2Filter: editor2Filter.getValue(),
        codigo3: editor3.getValue(),
        codigo4: editor4.getValue(),
        codigo5: editor5.getValue(),
        codigo6: editor6.getValue(),
        codigo7: editor7.getValue()
    };
    localStorage.setItem('progressoDesafios', JSON.stringify(progresso));
}

function restaurarProgresso() {
    const progresso = JSON.parse(localStorage.getItem('progressoDesafios'));
    if (progresso) {
        editor1.setValue(progresso.codigo1);
        editor2ForEach.setValue(progresso.codigo2ForEach);
        editor2Filter.setValue(progresso.codigo2Filter);
        editor3.setValue(progresso.codigo3);
        editor4.setValue(progresso.codigo4);
        editor5.setValue(progresso.codigo5);
        editor6.setValue(progresso.codigo6);
        editor7.setValue(progresso.codigo7);
    }
}

window.addEventListener('beforeunload', salvarProgresso);
window.addEventListener('load', restaurarProgresso);

function executarCodigo1() {
    const codigo = editor1.getValue();
    try {
        const resultadoExercicio1 = eval(codigo);
        const esperado = [0, 0.5, 1, 2, 2.5, 4, 4.5, 7, 7.5, 11, 11.5, 16, 16.5, 22, 22.5, 29, 29.5, 37, 37.5, 46, 46.5];
        const atendeRequisitos = JSON.stringify(resultadoExercicio1) === JSON.stringify(esperado);
        if (atendeRequisitos) {
            document.getElementById('resultado1').innerText = `Código atende aos requisitos!\nResultado: ${JSON.stringify(resultadoExercicio1)}\nEsperado: ${JSON.stringify(esperado)}`;
            document.getElementById('resultado1').className = 'success';
        } else {
            document.getElementById('resultado1').innerText = `Código não atende aos requisitos!\nResultado: ${JSON.stringify(resultadoExercicio1)}\nEsperado: ${JSON.stringify(esperado)}`;
            document.getElementById('resultado1').className = 'error';
        }
    } catch (e) {
        document.getElementById('resultado1').innerText = 'Erro na execução do código: ' + e.message;
        document.getElementById('resultado1').className = 'error';
    }
}

function executarCodigo2ForEach() {
    const codigo = editor2ForEach.getValue();
    try {
        const contains = codigo.includes('forEach');
        const resultadoExercicio2 = eval(codigo);
        const esperado = [0, 2, 4, 6, 8];
        const atendeRequisitos = JSON.stringify(resultadoExercicio2) === JSON.stringify(esperado);
        if (atendeRequisitos && contains) {
            document.getElementById('resultado2ForEach').innerText = `Código atende aos requisitos!\nResultado: ${JSON.stringify(resultadoExercicio2)}\nEsperado: ${JSON.stringify(esperado)}`;
            document.getElementById('resultado2ForEach').className = 'success';
        } else {
            document.getElementById('resultado2ForEach').innerText = `Código não atende aos requisitos!\nResultado: ${JSON.stringify(resultadoExercicio2)}\nEsperado: ${JSON.stringify(esperado)}`;
            document.getElementById('resultado2ForEach').className = 'error';
        }
    } catch (e) {
        document.getElementById('resultado2ForEach').innerText = 'Erro na execução do código: ' + e.message;
        document.getElementById('resultado2ForEach').className = 'error';
    }
}

function executarCodigo2Filter() {
    const codigo = editor2Filter.getValue();
    try {
        const contains = codigo.includes('filter');
        const resultadoExercicio2 = eval(codigo);
        const esperado = [0, 2, 4, 6, 8];
        const atendeRequisitos = JSON.stringify(resultadoExercicio2) === JSON.stringify(esperado);
        if (atendeRequisitos && contains) {
            document.getElementById('resultado2Filter').innerText = `Código atende aos requisitos!\nResultado: ${JSON.stringify(resultadoExercicio2)}\nEsperado: ${JSON.stringify(esperado)}`;
            document.getElementById('resultado2Filter').className = 'success';
        } else {
            document.getElementById('resultado2Filter').innerText = `Código não atende aos requisitos!\nResultado: ${JSON.stringify(resultadoExercicio2)}\nEsperado: ${JSON.stringify(esperado)}`;
            document.getElementById('resultado2Filter').className = 'error';
        }
    } catch (e) {
        document.getElementById('resultado2Filter').innerText = 'Erro na execução do código: ' + e.message;
        document.getElementById('resultado2Filter').className = 'error';
    }
}

function executarCodigo3() {
    const codigo = editor3.getValue();
    try {
        const resultadoExercicio3 = eval(codigo);
        const esperado = ["06/06/2022", "06/06/2022 22:01"];
        const atendeRequisitos = JSON.stringify(resultadoExercicio3) === JSON.stringify(esperado);
        if (atendeRequisitos) {
            document.getElementById('resultado3').innerText = `Código atende aos requisitos!\nResultado: ${JSON.stringify(resultadoExercicio3)}\nEsperado: ${JSON.stringify(esperado)}`;
            document.getElementById('resultado3').className = 'success';
        } else {
            document.getElementById('resultado3').innerText = `Código não atende aos requisitos!\nResultado: ${JSON.stringify(resultadoExercicio3)}\nEsperado: ${JSON.stringify(esperado)}`;
            document.getElementById('resultado3').className = 'error';
        }
    } catch (e) {
        document.getElementById('resultado3').innerText = 'Erro na execução do código: ' + e.message;
        document.getElementById('resultado3').className = 'error';
    }
}

function executarCodigo4() {
    const codigo = editor4.getValue();
    try {
        const dataAtual = new Date('2022-06-07T01:01:06.336Z');
        eval(codigo);
        const mesExtenso = retornaMesPorExtenso(dataAtual);
        const esperado = "Junho";
        const atendeRequisitos = mesExtenso === esperado;
        if (atendeRequisitos) {
            document.getElementById('resultado4').innerText = `Código atende aos requisitos!\nResultado: ${mesExtenso}\nEsperado: ${esperado}`;
            document.getElementById('resultado4').className = 'success';
        } else {
            document.getElementById('resultado4').innerText = `Código não atende aos requisitos!\nResultado: ${mesExtenso}\nEsperado: ${esperado}`;
            document.getElementById('resultado4').className = 'error';
        }
    } catch (e) {
        document.getElementById('resultado4').innerText = 'Erro na execução do código: ' + e.message;
        document.getElementById('resultado4').className = 'error';
    }
}

function executarCodigo5() {
    const codigo = editor5.getValue();
    try {
        const resultadoExercicio5 = eval(codigo);
        const esperado = ["06", "06/06", "06/06/2022"];
        const atendeRequisitos = JSON.stringify(resultadoExercicio5) === JSON.stringify(esperado);
        if (atendeRequisitos) {
            document.getElementById('resultado5').innerText = `Código atende aos requisitos!\nResultado: ${JSON.stringify(resultadoExercicio5)}\nEsperado: ${JSON.stringify(esperado)}`;
            document.getElementById('resultado5').className = 'success';
        } else {
            document.getElementById('resultado5').innerText = `Código não atende aos requisitos!\nResultado: ${JSON.stringify(resultadoExercicio5)}\nEsperado: ${JSON.stringify(esperado)}`;
            document.getElementById('resultado5').className = 'error';
        }
    } catch (e) {
        document.getElementById('resultado5').innerText = 'Erro na execução do código: ' + e.message;
        document.getElementById('resultado5').className = 'error';
    }
}

function executarCodigo6() {
    const codigo = editor6.getValue();
    try {
        const resultadoExercicio6 = eval(codigo);
        const esperado = '<p>Página 1</p>\n<p>Página 2</p>\n<p>Página 3</p>\n<p>Página 4</p>\n<p>Página 5</p>\n<p>Página 6</p>\n<p>Página 7</p>\n<p>Página 8</p>\n';
        const atendeRequisitos = JSON.stringify(resultadoExercicio6.trim()) === JSON.stringify(esperado.trim());
        if (atendeRequisitos) {
            document.getElementById('resultado6').innerText = `Código atende aos requisitos!\nResultado: ${resultadoExercicio6.trim()}\nEsperado: ${esperado.trim()}`;
            document.getElementById('resultado6').className = 'success';
        } else {
            document.getElementById('resultado6').innerText = `Código não atende aos requisitos!\nResultado: ${resultadoExercicio6.trim()}\nEsperado: ${esperado.trim()}`;
            document.getElementById('resultado6').className = 'error';
        }
    } catch (e) {
        document.getElementById('resultado6').innerText = 'Erro na execução do código: ' + e.message;
        document.getElementById('resultado6').className = 'error';
    }
}

function executarCodigo7() {
    const codigo = editor7.getValue();
    try {
        const resultadoExercicio7 = eval(codigo);
        const esperado = [0, 1, 2, 3, 4, 5, 6, 70, 8, 9, 100, 200, 300, 500, 88];
        const atendeRequisitos = JSON.stringify(resultadoExercicio7) === JSON.stringify(esperado);
        if (atendeRequisitos) {
            document.getElementById('resultado7').innerText = `Código atende aos requisitos!\nResultado: ${JSON.stringify(resultadoExercicio7)}\nEsperado: ${JSON.stringify(esperado)}`;
            document.getElementById('resultado7').className = 'success';
        } else {
            document.getElementById('resultado7').innerText = `Código não atende aos requisitos!\nResultado: ${JSON.stringify(resultadoExercicio7)}\nEsperado: ${JSON.stringify(esperado)}`;
            document.getElementById('resultado7').className = 'error';
        }
    } catch (e) {
        document.getElementById('resultado7').innerText = 'Erro na execução do código: ' + e.message;
        document.getElementById('resultado7').className = 'error';
    }
}

// Inicializar CodeMirror para os elementos textarea
const editor1 = CodeMirror.fromTextArea(document.getElementById('codigo1'), {
    mode: 'javascript',
    lineNumbers: true,
    gutters: ["CodeMirror-lint-markers"],
    lint: true,
    extraKeys: {"Ctrl-Space": "autocomplete"},
    hintOptions: {completeSingle: false, hint: function(cm, options) {
        return {
            list: ['console.log'],
            from: cm.getCursor(),
            to: cm.getCursor()
        };
    }}
});
const editor2ForEach = CodeMirror.fromTextArea(document.getElementById('codigo2ForEach'), {
    mode: 'javascript',
    lineNumbers: true,
    gutters: ["CodeMirror-lint-markers"],
    lint: true,
    extraKeys: {"Ctrl-Space": "autocomplete"},
    hintOptions: {completeSingle: false, hint: function(cm, options) {
        return {
            list: ['console.log'],
            from: cm.getCursor(),
            to: cm.getCursor()
        };
    }}
});
const editor2Filter = CodeMirror.fromTextArea(document.getElementById('codigo2Filter'), {
    mode: 'javascript',
    lineNumbers: true,
    gutters: ["CodeMirror-lint-markers"],
    lint: true,
    extraKeys: {"Ctrl-Space": "autocomplete"},
    hintOptions: {completeSingle: false, hint: function(cm, options) {
        return {
            list: ['console.log'],
            from: cm.getCursor(),
            to: cm.getCursor()
        };
    }}
});
const editor3 = CodeMirror.fromTextArea(document.getElementById('codigo3'), {
    mode: 'javascript',
    lineNumbers: true,
    gutters: ["CodeMirror-lint-markers"],
    lint: true,
    extraKeys: {"Ctrl-Space": "autocomplete"},
    hintOptions: {completeSingle: false, hint: function(cm, options) {
        return {
            list: ['console.log'],
            from: cm.getCursor(),
            to: cm.getCursor()
        };
    }}
});
const editor4 = CodeMirror.fromTextArea(document.getElementById('codigo4'), {
    mode: 'javascript',
    lineNumbers: true,
    gutters: ["CodeMirror-lint-markers"],
    lint: true,
    extraKeys: {"Ctrl-Space": "autocomplete"},
    hintOptions: {completeSingle: false, hint: function(cm, options) {
        return {
            list: ['console.log'],
            from: cm.getCursor(),
            to: cm.getCursor()
        };
    }}
});
const editor5 = CodeMirror.fromTextArea(document.getElementById('codigo5'), {
    mode: 'javascript',
    lineNumbers: true,
    gutters: ["CodeMirror-lint-markers"],
    lint: true,
    extraKeys: {"Ctrl-Space": "autocomplete"},
    hintOptions: {completeSingle: false, hint: function(cm, options) {
        return {
            list: ['console.log'],
            from: cm.getCursor(),
            to: cm.getCursor()
        };
    }}
});
const editor6 = CodeMirror.fromTextArea(document.getElementById('codigo6'), {
    mode: 'javascript',
    lineNumbers: true,
    gutters: ["CodeMirror-lint-markers"],
    lint: true,
    extraKeys: {"Ctrl-Space": "autocomplete"},
    hintOptions: {completeSingle: false, hint: function(cm, options) {
        return {
            list: ['console.log'],
            from: cm.getCursor(),
            to: cm.getCursor()
        };
    }}
});
const editor7 = CodeMirror.fromTextArea(document.getElementById('codigo7'), {
    mode: 'javascript',
    lineNumbers: true,
    gutters: ["CodeMirror-lint-markers"],
    lint: true,
    extraKeys: {"Ctrl-Space": "autocomplete"},
    hintOptions: {completeSingle: false, hint: function(cm, options) {
        return {
            list: ['console.log'],
            from: cm.getCursor(),
            to: cm.getCursor()
        };
    }}
});

restaurarProgresso();
