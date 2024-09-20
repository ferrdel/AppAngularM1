import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter,Input, Output} from '@angular/core';
import { NgModel } from '@angular/forms';

import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-task',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})

export class TaskComponent {
  mostrar: boolean= false;
  

  isCheckboxSelected: boolean = false;
   
   // Arreglo para almacenar las tareas
  tasks: string[] = [];

  // Propiedad para el valor de la nueva tarea
  newTask: string = '';

  // Función para agregar la tarea
  // Método para agregar una tarea
  addTask(taskInput: HTMLInputElement): void {
    const task = taskInput.value.trim();  // Obtener el valor del input y quitar espacios extra
    if (task) {
      this.tasks.push(task);  // Agregar la tarea al listado
      taskInput.value = '';   // Limpiar el input
    }
  }

  // Eliminar tarea
  removeTask(index: number) {
    // Preguntar confirmación al usuario
    const confirmation = window.confirm('¿Deseas eliminar esta tarea?');
    
    if (confirmation) {
      this.tasks.splice(index, 1);  // Elimina la tarea de la lista según el índice
    }

  }

  onCheckboxChange(event: Event) {
    const checkbox = event.target as HTMLInputElement;
    this.isCheckboxSelected = checkbox.checked;
  }

}

export interface Task {
  id: number;
  title: string;
  completed: boolean;
}