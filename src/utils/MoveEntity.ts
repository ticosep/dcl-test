export class MoveEntity implements ISystem {
  entity: Entity;

  constructor(entity: Entity) {
    this.entity = entity;
  }

  update() {
    const transform = this.entity.getComponent(Transform);
    const playerPosition = Camera.instance.position;

    transform.rotation = Camera.instance.rotation;
    transform.position = playerPosition.add(new Vector3(1.2, 1.2, 1.2));
  }
}
