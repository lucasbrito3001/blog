import { describe, it, expect } from 'vitest'
import { formatTitle, joinObjectsKeyInARow } from '.'

describe('Testing blog services', () => {
    it('test the title formatter', () => {
        const formattedTitle = formatTitle('Formatted tiTLe TEsT')
        expect(formattedTitle).toBe('formatted-title-test')
    })

    it('test the categories values joiner', () => {
        const joinedCategories = joinObjectsKeyInARow([
            { text: "JavaScript", value: 'js' },
            { text: "TypeScript", value: 'ts' }
        ], 'value', ';')
        expect(joinedCategories).toBe('js;ts')
    })
})