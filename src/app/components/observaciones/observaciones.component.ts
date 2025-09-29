import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-observaciones',
  templateUrl: './observaciones.component.html',
  styleUrl: './observaciones.component.css'
})
export class ObservacionesComponent {
  public Editor: any = ClassicEditor;
  public observaciones: string = '';
}
