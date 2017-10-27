# Gmail Add-on Boilerplate

This repository holds the code of a starting point for creating [Gmail add-ons](https://developers.google.com/gmail/add-ons/), on the [Google Apps Script](https://developers.google.com/apps-script/) platform.

## Installation

```shell
$ git clone https://github.com/dhayab/gmail-addon-boilerplate.git my-gmail-addon
$ cd my-gmail-addon
$ rm -rf .git
$ npm install
```

Don't forget to change the package name and other values in **package.json**.

## Development

The starting point is the **src/** directory. It contains [TypeScript](https://www.typescriptlang.org/) source files for the add-on, and a [manifest](https://developers.google.com/gmail/add-ons/concepts/manifests) file called **appsscript.json**.

There are a few subtleties to keep in mind when writing code for use in Google Apps Script.

1. **Export callback functions**: Functions that will be called by Google Apps Script should be exported in your source code, to prevent the TypeScript compiler from failing on build. The bundle step will remove the `export { /* ... */ }` statement.
2. **Do not reuse function names**: After the build phase, all files are bundled into a single **addon.js** file. So don't export functions that have the same name in different files.

To build the project, just type this in your terminal:

```shell
$ npm run build
```

You can also watch for errors during the development by typing `npm run watch`.

## Deployment

This project uses the [google-apps-script](https://github.com/maartendesnouck/google-apps-script) CLI (also named *gas*) to allow files to be synced to an existing project or to create a new Google Apps Script project. The complete documentation can be found [here](https://github.com/maartendesnouck/google-apps-script#usage).

### 1. Authentication

First of all, you need to authenticate yourself to *gas* by typing the following:

```shell
$ npm run gas -- auth
```

Then, follow the instructions on screen.

### 2. Project association

You must associate your code with a Google Apps Script project. In order to do that, you can either create a new project or retrieve a list of your existing projects. Then you'll need to create the link between your code and the project.

```shell
# Create a new project
$ npm run gas -- create my-gmail-addon
...
Creating 'my-gmail-addon' in your Google Drive... [✔]
[PROJECT_HASH] my-gmail-addon

# Or list your existing projects
$ npm run gas -- list
...
[PROJECT_HASH] Foo
[PROJECT_HASH] my-gmail-addon
[PROJECT_HASH] Random Project

# Link to your code (you can also specify the hash instead of the project name)
$ npm run gas -- link my-gmail-addon
...
Linking 'my-gmail-addon' to this folder... [✔]
```

### 3. Pushing code changes

When you're ready to send your code to Google Apps Script, just type this command in your terminal:

```shell
$ npm run upload
```

You code is now available in the associated Google Apps Script project!

## Add-on execution

To view your Gmail add-on in action, you have to install it in the Gmail settings.

First of all, retrieve the **Deployment ID** of your project. Go to your script, either manually by opening it from Google Drive, or from the terminal, with this command:

```shell
$ npm run gas -- open
```

Then go to **Publish** > **Deploy from manifest…** and click on **Get ID**.

Now, open your Gmail settings ([click here](https://mail.google.com/mail/u/0/#settings/addons)) and enable the **Developer mode** by clicking on the checkbox, and paste the Deployment ID in the text input that has appeared.

## Links

- :book: Gmail add-ons overview: https://developers.google.com/gmail/add-ons/
- :book: CardService reference: https://developers.google.com/apps-script/reference/card-service/card
- :book: Gmail add-ons samples: https://github.com/googlesamples/gmail-add-ons-samples
