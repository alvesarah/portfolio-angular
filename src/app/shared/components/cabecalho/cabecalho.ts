import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.scss',
})
export class Cabecalho implements OnInit {
  temaAtual: 'claro' | 'escuro' = 'claro';

  ngOnInit(): void {
    const temaSalvo = localStorage.getItem('tema');

    if (temaSalvo === 'escuro' || temaSalvo === 'claro') {
      this.temaAtual = temaSalvo;
    }

    this.aplicarTema();
  }

  alternarTema(): void {
    this.temaAtual = this.temaAtual === 'claro' ? 'escuro' : 'claro';
    this.aplicarTema();
  }

  private aplicarTema(): void {
    document.documentElement.setAttribute('data-tema', this.temaAtual);
    localStorage.setItem('tema', this.temaAtual);
  }

  get temaEscuroAtivo(): boolean {
    return this.temaAtual === 'escuro';
  }
}
