export class MoveEntity implements ISystem {
  entity: Entity
  constructor(entity: Entity) {
    this.entity = entity
  }
  update() {}
}
