import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {PlayerService} from '../../service/player.service';

@Component({
  selector: 'app-player-edit',
  templateUrl: './player-edit.component.html',
  styleUrls: ['./player-edit.component.css']
})
export class PlayerEditComponent implements OnInit {
  playerForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    champ: new FormControl('', Validators.required),
    kda: new FormControl('', Validators.required),
    des: new FormControl('', Validators.required),
  });
  id = 0;
  closeResult = '';
  constructor(private modalService: NgbModal,private playerService: PlayerService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((data:ParamMap) => {
      // @ts-ignore
      this.id = +data.get('id')
      console.log(this.id)
      this.getPlayer(this.id)
    })
  }
  getPlayer(id: number){
    return this.playerService.findById(id).subscribe(player =>{
      this.playerForm = new FormGroup({
        name: new FormControl(player.name),
        champ: new FormControl(player.champ),
        kda: new FormControl(player.kda),
        des: new FormControl(player.des),
      })
    })
  }
  update(id:number){
    const player = {
      id: id,
      name: this.playerForm.value.name,
      champ: this.playerForm.value.champ,
      kda: this.playerForm.value.kda,
      des: this.playerForm.value.des,
    };
    console.log(player)
    this.playerService.updatePlayer(id,player).subscribe(()=>{
      alert("Edit Success");
      this.router.navigate(['/player']).then(function(){
        location.reload()
      });
    })
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
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return '';
    } else {
      return '';
    }
  }
  ngOnInit(): void {
  }

}
