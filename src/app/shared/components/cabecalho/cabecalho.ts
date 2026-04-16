import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cabecalho',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cabecalho.html',
  styleUrl: './cabecalho.scss',
})
export class Cabecalho implements OnInit {
  temaAtual: 'claro' | 'escuro' = 'claro';
  menuAberto = false;

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

  alternarMenu(): void {
    this.menuAberto = !this.menuAberto;
  }

  fecharMenu(): void {
    this.menuAberto = false;
  }

  private aplicarTema(): void {
    document.documentElement.setAttribute('data-tema', this.temaAtual);
    localStorage.setItem('tema', this.temaAtual);
  }

  get temaEscuroAtivo(): boolean {
    return this.temaAtual === 'escuro';
  }
}
