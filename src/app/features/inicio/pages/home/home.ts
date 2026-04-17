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

interface DestaqueSobre {
  titulo: string;
  descricao: string;
}

interface Experiencia {
  empresa: string;
  cargo: string;
  contexto: string;
  descricao: string;
  tecnologias: string[];
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

  sobreParagrafos: string[] = [
    'Sou desenvolvedora front-end com experiência em projetos corporativos e construção de interfaces para web, sempre buscando unir organização visual, clareza e boa usabilidade.',
    'Tenho vivência com sistemas legados e manutenção evolutiva, principalmente com Angular, além de atenção especial para acessibilidade, componentização e experiência do usuário.',
    'Meu foco é continuar evoluindo como desenvolvedora, aprofundando conhecimentos em arquitetura front-end, performance e criação de produtos cada vez mais consistentes.',
  ];

  destaquesSobre: DestaqueSobre[] = [
    {
      titulo: 'Interfaces acessíveis',
      descricao: 'Preocupação com legibilidade, navegação e experiências mais inclusivas.',
    },
    {
      titulo: 'Código organizado',
      descricao: 'Estruturas pensadas para manutenção, evolução e componentização.',
    },
    {
      titulo: 'Sistemas corporativos',
      descricao: 'Vivência com contextos reais de negócio, regras e fluxos complexos.',
    },
    {
      titulo: 'Evolução constante',
      descricao: 'Estudo contínuo para crescer em arquitetura, performance e front-end.',
    },
  ];

  tecnologiasPrincipais: string[] = [
    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML',
    'SCSS',
    'React',
    'Next.js',
    'Node.js',
    'Jest',
    'Karma',
    'Storybook',
    'Git',
  ];

  experiencias: Experiencia[] = [
    {
      empresa: 'Foursys / Bradesco',
      cargo: 'Desenvolvedora Front-End',
      contexto: 'Projetos corporativos',
      descricao:
        'Atuação em projeto para o Bradesco com foco em front-end Angular, manutenção e evolução de sistema legado, melhorias de interface, acessibilidade e suporte ao desenvolvimento de novas funcionalidades.',
      tecnologias: ['Angular', 'TypeScript', 'Acessibilidade', 'Sistemas legados'],
    },
    {
      empresa: 'Grupo Voga',
      cargo: 'Desenvolvedora',
      contexto: 'Soluções web',
      descricao:
        'Participação no desenvolvimento e manutenção de soluções web, contribuindo com implementação de funcionalidades, organização do código e evolução das interfaces.',
      tecnologias: ['Front-end', 'Interfaces', 'Manutenção evolutiva'],
    },
    {
      empresa: 'RBI Logística Reversa',
      cargo: 'Desenvolvedora',
      contexto: 'Produto de negócio',
      descricao:
        'Atuação em sistema voltado à logística reversa, trabalhando na manutenção da aplicação, criação de melhorias e desenvolvimento de funcionalidades alinhadas às necessidades do negócio.',
      tecnologias: ['Produto web', 'Manutenção', 'Regras de negócio'],
    },
  ];
}
