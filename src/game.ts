import { MoveEntity } from './utils/MoveEntity'

const entity = new Entity()
entity.addComponent(new GLTFShape('models/speaker_player.glb'))
entity.addComponent(
  new Transform({
    position: new Vector3(0, 1, 0),
    rotation: new Quaternion(0, 0, 0, 0),
    scale: new Vector3(3, 3, 3),
  }),
)

entity.addComponent(
  new OnPointerDown((e) => {
    const streamSource = new Entity()
    streamSource.addComponent(
      new AudioStream('https://edge.singsingmusic.net/MC2.mp3'),
    )
    engine.addEntity(streamSource)

    streamSource.getComponent(AudioStream).playing = true
  }),
)

engine.addEntity(entity)
