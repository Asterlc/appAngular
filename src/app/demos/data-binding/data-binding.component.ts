import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent {
  public clickCount: number = 0;
  public imageURL: String = 'https://angular.io/assets/images/logos/angular/angular.svg'
  public customText: any = ''

  increaseCount() {
    this.clickCount++;
  }

  resetCount() {
    this.clickCount = 0;
  }

  warningCount() {
    if (this.clickCount >= 10) {
      window.alert('Contador maior ou igual a dez, botão desabilitado.');
    } else {
      let remainClicks = (10 - this.clickCount);
      window.alert(`Contagens habilitadas ${remainClicks}`);
    }
  }

  keyUp(event: any) {
    this.customText = event.target.value;
  }

  refreshCustomText() {
    this.customText=''
  }
}
