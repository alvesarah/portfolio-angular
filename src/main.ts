// Liga a aplicação Angular e inicia o processo de bootstrap.
// O método bootstrapApplication é usado para carregar o componente raiz da
// aplicação (App) e aplicar as configurações definidas em appConfig.
// Se ocorrer algum erro durante o processo de bootstrap, ele será capturado e
// exibido no console.
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch((err) => console.error(err));
