# Webapp Skeleton

A minimal web application skeleton using [web components][] and a simple router. The resulting application can be executed locally (unhosted) by simply opening the ```app/public/index.html``` file. Useful for creating offline mobile applications in HTML5. 

Mozilla's [Nunjucks][] is used for client-side templating. This works like [Jinja2][], but on the client.

The concept of [Activities][] (as used in Android development) is used here, instead of a typical single-page application. This simplifies development greatly. The activities can define the template they extend, and use web components to build up their UI. Their Javascript code can be written in [TypeScript][].

# Usage

Run ```bower install``` to install the required dependencies in the ```public``` folder. 

Install the ```python-livereload``` package (```sudo apt-get install python-livereload``` on Ubuntu).

Run the live reload script to compile any typescript and serve the site by running ```./livereload``` from the ```app``` folder. Open the resulting website (usually ```http://127.0.0.1:35729```) in a browser.

# Development

Once you have the basic app running, you can:

- Add new components into the bower config file (e.g. Bootstrap)
- Modify the base template (or add new ones) in the ```app/public/templates``` folder.
- Create new activities in the ```app/public/activities``` folder.
- Create TypeScript for the activities in the ```app/src/ts/activities``` folder, and include them in the activity using the ```{{jsPath}}``` variable.

# Known Issues

- Changes to template files will require reloading the page, even though live-reload will cause a browser refresh.
- Changes to typescript results in a double-reload (once for the change in the typescript file, and another for when the generated file is updated).

 [web components]: http://webcomponents.org/
 [Activities]: https://developer.android.com/guide/components/activities.html
 [TypeScript]: http://www.typescriptlang.org/
 [Nunjucks]: https://mozilla.github.io/nunjucks/
 [Jinja2]: http://jinja.pocoo.org/

