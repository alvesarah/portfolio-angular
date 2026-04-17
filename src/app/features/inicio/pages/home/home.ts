import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Metrica {
  valor: string;
  titulo: string;
}

interface Projeto {
  nome: string;
  tipo: string;
  descricao: string;
  tecnologias: string[];
  linkDemo: string;
  linkCodigo: string;
  imagem: {
    src: string;
    alt: string;
  };
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

  projetos: Projeto[] = [
    {
      nome: 'Portfolio Pessoal',
      tipo: 'Projeto pessoal',
      descricao:
        'Portfólio desenvolvido para apresentar minha trajetória, projetos e habilidades com foco em visual moderno, responsividade e organização.',
      tecnologias: ['Angular', 'TypeScript', 'SCSS', 'HTML'],
      linkDemo: '#',
      linkCodigo: '#',
      imagem: {
        src: 'imagens/projetos/portfolio.jpg',
        alt: 'Preview do projeto Portfolio Pessoal',
      },
    },
    {
      nome: 'Dashboard Administrativo',
      tipo: 'Estudo de interface',
      descricao:
        'Tela administrativa pensada para centralizar informações, facilitar consultas e melhorar a visualização de dados com uma interface limpa.',
      tecnologias: ['Angular', 'SCSS', 'Componentização'],
      linkDemo: '#',
      linkCodigo: '#',
      imagem: {
        src: 'imagens/projetos/dashboard.jpg',
        alt: 'Preview do projeto Dashboard Administrativo',
      },
    },
    {
      nome: 'Sistema Responsivo',
      tipo: 'Projeto front-end',
      descricao:
        'Projeto focado em construção de layouts adaptáveis para diferentes tamanhos de tela, priorizando experiência do usuário e boa legibilidade.',
      tecnologias: ['HTML', 'SCSS', 'Responsividade', 'UX/UI'],
      linkDemo: '#',
      linkCodigo: '#',
      imagem: {
        src: 'imagens/projetos/responsivo.jpg',
        alt: 'Preview do projeto Sistema Responsivo',
      },
    },
  ];
}
