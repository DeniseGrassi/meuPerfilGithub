document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const repositoryElement = document.querySelector('#repository');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');
    const endpoint = 'https://api.github.com/users/DeniseGrassi'


    fetch(endpoint).then(function(response) {
            if (response.ok === false ) {                   /* ou (!response.ok) */
                throw new Error('Erro ao buscar dados do GitHub');
            }
            return response.json();
        })
                    
        .then(function(json) {    /* função passada para .then() é executada quando a resposta da API do GitHub é convertida para JSON.*/
/* .then() recebe o objeto json, que é o resultado da conversão da resposta da API do github para um objeto JavaScript.*/
/* Dentro dessa função, você está atualizando os elementos do DOM (Document Object Model) com os dados recebidos da API*/
            nameElement.innerText = json.name || 'Nome não disponível'; 
/* Se json.name for null, undefined, ou qualquer outro valor "falsy" (falso), a string 'Nome não disponível' será usada como alternativa.*/

            usernameElement.innerText = json.login || 'Usuário não disponível';
            avatarElement.src = json.avatar_url || 'null';
            followersElement.innerText = json.followers || '0';
            followingElement.innerText = json.following || '0';
            repositoryElement.innerText = json.public_repos || '0';
            linkElement.href = json.html_url || '#';
        })

        .catch(function(error) {
            console.error('Ocorreu um erro:', error);
            nameElement.innerText = 'Erro ao carregar dados';
        });
});

