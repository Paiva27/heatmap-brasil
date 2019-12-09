import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //Ordem do vetor:
    /*
    0 - Acre (AC)
    1 - Alagoas (AL)
    2 - Amapá (AP)
    3 - Amazonas (AM)
    4 - Bahia (BA)
    5 - Ceará (CE)
    6 - Distrito Federal (DF)
    7 - Espírito Santo (ES)
    8 - Goiás (GO)
    9 - Maranhão (MA)
    10 - Mato Grosso (MT)
    11 - Mato Grosso do Sul (MS)
    12 - Minas Gerais (MG)
    13 - Pará (PA) 
    14 - Paraíba (PB)
    15 - Paraná (PR)
    16 - Pernambuco (PE)
    17 - Piauí (PI)
    18 - Rio de Janeiro (RJ)
    19 - Rio Grande do Norte (RN)
    20 - Rio Grande do Sul (RS)
    21 - Rondônia (RO)
    22 - Roraima (RR)
    23 - Santa Catarina (SC)
    24 - São Paulo (SP)
    25 - Sergipe (SE)
    26 - Tocantins (TO)
    */
    //Dados entrariam nesse vetor
    var numeroNoticiasEstados = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];

    var maiorValor = Math.max.apply(null, numeroNoticiasEstados);
    var valorGreen = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    
    for (let i in numeroNoticiasEstados){
      valorGreen[i] = (255 - ((numeroNoticiasEstados[i]*255)/maiorValor))
    }
    
    document.getElementById("shape_ac").style.fill = `rgb(255,${valorGreen[0]}, 0)`
    document.getElementById("shape_al").style.fill = `rgb(255,${valorGreen[1]}, 0)`
    document.getElementById("icon_al").style.fill = `rgb(255,${valorGreen[1]}, 0)`
    document.getElementById("shape_ap").style.fill = `rgb(255,${valorGreen[2]}, 0)`
    document.getElementById("shape_am").style.fill = `rgb(255,${valorGreen[3]}, 0)`
    document.getElementById("shape_ba").style.fill = `rgb(255,${valorGreen[4]}, 0)`
    document.getElementById("shape_ce").style.fill = `rgb(255,${valorGreen[5]}, 0)`
    document.getElementById("icon_df").style.fill = `rgb(255,${valorGreen[6]}, 0)`
    document.getElementById("shape_es").style.fill = `rgb(255,${valorGreen[7]}, 0)`
    document.getElementById("icon_es").style.fill = `rgb(255,${valorGreen[7]}, 0)`
    document.getElementById("shape_go").style.fill = `rgb(255,${valorGreen[8]}, 0)`
    document.getElementById("shape_ma").style.fill = `rgb(255,${valorGreen[9]}, 0)`
    document.getElementById("shape_mt").style.fill = `rgb(255,${valorGreen[10]}, 0)`
    document.getElementById("shape_ms").style.fill = `rgb(255,${valorGreen[11]}, 0)`
    document.getElementById("shape_mg").style.fill = `rgb(255,${valorGreen[12]}, 0)`
    document.getElementById("shape_pa").style.fill = `rgb(255,${valorGreen[13]}, 0)`
    document.getElementById("shape_pb").style.fill = `rgb(255,${valorGreen[14]}, 0)`
    document.getElementById("icon_pb").style.fill = `rgb(255,${valorGreen[14]}, 0)`
    document.getElementById("shape_pr").style.fill = `rgb(255,${valorGreen[15]}, 0)`
    document.getElementById("shape_pe").style.fill = `rgb(255,${valorGreen[16]}, 0)`
    document.getElementById("shape_pi").style.fill = `rgb(255,${valorGreen[17]}, 0)`
    document.getElementById("shape_rj").style.fill = `rgb(255,${valorGreen[18]}, 0)`
    document.getElementById("icon_rj").style.fill = `rgb(255,${valorGreen[18]}, 0)`
    document.getElementById("shape_rn").style.fill = `rgb(255,${valorGreen[19]}, 0)`
    document.getElementById("icon_rn").style.fill = `rgb(255,${valorGreen[19]}, 0)`
    document.getElementById("shape_rs").style.fill = `rgb(255,${valorGreen[20]}, 0)`
    document.getElementById("shape_ro").style.fill = `rgb(255,${valorGreen[21]}, 0)`
    document.getElementById("shape_rr").style.fill = `rgb(255,${valorGreen[22]}, 0)`
    document.getElementById("shape_sc").style.fill = `rgb(255,${valorGreen[23]}, 0)`
    document.getElementById("shape_sp").style.fill = `rgb(255,${valorGreen[24]}, 0)`
    document.getElementById("shape_se").style.fill = `rgb(255,${valorGreen[25]}, 0)`
    document.getElementById("icon_se").style.fill = `rgb(255,${valorGreen[25]}, 0)`
    document.getElementById("shape_to").style.fill = `rgb(255,${valorGreen[26]}, 0)`

  }


  public mensagem() {
    document.getElementById("shape_ba").style.fill = "#f00"
  }

  public changeStyle(evento){
    if(evento.path[1].id == "state_pe")
    console.log("cu")
    
    
  }

}

