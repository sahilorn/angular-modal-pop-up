import { Component, ViewChild } from "@angular/core";
import { ChildComponent } from "./child/child.component";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  
  name = "Angular";
  @ViewChild(ChildComponent, { static: false }) childModal: ChildComponent;

  openModal() {
    const id = Math.floor(Math.random() * 50);
    this.childModal.open(id);
  }

}
