import { Component } from "@angular/core";
import type { ComponentProps } from "react";

import MyReact from "./react/MyReact";

@Component({
  selector: "my-app",
  template: `
<h1>Coding Angular and React Together</h1>

The following is from react component "./app/react/MyReact.tsx"
<br/><br/>
<div>{{msg}}</div>
<ng-react [component]="MyReact" [props]="myProps"></ng-react>

<br/><br/><br/>
<how-to></how-to>
  `
})
export class AppComponent {
  MyReact = MyReact;
  msg = '';
  myProps: ComponentProps<typeof MyReact> = {
    name: 'My React Component',
    onClick: _ => this.msg = 'React Button Clicked'
  }
}
