import { ICategoryDTO } from "../../interfaces/dto/category.interface.dto";
import { IStringError } from "../../interfaces/stringError.interface";
import { ICategoryEntity } from "./category.entity.interface";

export class CategoryEntity implements ICategoryEntity {
    public readonly value
    public readonly text

    constructor({ value, text}: ICategoryDTO) {
        this.value = value
        this.text = text
    }

    create() {
        const isValidValue = this.validateValue()
        const isValidText = this.validateText()

        if(!isValidValue || !isValidText) {
            const error: IStringError = {
                error: "Error to create category, invalid or missing infos"
            }
            
            return error
        }

        const category: ICategoryDTO = { value: this.value, text: this.text }

        return category
    }

    validateValue() {
        return typeof this.value === 'string' && this.value.length > 0;
    }

    validateText() {
        return typeof this.text === 'string' && this.text.length > 0;
    }
}