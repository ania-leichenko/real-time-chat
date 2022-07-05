import { Permission as PermissionM } from '~/data/models/models';
import { EAMPermissionGetAllItemResponseDto } from '~/common/types/types';

type Constructor = {
  PermissionModel: typeof PermissionM;
};

class Permission {
  #PermissionModel: typeof PermissionM;

  constructor({ PermissionModel }: Constructor) {
    this.#PermissionModel = PermissionModel;
  }

  public async getAll(): Promise<EAMPermissionGetAllItemResponseDto[]> {
    return this.#PermissionModel.query().select().orderBy('name', 'asc');
  }
}

export { Permission };
