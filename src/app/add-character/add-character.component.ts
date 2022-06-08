import {Component, NgZone, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CharacterService} from '../character.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  submitted = false;
  characterForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
              public router: Router,
              private ngZone: NgZone,
              private characterService: CharacterService
              ) {
  }

  ngOnInit(): void {
  }

  mainForm() {
    this.characterForm = this.formBuilder.group({
      name: ['', [Validators.required]],
    });
  }

  onSubmit() {
   this.submitted = true;
   if (!this.characterForm.valid){
     return false;
   } else{
     return this.characterService.createCharacter(this.characterForm.value)
       .subscribe({
         complete: () => {
           console.log('Character successfully created !'),
             this.ngZone.run( () => this.router.navigateByUrl('/create'));
     },
         error: (e) => {
           console.log(e);
         },
       });
   }
  }
}
