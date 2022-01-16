# TIV

########

## Setup requirement

- Node 16
- VSCode

## VS Code setup

VS Code extensions:

- ESLint
- Prettier

Add below code in VS Code setting.json

```
{
  "editor.tabSize": 4,
  "editor.insertSpaces": true,
  "editor.detectIndentation": true,
  "workbench.iconTheme": "file-icons",
  "editor.formatOnSave": true,
  "window.zoomLevel": 0.6,
  "typescript.updateImportsOnFileMove.enabled": "never",
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.alwaysShowStatus": true,
  "diffEditor.ignoreTrimWhitespace": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "liveServer.settings.donotShowInfoMsg": true,
  "eslint.options": {
    "experimentalDecorators": true
  },
  "prettier.singleQuote": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}

```

### App setup

Once node is installed go to the app folder (tiv-app) using command line or git bash and run `npm install ` once installation done run `npm run start`. Open `https://localhost:8080/` in browser.

### Mock server setup

Go to the mock-service folder suing command line or git bash and run `npm install` once installation done run `npm run start`.
