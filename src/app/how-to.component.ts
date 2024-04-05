import { Component } from "@angular/core";

@Component({
  selector: "how-to",
  template: `
To enable the above, you must use Angular 14+
<hr/>
<img src="https://i.imgur.com/frMVkhq.png" width="100%" />

<h3> 0. Install react npm modules and update ./tsconfig.json </h3>
<pre>
$ npm install react, react-dom -D
</pre>
Add the following to ./tsconfig.json for Typescript compiler to understand .tsx files
<pre>
"jsx": "react",
</pre>

<h3>
1. Create a react component written in React syntax, app/react/MyReact.tsx
</h3>
<pre>
import * as React from "react";

export default function MyReact(props) {{'{'}}
  return (
    &lt;div>
      &lt;h1>Hello "{{'{'}}props.name}"!&lt;/h1>
    &lt;/div>
  );
}
</pre>

<h3>
2. Create a React component wrapper, ./app/react/ng-react.component.ts
</h3>
<pre>
import {{'{'}} Component, ElementRef, inject, Input } from "@angular/core";
import {{'{'}} ComponentProps, createElement, ElementType } from "react";
import {{'{'}} createRoot } from "react-dom/client";

@Component({{'{'}}
  selector: "ng-react",
  template: ''
})
export class NgReactComponent&lt;Comp extends ElementType> {{'{'}}
  @Input() component: Comp;
  @Input() props: ComponentProps&lt;Comp>;

  private root = createRoot(inject(ElementRef).nativeElement);

  ngOnChanges() {{'{'}} 
    this.root.render(createElement(this.component, this.props));
  }

  ngOnDestroy() {{'{'}} 
    this.root.unmount();
  }
}</pre>

<h3>
3. Declare NgReactComponent in your AppModule
</h3>
<pre>
import {{'{'}} BrowserModule } from "@angular/platform-browser";
import {{'{'}} NgModule } from "@angular/core";

import {{'{'}} AppComponent } from "./app.component";
<b>import {{'{'}} NgReactComponent } from "./react/ng-react.component";</b>

@NgModule({{'{'}} 
  declarations: [AppComponent, <b>NgReactComponent</b>],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {{'{'}}}
</pre>

<h3>
Now, you are ready to use any React component in any Angular component 
</h3>
<pre>
import {{'{'}}  Component } from "@angular/core";
<b>import MyReact from "./react/MyReact";</b>

@Component({{'{'}} 
  template: 
    '<b>&lt;ng-react [component]="MyReact" [props]="myProps">&lt;/ng-react></b>',
})
export class AppCompnent {{'{'}}
  MyReact = MyReact;
  myProps = {{'{'}}
    name: 'MyReact Component'
  }
}</pre>
  `
})
export class HowToComponent {
}
