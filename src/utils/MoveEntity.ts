export class MoveEntity implements ISystem {
  entity: Entity;

  constructor(entity: Entity) {
    this.entity = entity;
  }

  update() {
    const transform = this.entity.getComponent(Transform);
    const playerPosition = Camera.instance.position;

    transform.rotation = new Quaternion(0, 90, 0, 0);
    transform.position = playerPosition.add(new Vector3(0.6, 0.2, 0.2));
  }
}
