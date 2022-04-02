import { AfterViewInit, Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { User } from 'src/app/models/userModel';
import { CustomValidators } from 'ng2-validation';
import { DisplayMessage, GenericFormValidator, ValidationMessages } from 'src/app/helpers/generic-form-validation';
import { fromEvent, merge, Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {
  //Gerar uma queryList, obter coleção de itens do HTML.
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  registerForm: FormGroup;
  user: User;
  formResult: string;
  MASKS = utilsBr.MASKS;

  validationMessages: ValidationMessages;
  genericValidator: GenericFormValidator;
  displayMessage: DisplayMessage = {};

  constructor(private fb: FormBuilder) {
    this.validationMessages = {
      name: {
        required: 'Campo obrigatório',
        minlength: 'O nome precisa ter no mínimo 5 caracteres', //Ambos atribuidos pelo Validator do angular/forms
        maxlength: 'O nome precisa ter no máximo 150 caracteres',
      },
      document: {
        required: 'Campo obrigatório',
        cpf: 'CPF em formato inválido' //Atribuido pelo NgBrazilValidator
      },
      email: {
        required: 'Campo obrigatório',
        email: 'Formato inválido' //Atribuido pelo validator do angular/forms
      },
      password: {
        required: 'Campo obrigatório',
        rangeLength: 'Deve conter entre 5 e 15 caracteres'  //Atribuido pelo CustomValidator
      },
      passwordConfirm: {
        required: 'Campo obrigatório', //Atribuido pelo Validator do angular/forms
        rangeLength: 'Deve conter entre 5 e 15 caracteres', //Atribuido pelo CustomValidator
        equalTo: 'Senhas estão diferentes' //Atribuido pelo CustomValidator
      }
    }

    this.genericValidator = new GenericFormValidator(this.validationMessages);
  }

  ngOnInit(): void {
    let pwd = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15])]);
    let confirmPWD = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(pwd)]);

    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(150)]],
      document: ['', [Validators.required, NgBrazilValidators.cpf]],
      email: ['', [Validators.required, Validators.email]],
      password: pwd,
      passwordConfirm: confirmPWD,
    })
    console.log('this.registerForm', this.registerForm)
  }

  //Implementado após o documento HTML for devolvido ao usuário
  ngAfterViewInit(): void {
    //Mapeia os elementos em foco utilizado no formulário.
    let controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    //Irá realizar merge para todos os focos disponíveis no formulário.  
    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processMessage(this.registerForm);
    });
  };

  createUser() {
    if (this.registerForm.dirty && this.registerForm.valid) {
      this.user = Object.assign({}, this.user, this.registerForm.value);
      this.formResult = JSON.stringify(this.registerForm.value);
      window.alert('Dados enviados com sucesso')
    } else {
      window.alert('Preencha os campos obrigatórios')
    }
  }
}
