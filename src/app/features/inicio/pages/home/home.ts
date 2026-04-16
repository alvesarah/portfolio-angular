import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Metrica {
  valor: string;
  titulo: string;
}
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  titulo = 'Sarah Alves';
  cargo = 'Desenvolvedora Front-end';
  descricao =
    'Transformo ideias em interfaces digitais claras, acessíveis e que proporcionam boas experiências.';

  imagemPerfil = {
    src: 'imagens/sarah.jpg',
    alt: 'Foto de Sarah Alves',
  };

  metricas: Metrica[] = [
    { valor: '+10', titulo: 'Projetos concluídos' },
    { valor: '+2', titulo: 'Anos de experiência' },
    { valor: '+5', titulo: 'Tecnologias principais' },
    { valor: 'Foco em', titulo: 'Interface, performance e acessibilidade' },
  ];
}
