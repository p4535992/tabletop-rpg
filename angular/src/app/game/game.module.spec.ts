import { GameModule } from './game.module';

describe('GameModule', () => {
  let gameModule: GameModule;

  beforeEach(async () => {
    gameModule = new GameModule();
  });

  it('should create an instance', () => {
    expect(gameModule).toBeTruthy();
  });
});
