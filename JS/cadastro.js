let btnSenha = document.querySelector('#verSenha');
let btnConfirmar = document.querySelector('#verConfirmarSenha');
let btnCadastrar = document.querySelector('#cadastrar');
let nome = document.querySelector('#nome');
let labelNome = document.querySelector('#labelNome');
let validaNome = false;
let usuario = document.querySelector('#usuario');
let labelUsuario = document.querySelector('#labelUsuario');
let validaUsuario = false;
let senha = document.querySelector('#senha');
let labelSenha = document.querySelector('#labelSenha');
let validaSenha = false;
let confirmarSenha = document.querySelector('#confirmarSenha');
let labelConfirmarSenha = document.querySelector('#labelConfirmarSenha');
let validaConfirmarSenha = false;
let mensagemErro = document.querySelector('#mensagemErro');
let mensagemSucesso = document.querySelector('#mensagemSucesso');

// Visualização da senha (olhinhos)
btnSenha.addEventListener('click', () => {
    if (senha.getAttribute('type') == 'password') {
        senha.setAttribute('type', 'text');
        btnSenha.classList.remove('fa-eye-slash');
        btnSenha.classList.add('fa-eye');
    } else {
        senha.setAttribute('type', 'password');
        btnSenha.classList.remove('fa-eye');
        btnSenha.classList.add('fa-eye-slash');
    }
});

btnConfirmar.addEventListener('click', () => {
    if (confirmarSenha.getAttribute('type') == 'password') {
        confirmarSenha.setAttribute('type', 'text');
        btnConfirmar.classList.remove('fa-eye-slash');
        btnConfirmar.classList.add('fa-eye');
    } else {
        confirmarSenha.setAttribute('type', 'password');
        btnConfirmar.classList.remove('fa-eye');
        btnConfirmar.classList.add('fa-eye-slash');
    }
});

// Validação de Cadastro
nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        labelNome.innerHTML = 'Nome: Insira no mínimo 3 caracteres';
        labelNome.style.color = 'red';
        nome.style.borderColor = 'red';
        validaNome = false;
    } else {
        labelNome.innerHTML = 'Nome';
        labelNome.style.color = 'navy';
        nome.style.borderColor = 'navy';
        validaNome = true;
    }
});

usuario.addEventListener('keyup', () => {
    if (usuario.value.length < 5) {
        labelUsuario.innerHTML = 'Usuário: Insira no mínimo 5 caracteres';
        labelUsuario.style.color = 'red';
        usuario.style.borderColor = 'red';
        validaUsuario = false;
    } else {
        labelUsuario.innerHTML = 'Usuário';
        labelUsuario.style.color = 'navy';
        usuario.style.borderColor = 'navy';
        validaUsuario = true;
    }
});

senha.addEventListener('keyup', () => {
    if (senha.value.length < 5) {
        labelSenha.innerHTML = 'Senha: Insira no mínimo 5 caracteres';
        labelSenha.style.color = 'red';
        senha.style.borderColor = 'red';
        validaSenha = false;
    } else {
        labelSenha.innerHTML = 'Senha';
        labelSenha.style.color = 'navy';
        senha.style.borderColor = 'navy';
        validaSenha = true;
    }
});

confirmarSenha.addEventListener('keyup', () => {
    if (senha.value != confirmarSenha.value) {
        labelConfirmarSenha.innerHTML = 'Confirmar Senha: As senhas não conferem';
        labelConfirmarSenha.style.color = 'red';
        confirmarSenha.style.borderColor = 'red';
        validaConfirmarSenha = false;
    } else {
        labelConfirmarSenha.innerHTML = 'Confirmar Senha';
        labelConfirmarSenha.style.color = 'navy';
        confirmarSenha.style.borderColor = 'navy';
        validaConfirmarSenha = true;
    }
});

// Verificação das etapas
btnCadastrar.addEventListener('click', () => {
    if (validaNome && validaUsuario && validaSenha && validaConfirmarSenha) {
        mensagemErro.style.display = 'none';
        mensagemErro.innerHTML = '';
        mensagemSucesso.style.display = 'block';
        mensagemSucesso.innerHTML = 'Cadastrando usuário...';
    } else {
        mensagemSucesso.style.display = 'none';
        mensagemSucesso.innerHTML = '';
        mensagemErro.style.display = 'block';
        mensagemErro.innerHTML = 'Preencha todos os campos corretamente';
    }
});
