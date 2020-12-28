
# ngxs


`npm i @ngrx/store --save`

`ng add @ngrx/schematics`

`add @ngxs/logger-plugin @ngxs/devtools-plugin --dev`

you can add chrome extension `reddux dev tool` for visual representation



From `component` we can dispatch to `action`

in sending component ts file

this.store.dispatch();

From `store` to we can select data 

in receiver component .ts file

this.store.select(state => );


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
