import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './create-store.dto';
import { IsBoolean, IsString } from 'class-validator';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
  @IsString()
  store_name: string;

  @IsString()
  phone_number: string

  @IsString()
  address: string

  @IsString()
  longitude: string;

  @IsString()
  latitude: string;

  @IsBoolean()
  status: boolean
}
