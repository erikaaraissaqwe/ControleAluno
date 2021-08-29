// Erika Raissa Bueno da Silva - SC3003213
import { Component, OnInit } from '@angular/core';

import { Aluno } from '../aluno.model';

@Component({
  selector: 'app-listar-aluno',
  templateUrl: './listar-aluno.component.html',
  styleUrls: ['./listar-aluno.component.css']
})
export class ListarAlunoComponent implements OnInit {
  ngOnInit(): void {
  }

  constructor() { }

  aluno: Aluno = {
    name: "Erika Raissa Bueno da Silva",
    entryDate: "26/07/2018",
    graduationPrediction: "20/12/2021",
  };


}
