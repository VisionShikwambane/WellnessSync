import { Component, Input } from '@angular/core';

@Component({
 selector: 'app-example',
 templateUrl: 'example.component.html',
})
export class ExampleComponent {
 @Input() buttons: { text: string; role: string; handler: () => void }[] = [];

 setResult(ev: any) {
    console.log(`Dismissed with role: ${ev.detail.role}`);
 }
}
