import Phaser from 'phaser';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'game-container',
  width: 800,
  height: 600,
  backgroundColor: '#000000',
  scene: {
    preload: () => {},
    create: () => {},
    update: () => {},
  },
};

const game = new Phaser.Game(config);
export default game;
