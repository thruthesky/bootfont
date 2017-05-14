# Bootfont

Bootfont is a UI library built on Angular & Bootstrap v4 + Font Awesome and gives you a quickstart to build your own app.

We recommend you to use [ABC framework](https://github.com/thruthesky/abcframework) to make app easy with Angular.



## Installation

To install this library, run:

```bash
$ npm install bootfont --save
```

Note: This library is a part of [abc framework](https://github.com/thruthesky/abcframework) and no need to install if you are using [abc framework](https://github.com/thruthesky/abcframework).



## Consuming your library

From your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import bootfont library
import { BootFontModule } from 'bootfont';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...
    // Specify bootfont library as an import
    BootFontModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once bootfont library is imported, you can use its components.


```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<abc-icon></abc-icon>
```

## Development

This is open source project and needs your help.
If you have any comment, please use git issue.
And if you want to improve this project, please do not hesitate to fork and pull request.

When you edit code, please see the guide line of [generator-angular2-library](https://github.com/jvandemo/generator-angular2-library).



## License

MIT © [JaeHo Song](mailto:thruthesky@gmail.com)


## Components

### abc-icon

`abc-icon` is a font-awesome stacked-icon.

#### Options

`name` is the icon name.

#### Examples
````
<abc-icon name="home"></abc-icon>
````


#### Style Guide

Design with CSS.

globaly style.css)
````
abc-icon[name="home"] .fa-stack-2x {
    color: slategrey;
}
abc-icon[name="home"] .fa-stack-1x {
    color: snow;
}
````

parent scss)
````
:host /deep/ abc-icon[name="home"] {
    .fa-stack-2x {
        color: slategrey;
    }
    .fa-stack-1x {
        color: snow;
    }
}
````




### abc-header

`abc-header` component is simply a wrapper of bootstrap `navbar`.

It is 

All the bootstrap rules apply.



`break` is the break point where the break the menu as collapsable.
````
<abc-header break="sm">
````


Example 1.

The code below is a simple header template following bootstrap v4 `navbar` rules.


````
<abc-header break="sm">
  <abc-icon name="bars" class="navbar-toggler navbar-toggler-right"></abc-icon>
  <abc-icon name="home" class="navbar-brand"></abc-icon>
  <div class="navbar-collapse collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      ...
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</abc-header>
````

Example 2.

See the variation of `navbar-brand`. It is just the same as Bootstrap v4 `navbar` rules.

````
<abc-header break="sm">
  <abc-icon name="bars" class="navbar-toggler navbar-toggler-right"></abc-icon>
  <div class="navbar-brand">
    <abc-icon name="home"></abc-icon>
    ABC
  </div>
  <div class="navbar-collapse collapse">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        ...
      </li>
      ...
    </ul>
    ...
  </div>
</abc-header>
````
