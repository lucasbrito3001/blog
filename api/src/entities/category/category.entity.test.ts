import { describe, expect, it } from "vitest";
import { CategoryEntity } from "./category.entity"

const newCategory = {
    value: 'teste',
    text: 'Teste'
}

describe('Testing entity - Category', () => {
    it('should create a category successfully', () => {
        const categoryEntity = new CategoryEntity(newCategory)

        const category = categoryEntity.create()

        expect(category).toStrictEqual(newCategory)
    })

    it('should create a category with an error missing infos - text', () => {
        const categoryEntity = new CategoryEntity({ ...newCategory, text: '' })

        const category = categoryEntity.create()

        expect(category).toStrictEqual({ error: "Error to create category, invalid or missing infos" })
    })

    it('should create a category with an error missing infos - value', () => {
        const categoryEntity = new CategoryEntity({ ...newCategory, value: '' })

        const category = categoryEntity.create()

        expect(category).toStrictEqual({ error: "Error to create category, invalid or missing infos" })
    })
})