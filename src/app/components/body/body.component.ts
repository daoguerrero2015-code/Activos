import { Component, OnInit } from '@angular/core';
import { Modal } from 'bootstrap';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})

export class BodyComponent implements OnInit {

  nombre = '';
  tipo = '';
  tipo_activo = '';
  fecha = '';
  observaciones = '';
  listaActivos: any[] = [];

  constructor() {}

  ngOnInit(): void {
    // Cargar datos al entrar si existen
    const datos = sessionStorage.getItem('activo');
    const data = sessionStorage.getItem('activos');
    if (data) {
      this.listaActivos = JSON.parse(data);
    }
  }

  abrirModal() {
    const modalEl = document.getElementById('modalCreacion');
    if (modalEl) {
      const modal = new Modal(modalEl);
      modal.show();
    }
  }

  guardar() {

    const errores: string[] = [];

    const nombre = (document.getElementById('nombre') as HTMLInputElement)?.value.trim();
    const tipoActivo = (document.getElementById('sel_tip_act') as HTMLSelectElement)?.value;
    const tipoConsumo = (document.getElementById('sel_tip_con') as HTMLSelectElement)?.value;
    const fechaRegistro = (document.getElementById('fechaRegistro') as HTMLInputElement)?.value;
    const observaciones = (document.getElementById('obser_txt') as HTMLTextAreaElement)?.value;

    if (!nombre) {
      errores.push('El campo <b>Nombre</b> es obligatorio.');
    }
    if (!tipoActivo) {
      errores.push('Debe seleccionar el tipo de activo.');
    }
    if (!tipoConsumo) {
      errores.push('Debe seleccionar un tipo de consumo para el activo');
    }
    if (!fechaRegistro) {
      errores.push('Debe seleccionar una fecha para el registro del activo');
    }
    if (!observaciones) {
      errores.push('El campo <b>Observación</b> es obligatorio.');
    }

    // Si hay errores, los mostramos en un único Swal
  if (errores.length > 0) {
    Swal.fire({
      icon: 'error',
      title: 'Errores de validación',
      html: `<ul style="text-align: left;">${errores.map(e => `<li>${e}</li>`).join('')}</ul>`,
    });
    return;
  }

    const activo = { nombre, tipoActivo, tipoConsumo, fechaRegistro, observaciones };

    // Añadir a la lista
    this.listaActivos.push(activo);
    
    // Guardar en sessionStorage
    sessionStorage.setItem('activos', JSON.stringify(this.listaActivos));   

    Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: 'Activo registrado correctamente',
      timer: 2000,
      showConfirmButton: false
    });

    (document.getElementById('formActivos') as HTMLFormElement).reset();
    const modalEl = document.getElementById('modalCreacion');
    if (modalEl) {
      const modal = Modal.getInstance(modalEl) || new Modal(modalEl);
      modal.hide();
    }
  }  

}
