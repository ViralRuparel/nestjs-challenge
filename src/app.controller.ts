import { Controller, Get, Render, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get('app/*')
  @Render('index')
  serveReactApp() {
    return { message: 'NestJS Challenge!' };
  }

  @Get('app')
  redirectToPage1(@Res() res: Response) {
    res.redirect('/app/page1');
  }

  @Get()
  @Render('index')
  serveReactHome() {
    return { message: 'HOME' };
  }
}
