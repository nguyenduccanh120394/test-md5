import { Component, OnInit } from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {PlayerService} from '../../service/player.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  closeResult = '';
  playerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    champ: new FormControl('', Validators.required),
    kda: new FormControl('', Validators.required),
    des: new FormControl('', Validators.required),
  });
  constructor(private modalService: NgbModal ,private playerService: PlayerService, private router: Router ) { }

  ngOnInit(): void {
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return '';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return '';
    } else {
      return '';
    }
  }
  create(){
    console.log(this.playerForm.value);
    const player = {
      name: this.playerForm.value.name,
      champ: this.playerForm.value.champ,
      kda: this.playerForm.value.kda,
      des: this.playerForm.value.des,
    }
    this.playerService.saveBook(player).subscribe(()=>{
      alert("Create Success")
      this.router.navigate(['/player']).then(function(){
        location.reload()
      })
    }, error => {console.log(error)})
  }
}
