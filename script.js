
    const usuarioTeste = {
        email: 'usuario',
    senha: '1234'
      };

    const loginButton = document.getElementById('login-button');
    
      loginButton.addEventListener('click', (e) => {
        const emailInput = document.getElementById('email');
    const senhaInput = document.getElementById('senha');

    const usuario = {
        email: emailInput.value,
    senha: senhaInput.value
        };

    if (usuario.email === usuarioTeste.email && usuario.senha === usuarioTeste.senha) {
        alert('Login bem-sucedido!');
        } else {
        alert('Email ou senha incorretos!');
        }
      });
