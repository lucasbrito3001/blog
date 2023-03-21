import { ICategoryDTO } from "../../interfaces/dto/category.interface.dto";
import { IStringError } from "../../interfaces/stringError.interface";

export interface ICategoryEntity {
    value: string
    text: string

    create(): IStringError | ICategoryDTO

    validateValue(): boolean
    validateText(): boolean
}