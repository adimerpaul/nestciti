import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UpdateUserDto {
    @IsString({ message: 'Nombre debe ser un string' })
    @MinLength(3, { message: 'Nombre debe tener al menos 3 caracteres' })
    @IsNotEmpty({ message: 'Nombre es requerido' })
    name?: string;
    @IsString({ message: 'Email debe ser un string' })
    @IsEmail({}, { message: 'Email no es valido' })
    email?: string;
}