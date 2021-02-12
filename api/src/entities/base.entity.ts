import { ApiProperty } from '@nestjs/swagger';
import { CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm';

export class BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({
        type: String,
    })
    id?: string;

    @CreateDateColumn({
        nullable: true,
    })
    @ApiProperty({
        type: String,
    })
    createdAt?: Date;

    @CreateDateColumn({
        nullable: true,
    })
    @ApiProperty({
        type: String,
    })
    updatedAt?: Date;
}
