# Install Typescript and ts-node
- Clone this repo locally
- Download and Install node.js: https://nodejs.org/en/download/
- Install typescript and ts-node
```
npm install -g typescript ts-node
```

# Enable Linter
- In VS Code, install the extension: ESLint (the one with over 10 millions download)
- Install the eslint
```
npm install eslint
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

# Enable Import Auto Arrange
- Add the following code your user settings.json:
```
"editor.codeActionsOnSave": {
    "source.organizeImports": true
},
```