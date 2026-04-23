import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface DestaqueSobre {
  titulo: string;
  descricao: string;
}

interface GrupoTecnologia {
  titulo: string;
  itens: string[];
}

interface Experiencia {
  empresa: string;
  cargo: string;
  contexto: string;
  descricao: string;
  tecnologias: string[];
}

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sobre.html',
  styleUrl: './sobre.scss',
})
export class Sobre {
  apresentacao: string[] = [
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

  gruposTecnologia: GrupoTecnologia[] = [
    {
      titulo: 'Front-end',
      itens: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'SCSS', 'React', 'Next.js'],
    },
    {
      titulo: 'Qualidade e experiência',
      itens: ['Acessibilidade', 'UX/UI', 'Responsividade', 'Componentização', 'Performance'],
    },
    {
      titulo: 'Ferramentas',
      itens: ['Node.js', 'Jest', 'Karma', 'Storybook', 'Git'],
    },
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
