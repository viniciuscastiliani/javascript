# ComLimão · Jobs

Painel estático para cadastro de jobs, participantes e apontamentos de horas.

## Executar localmente

Abra `index.html` no navegador. Os dados ficam no `localStorage` do navegador e do dispositivo em que foram cadastrados. Use **Exportar CSV** para guardar uma cópia dos jobs. Limpar os dados do navegador pode apagar os registros.

## Publicar pelo GitHub Pages

1. Crie um repositório no GitHub e envie `index.html`, `app.js` e este README para a branch `main`.
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**, selecione `main` e a pasta `/ (root)`, e salve.
4. Aguarde a publicação indicada na página do GitHub Pages. O endereço aparecerá nessa mesma tela.

Se o Git estiver instalado, os comandos iniciais nesta pasta são:

```bash
git init
git add index.html app.js README.md
git commit -m "Publica painel ComLimão Jobs"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git
git push -u origin main
```

Substitua a URL pelo endereço do repositório que você criou. Se já houver um repositório Git nesta pasta, não repita `git init`; confira `git status` e configure o remoto correto antes de enviar.

## Servidor e banco de dados

Esta versão é somente frontend: não há API, servidor de aplicação, autenticação ou banco de dados. GitHub Pages hospeda os arquivos, mas não oferece um banco para compartilhar os registros. No estado atual, cada navegador mantém sua própria cópia dos dados.

Para acesso compartilhado entre pessoas e dispositivos, é necessário criar uma API e um banco hospedado, além de definir autenticação, permissões, cópias de segurança e configuração de produção. Nenhum provedor, conta, credencial ou repositório Git remoto está configurado neste projeto; por isso, a publicação com backend e banco ainda depende da escolha e configuração desses recursos.