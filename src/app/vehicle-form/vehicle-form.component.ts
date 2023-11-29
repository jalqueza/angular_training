import { Component , Output, EventEmitter, Input } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent {

  @Output("on-submit")
  emitter = new EventEmitter

  @Input()
  vehicle = new Vehicle("", 0, "", "", 0, 0, false, [])

  handleSubmit(nForm:NgForm) {
    this.emitter.emit(this.vehicle)
  }

}
