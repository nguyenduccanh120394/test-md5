import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {BookService} from '../../service/book.service';
import {PlayerService} from '../../service/player.service';

@Component({
  selector: 'app-player-delete',
  templateUrl: './player-delete.component.html',
  styleUrls: ['./player-delete.component.css']
})
export class PlayerDeleteComponent implements OnInit {
  playerForm : FormGroup ;
  id = 0;
  constructor(private router: Router, private playerService: PlayerService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((data: ParamMap) => {
      // @ts-ignore
      this.id = data.get('id')
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
  delete(id: number){
    this.playerService.deletePlayer(id).subscribe(() =>{
      this.router.navigate(['/player']).then(function(){
        location.reload()
      })
    })
  }
  ngOnInit(): void {
  }

}
