import { IsEmail, IsNotEmpty, IsString, Min, MinLength } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty({message: 'Nombre es requerido'})
    @IsString({message: 'Nombre debe ser un string'})
    @MinLength(3, {message: 'Nombre debe tener al menos 3 caracteres'})
    name: string;

    @IsNotEmpty({message: 'Email es requerido'})
    @IsString({message: 'Email debe ser un string'})
    @IsEmail({}, {message: 'Email no es valido'})
    email: string;
}