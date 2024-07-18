import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('serveReactApp', () => {
    it('should return an object with a message property', () => {
      const result = appController.serveReactApp();
      expect(result).toHaveProperty('message');
      expect(result.message).toBe('NestJS Challenge!');
    });
  });
});
