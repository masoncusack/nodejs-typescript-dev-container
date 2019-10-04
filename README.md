# Node/TS Container

A VSCode Dev Container environment for Node.js + Typescript

![project logo](./.github/logo.png)

This project provides a basis for collaborative development of Node.js projects, using Typescript, within a development container. It takes advantage of VSCode integration with the [Remote - Containers extension](https://code.visualstudio.com/docs/remote/containers).

The idea of development containers is to require as little dependency installation as as possible on one's local system, and also to make the development environment consistent and predictable across a team running different operating systems.

This implementation automates and standardises the installation of:

- Node.js 
- npm
- Typescript
- Docker

...on the dev container when its image is built (via `.devcontainer/Dockerfile`).

The config information in `.devcontainer/devcontainer.json` then standardises the VS code experience when running the development container with:

- ESlint extension
- VSCode live share extension

This prevents one's local VSCode configuration being affected by the required extensions for a particular project. Note: your personal visual/aesthetic configuration will persist across local and dev container VSCode sessions.

## Usage - with the VSCode "Remote - Containers" extension (recommended)

<!--TODO-->

After cloning the project, open it in VS Code:

`cd %REPO% && code .`

`extensions.json` will cause VS Code to suggest you install the [Remote - Containers extension](), which allows you to remote into the dev container similar to the experience of editing code in a remote VM. Click "install".

You can also find this extension in the VS Code marketplace under `ms-vscode-remote.remote-containers`.

<!--Complete this section for using dev container in VS Code. -->

## Usage - without the VSCode "Remote - Containers" extension

<!--TODO - add script to do all the volume mounting and hard work, test, and explain usage here. -->

### Using VS Code Live Share within the Dev Container

<!--TODO (remember need to generate and use code on sign-in, linking to issue recommending this). -->

## Contributing

Feel free to open a PR against this repository, or create an Issue.